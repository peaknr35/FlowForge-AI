/**
 * Legacy API compatibility layer
 * Routes to src/lib/inference.ts for Ollama + Anthropic fallback
 *
 * This file is maintained for backwards compatibility.
 * New code should prefer: import { callAI, callAIStream } from '@/lib/inference'
 */

import { callAI as callAIBase, callAIStream as callAIStreamBase, AIResponse } from './inference';
import { SYSTEM_PROMPTS, MODULE_CONFIG } from './prompts';

export { AIResponse };

/**
 * Call AI for a specific module
 * Automatically routes to Ollama or Anthropic based on availability
 */
export async function callAI(
  moduleName: string,
  userInput: string,
  overrideModel?: string
): Promise<AIResponse> {
  const config = MODULE_CONFIG[moduleName];
  if (!config) throw new Error(`Unknown module: ${moduleName}`);

  const systemPrompt = SYSTEM_PROMPTS[moduleName];
  if (!systemPrompt) throw new Error(`No system prompt for module: ${moduleName}`);

  return callAIBase(moduleName, userInput, config, systemPrompt, overrideModel);
}

/**
 * Call an AI agent directly
 */
export async function callAgent(
  systemPrompt: string,
  userInput: string,
  model: string = 'qwen3:latest',
  maxTokens: number = 4096
): Promise<AIResponse> {
  // Map legacy Ollama model to Anthropic equivalent
  const claudeModel = mapOllamaModelToClaude(model);

  return callAIBase(
    'agent',
    userInput,
    { ollamaModel: model, claudeModel, maxTokens },
    systemPrompt
  );
}

/**
 * Stream version of callAgent
 */
export async function callAgentStream(
  systemPrompt: string,
  userInput: string,
  model: string = 'qwen3:latest',
  maxTokens: number = 4096,
  onChunk: (chunk: string) => void
): Promise<AIResponse> {
  // Map legacy Ollama model to Anthropic equivalent
  const claudeModel = mapOllamaModelToClaude(model);

  return callAIStreamBase(
    'agent',
    userInput,
    { ollamaModel: model, claudeModel, maxTokens },
    systemPrompt,
    onChunk
  );
}

/**
 * Map Ollama model names to equivalent Anthropic models
 */
function mapOllamaModelToClaude(ollamaModel: string): string {
  const mapping: Record<string, string> = {
    'qwen3:latest': 'claude-sonnet-4-5-20250514',
    'qwen3.5:latest': 'claude-haiku-4-5-20251001',
    'llama2': 'claude-sonnet-4-5-20250514',
    'mistral': 'claude-haiku-4-5-20251001',
    'neural-chat': 'claude-haiku-4-5-20251001',
  };
  return mapping[ollamaModel] || 'claude-sonnet-4-5-20250514';
}

/**
 * Backwards compatibility exports
 */
export { callAgent as callClaude };
