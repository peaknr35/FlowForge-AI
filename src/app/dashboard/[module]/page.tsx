'use client';

import { useState, useEffect } from 'react';
import { MODULE_CONFIG } from '@/lib/prompts';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Copy, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/Skeleton';

export default function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const [moduleName, setModuleName] = useState<string>('');
  params.then((p) => setModuleName(p.module));
  const config = MODULE_CONFIG[moduleName] || MODULE_CONFIG['niche-copywriter'];
  return <ModuleContent module={moduleName} config={config} />;
}

function ModuleContent({ module, config }: { module: string; config: typeof MODULE_CONFIG[string] }) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [usage, setUsage] = useState<{ used: number; limit: number; plan: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [ollamaModels, setOllamaModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [responseTime, setResponseTime] = useState<number>(0);

  useEffect(() => {
    setSelectedModel(config.ollamaModel || 'qwen3:latest');
  }, [config.ollamaModel]);

  useEffect(() => {
    fetch('/api/ollama/models')
      .then((r) => r.json())
      .then((data) => { if (data.models) setOllamaModels(data.models); })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    setResponseTime(0);

    try {
      const inputText = config.fields
        ? config.fields.map((f) => `${f.name}: ${inputs[f.name] || ''}`).join('\n')
        : inputs['default'] || '';

      if (inputText.trim().length < 10) {
        setError('Please provide at least 10 characters of input.');
        setLoading(false);
        return;
      }

      const startTime = Date.now();
      const res = await fetch(`/api/ai/${module}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inputText, model: selectedModel }),
      });

      const data = await res.json();
      setResponseTime(Date.now() - startTime);

      if (!res.ok) {
        if (data.error === 'LIMIT_REACHED') {
          setError(data.message || 'Usage limit reached. Please upgrade.');
        } else {
          setError(data.error || 'Generation failed. Please try again.');
        }
        return;
      }

      setResult(data.result);
      if (data.usage) setUsage(data.usage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-primary">{config.title}</h2>
          <p className="text-sm text-text-secondary mt-1">{config.description}</p>
        </div>

        {ollamaModels.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-bg-surface border border-border-default text-xs text-text-secondary rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-accent transition-colors duration-150"
            >
              {ollamaModels.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input panel */}
        <div className="bg-bg-surface border border-border-default rounded-[var(--radius-card)] p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Input</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {config.fields ? (
              config.fields.map((field) => (
                <Input
                  key={field.name}
                  label={field.name}
                  placeholder={field.placeholder}
                  value={inputs[field.name] || ''}
                  onChange={(e) => setInputs({ ...inputs, [field.name]: e.target.value })}
                  rows={2}
                  required
                />
              ))
            ) : (
              <Input
                placeholder={config.placeholder}
                value={inputs['default'] || ''}
                onChange={(e) => setInputs({ ...inputs, default: e.target.value })}
                rows={8}
                required
              />
            )}
            <Button type="submit" loading={loading} className="w-full">
              Generate
            </Button>
          </form>
        </div>

        {/* Output panel */}
        <div className="bg-bg-surface border border-border-default rounded-[var(--radius-card)] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-text-primary">Result</h3>
            <div className="flex items-center gap-3">
              {responseTime > 0 && (
                <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                  <Clock className="w-3 h-3" />
                  {responseTime}ms
                </span>
              )}
              {result && (
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {result ? (
            <div className="whitespace-pre-wrap bg-bg-base text-text-primary p-4 rounded-lg text-sm font-mono overflow-auto max-h-[600px] leading-relaxed">
              {result}
            </div>
          ) : loading ? (
            <div className="space-y-3">
              <Skeleton lines={6} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-text-tertiary text-sm">
              Output will appear here
            </div>
          )}

          {usage && (
            <div className="mt-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center justify-between text-xs text-text-tertiary">
                <span>{usage.used}/{usage.limit === Infinity ? '∞' : usage.limit} generations this month</span>
                <span className="font-mono text-text-secondary">{usage.plan} plan</span>
              </div>
              <div className="mt-2 h-1.5 bg-bg-surface-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${usage.limit === Infinity ? 5 : Math.min((usage.used / usage.limit) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}