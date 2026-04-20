const MAX_INPUT_LENGTH = 50000;
const MAX_MODULE_LENGTH = 64;
const MAX_MODEL_LENGTH = 128;

const VALID_MODULES = new Set([
  'workflow-architect',
  'bizplan-builder',
  'outreach-engine',
  'doc-analyzer',
  'niche-copywriter',
]);

export function sanitizeString(value: unknown, maxLength: number = MAX_INPUT_LENGTH): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return trimmed.slice(0, maxLength);
  return trimmed;
}

export function sanitizeModuleName(value: unknown): string {
  const name = sanitizeString(value, MAX_MODULE_LENGTH);
  return VALID_MODULES.has(name) ? name : '';
}

export function sanitizeModelName(value: unknown): string {
  return sanitizeString(value, MAX_MODEL_LENGTH);
}

export function sanitizeUserInput(value: unknown): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (trimmed.length < 10) return '';
  if (trimmed.length > MAX_INPUT_LENGTH) return trimmed.slice(0, MAX_INPUT_LENGTH);
  return trimmed;
}