import { SYSTEM_PROMPTS, MODULE_CONFIG } from './prompts';

export interface AIResponse {
  text: string;
  inputTokens: number;
  outputTokens: number;
  model: string;
}

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

export async function callAI(
  moduleName: string,
  userInput: string,
  overrideModel?: string
): Promise<AIResponse> {
  const config = MODULE_CONFIG[moduleName];
  if (!config) throw new Error(`Unknown module: ${moduleName}`);

  const systemPrompt = SYSTEM_PROMPTS[moduleName];
  if (!systemPrompt) throw new Error(`No system prompt for module: ${moduleName}`);

  const model = overrideModel || config.ollamaModel || config.model;

  const response = await fetch(`${OLLAMA_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      max_tokens: config.maxTokens,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userInput },
      ],
    }),
  });

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
    model,
  };
}

export const callClaude = callAI;

/**
 * Call an AI agent directly with custom system prompt and model.
 * Unlike callAI which uses MODULE_CONFIG, this accepts explicit parameters.
 */
export async function callAgent(
  systemPrompt: string,
  userInput: string,
  model: string = 'qwen3:latest',
  maxTokens: number = 4096
): Promise<AIResponse> {
  const response = await fetch(`${OLLAMA_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userInput },
      ],
    }),
  });

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
    model,
  };
}