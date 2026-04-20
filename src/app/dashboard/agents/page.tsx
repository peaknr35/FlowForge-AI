'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Agent {
  id: string;
  name: string;
  phase: string;
  description: string;
  slashCommand: string;
  hasAccess: boolean;
  required: string;
  current: string;
}

interface PhaseGroup {
  phase: string;
  agents: Agent[];
}

const PHASE_LABELS: Record<string, string> = {
  plan: 'Think & Plan',
  build: 'Build & Fix',
  qa: 'Test & Secure',
  ship: 'Ship & Deploy',
  monitor: 'Monitor & Alert',
};

const PHASE_ICONS: Record<string, string> = {
  plan: '🧠',
  build: '🔧',
  qa: '🔍',
  ship: '🚀',
  monitor: '📡',
};

const TIER_COLORS: Record<string, string> = {
  free: 'text-gray-500',
  starter: 'text-blue-400',
  pro: 'text-purple-400',
  agency: 'text-orange-400',
  lifetime: 'text-yellow-400',
};

export default function AgentsPage() {
  const router = useRouter();
  const [phases, setPhases] = useState<PhaseGroup[]>([]);
  const [tier, setTier] = useState<string>('free');
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAgents();
  }, []);

  async function fetchAgents() {
    try {
      const res = await fetch('/api/agents');
      if (!res.ok) {
        router.push('/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setPhases(data.data.phases);
        setTier(data.data.tier);
      }
    } catch {
      setError('Failed to load agents');
    } finally {
      setLoading(false);
    }
  }

  async function runAgent() {
    if (!selectedAgent || !input.trim()) return;

    setRunning(true);
    setOutput('');
    setError('');

    try {
      const res = await fetch(`/api/agents/${selectedAgent.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: input.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setOutput(data.data.output);
      } else {
        setError(data.error || 'Agent failed');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setRunning(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00d4aa]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Virtual Engineering Team</h1>
        <p className="text-gray-400 mt-1">
          Your AI agents for every phase of software development.
          Current plan: <span className={TIER_COLORS[tier]}>{tier}</span>
        </p>
      </div>

      {/* Sprint Pipeline */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {Object.entries(PHASE_LABELS).map(([phase, label]) => (
          <div
            key={phase}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1d2e] border border-[#2a2d3e] text-sm whitespace-nowrap"
          >
            <span>{PHASE_ICONS[phase]}</span>
            <span className="text-gray-300">{label}</span>
          </div>
        ))}
      </div>

      {/* Agent Grid by Phase */}
      <div className="space-y-8">
        {phases.map(({ phase, agents }) => (
          <div key={phase}>
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span>{PHASE_ICONS[phase]}</span>
              {PHASE_LABELS[phase]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => agent.hasAccess ? setSelectedAgent(agent) : null}
                  className={`text-left p-4 rounded-lg border transition-all ${
                    agent.hasAccess
                      ? 'border-[#2a2d3e] bg-[#1a1d2e] hover:border-[#00d4aa] hover:bg-[#1a1d2e]/80 cursor-pointer'
                      : 'border-[#1a1d2e] bg-[#0d0f1a] opacity-50 cursor-not-allowed'
                  } ${selectedAgent?.id === agent.id ? 'border-[#00d4aa] ring-1 ring-[#00d4aa]' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">{agent.name}</h3>
                    {agent.hasAccess ? (
                      <span className="text-xs px-2 py-0.5 rounded bg-[#00d4aa]/10 text-[#00d4aa]">
                        {agent.slashCommand}
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400">
                        Requires {agent.required}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{agent.description}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Agent Interaction Panel */}
      {selectedAgent && (
        <div className="border border-[#2a2d3e] rounded-lg bg-[#1a1d2e] p-6">
          <h2 className="text-lg font-semibold text-white mb-1">
            {PHASE_ICONS[selectedAgent.phase]} {selectedAgent.name}
          </h2>
          <p className="text-sm text-gray-400 mb-4">{selectedAgent.description}</p>

          <div className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Tell ${selectedAgent.name} what you need...`}
              className="w-full h-32 bg-[#0d0f1a] border border-[#2a2d3e] rounded-lg p-3 text-white placeholder-gray-500 focus:border-[#00d4aa] focus:outline-none resize-none"
              disabled={running}
            />

            <button
              onClick={runAgent}
              disabled={running || !input.trim()}
              className="px-6 py-2.5 bg-[#00d4aa] text-black font-medium rounded-lg hover:bg-[#00d4aa]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {running ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                  Running...
                </span>
              ) : (
                `Run ${selectedAgent.name}`
              )}
            </button>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {output && (
              <div className="p-4 rounded-lg bg-[#0d0f1a] border border-[#2a2d3e]">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {output}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}