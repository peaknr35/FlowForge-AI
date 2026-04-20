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

// Strip control characters except newline, tab, and carriage return
const CONTROL_CHAR_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

function stripControlChars(str: string): string {
  return str.replace(CONTROL_CHAR_REGEX, '');
}

export function sanitizeString(value: unknown, maxLength: number = MAX_INPUT_LENGTH): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  const cleaned = stripControlChars(trimmed);
  if (cleaned.length > maxLength) return cleaned.slice(0, maxLength);
  return cleaned;
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
  const cleaned = stripControlChars(trimmed);
  if (cleaned.length < 10) return '';
  if (cleaned.length > MAX_INPUT_LENGTH) return cleaned.slice(0, MAX_INPUT_LENGTH);
  return cleaned;
}