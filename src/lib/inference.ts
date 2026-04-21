/**
 * Unified inference layer: Ollama with Anthropic fallback
 * - Tries Ollama first (for local/Docker setups)
 * - Falls back to Anthropic API on failure (for Vercel/serverless)
 * - Graceful degradation with same interface
 */

import Anthropic from '@anthropic-ai/sdk';

export interface AIResponse {
  text: string;
  inputTokens: number;
  outputTokens: number;
  model: string;
  provider: 'ollama' | 'anthropic';
}

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const OLLAMA_TIMEOUT = 30000; // 30 seconds
const ENABLE_ANTHROPIC_FALLBACK = process.env.ENABLE_ANTHROPIC_FALLBACK !== 'false';

interface InferenceConfig {
  ollamaModel: string;
  claudeModel: string;
  maxTokens: number;
}

/**
 * Try Ollama first, fall back to Anthropic on timeout/error
 */
async function inferenceWithFallback(
  systemPrompt: string,
  userInput: string,
  config: InferenceConfig,
  onChunk?: (chunk: string) => void
): Promise<AIResponse> {
  // Try Ollama first
  try {
    return await callOllama(systemPrompt, userInput, config, onChunk);
  } catch (ollamaError) {
    console.warn('[Inference] Ollama failed, falling back to Anthropic:', ollamaError);
    
    if (!ENABLE_ANTHROPIC_FALLBACK) {
      throw new Error(
        `Ollama inference failed and Anthropic fallback is disabled. ` +
        `Set ENABLE_ANTHROPIC_FALLBACK=true to enable fallback.`
      );
    }

    // Fall back to Anthropic
    try {
      return await callAnthropicAPI(systemPrompt, userInput, config, onChunk);
    } catch (anthropicError) {
      throw new Error(
        `Both Ollama and Anthropic inference failed. ` +
        `Ollama: ${ollamaError}. Anthropic: ${anthropicError}`
      );
    }
  }
}

/**
 * Call Ollama with timeout
 */
async function callOllama(
  systemPrompt: string,
  userInput: string,
  config: InferenceConfig,
  onChunk?: (chunk: string) => void
): Promise<AIResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), OLLAMA_TIMEOUT);

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.ollamaModel,
        max_tokens: config.maxTokens,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput },
        ],
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];
    const text = choice?.message?.content || '';

    return {
      text,
      inputTokens: data.usage?.prompt_tokens || 0,
      outputTokens: data.usage?.completion_tokens || 0,
      model: config.ollamaModel,
      provider: 'ollama',
    };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Call Anthropic API directly
 */
async function callAnthropicAPI(
  systemPrompt: string,
  userInput: string,
  config: InferenceConfig,
  onChunk?: (chunk: string) => void
): Promise<AIResponse> {
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  if (onChunk) {
    // Streaming mode
    let fullText = '';

    const stream = client.messages.stream({
      model: config.claudeModel,
      max_tokens: config.maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userInput }],
    });

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        fullText += chunk.delta.text;
        onChunk(chunk.delta.text);
      }
    }

    const finalMessage = await stream.finalMessage();

    return {
      text: fullText,
      inputTokens: finalMessage.usage.input_tokens,
      outputTokens: finalMessage.usage.output_tokens,
      model: config.claudeModel,
      provider: 'anthropic',
    };
  } else {
    // Non-streaming mode
    const message = await client.messages.create({
      model: config.claudeModel,
      max_tokens: config.maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userInput }],
    });

    const text =
      message.content[0].type === 'text' ? message.content[0].text : '';

    return {
      text,
      inputTokens: message.usage.input_tokens,
      outputTokens: message.usage.output_tokens,
      model: config.claudeModel,
      provider: 'anthropic',
    };
  }
}

/**
 * Main entry point: call AI with automatic fallback
 */
export async function callAI(
  moduleName: string,
  userInput: string,
  moduleConfig: {
    ollamaModel: string;
    claudeModel: string;
    maxTokens: number;
  },
  systemPrompt: string,
  overrideModel?: string
): Promise<AIResponse> {
  const model = overrideModel || moduleConfig.ollamaModel;

  return inferenceWithFallback(
    systemPrompt,
    userInput,
    {
      ollamaModel: model,
      claudeModel: moduleConfig.claudeModel,
      maxTokens: moduleConfig.maxTokens,
    }
  );
}

/**
 * Stream version for chat-like interfaces
 */
export async function callAIStream(
  moduleName: string,
  userInput: string,
  moduleConfig: {
    ollamaModel: string;
    claudeModel: string;
    maxTokens: number;
  },
  systemPrompt: string,
  onChunk: (chunk: string) => void,
  overrideModel?: string
): Promise<AIResponse> {
  const model = overrideModel || moduleConfig.ollamaModel;

  return inferenceWithFallback(
    systemPrompt,
    userInput,
    {
      ollamaModel: model,
      claudeModel: moduleConfig.claudeModel,
      maxTokens: moduleConfig.maxTokens,
    },
    onChunk
  );
}

// Backwards compatibility exports
export async function callClaude(
  moduleName: string,
  userInput: string,
  moduleConfig: {
    ollamaModel: string;
    claudeModel: string;
    maxTokens: number;
  },
  systemPrompt: string,
  overrideModel?: string
): Promise<AIResponse> {
  return callAI(moduleName, userInput, moduleConfig, systemPrompt, overrideModel);
}

export async function callAgent(
  systemPrompt: string,
  userInput: string,
  ollamaModel: string = 'qwen3:latest',
  claudeModel: string = 'claude-sonnet-4-5-20250514',
  maxTokens: number = 4096
): Promise<AIResponse> {
  return inferenceWithFallback(
    systemPrompt,
    userInput,
    { ollamaModel, claudeModel, maxTokens }
  );
}

export async function callAgentStream(
  systemPrompt: string,
  userInput: string,
  onChunk: (chunk: string) => void,
  ollamaModel: string = 'qwen3:latest',
  claudeModel: string = 'claude-sonnet-4-5-20250514',
  maxTokens: number = 4096
): Promise<AIResponse> {
  return inferenceWithFallback(
    systemPrompt,
    userInput,
    { ollamaModel, claudeModel, maxTokens },
    onChunk
  );
}
