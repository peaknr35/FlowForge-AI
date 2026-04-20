# FlowForge AI

Five AI-powered business productivity tools in one dashboard. All processing runs locally on your hardware via Ollama -- your data never leaves your environment.

[![Modules: 5](https://img.shields.io/badge/modules-5-blue)](./src)
[![Agents: 12](https://img.shields.io/badge/agents-12-green)](./src)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](./LICENSE)

## Screenshot

![FlowForge AI Dashboard](./public/screenshot.png)

---

## What It Does

FlowForge AI gives you five production-ready AI modules and a virtual engineering team, all running inside your own environment.

### Modules

| # | Module | Output |
|---|--------|--------|
| 1 | Workflow Builder | n8n-style automation blueprints |
| 2 | Business Plan Generator | Structured business plans with financials |
| 3 | Cold Email Sequencer | Multi-step outreach sequences |
| 4 | Contract Analyzer | Risk flags, clause extraction, summaries |
| 5 | Niche Copy Engine | Audience-targeted marketing copy |

### Virtual Engineering Team

12 specialized agents coordinate across modules -- research, drafting, review, and quality assurance -- so every output is polished and consistent.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Auth + Database | Supabase |
| Payments | Stripe |
| Local Inference | Ollama |
| State | Zustand, TanStack Query |
| Validation | Zod |
| Styling | Tailwind CSS 4 |
| Language | TypeScript (strict) |

---

## Quick Start

```bash
git clone https://github.com/peaknr/flowforge-ai.git
cd flowforge-ai
cp .env.example .env.local   # fill in required keys
npm install
npm run dev
```

Open `http://localhost:3000`.

### Required Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_OLLAMA_URL=http://localhost:11434
```

---

## Pricing

| Plan | Monthly | Key Limits |
|------|---------|-----------|
| Starter | $49 | 3 modules, 50 generations/mo |
| Pro | $99 | 5 modules, 200 generations/mo |
| Agency | $299 | 5 modules, unlimited generations |
| Lifetime | $197 (one-time) | 5 modules, 500 generations/mo |

---

## Project Structure

```
src/
  app/          # Next.js App Router pages and API routes
  components/   # Shared UI components
  lib/          # Utilities, clients, helpers
  modules/      # Feature modules (workflow, plans, email, contract, copy)
  agents/       # 12 specialized AI agents
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the [MIT License](./LICENSE).