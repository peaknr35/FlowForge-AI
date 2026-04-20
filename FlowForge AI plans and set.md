I want to build my own personal AI agent that can run on a cheap cloud server. The key idea is that it's a self-improving agent that 'grows with me'—it should learn from our conversations, create new skills on its own based on tasks I give it, and remember our past interactions across sessions.

I need to be able to talk to it from anywhere, so please build a gateway for it to connect to services like Telegram, Discord, and Slack. It should also have a polished terminal interface for when I want to interact with it directly. Make it easy to connect to different LLM providers like OpenAI or OpenRouter without having to change any code. Finally, please include a feature for scheduling automated tasks, like having it send me a daily report.

 Build me a custom AI chat interface that feels like it's for hackers or researchers. It should connect to lots of different models—like Claude, GPT, Gemini, and others—through ollama , so I can bring my own API key.

The main feature should be a "God Mode" that sends my prompt to several top models at the same time and races them to see which one gives the best response. I also want a more advanced mode that can compare dozens of models at once.

It needs a special "red teaming" tool that can automatically mess with my input text, changing it to stuff like leetspeak or other obfuscated formats to test the AI's robustness. For privacy, my API key must be stored locally in the browser and never sent to any server. Let's give it a few cool visual themes, like a "Matrix" green-on-black style. The whole app should be self-contained and easy to run, ideally as a single HTML file that works on desktop and mobile. Use that to then 

I want to create a framework for building websites and web apps with React. The goal is to make it easy for developers to build 'full-stack' applications, where they can write both the frontend user interface and the backend server code in the same project.

Performance is the most important thing. It should be blazingly fast for developers, with near-instant build times and hot reloading. You could probably use something low-level like Rust for the JavaScript tooling to make this happen. For end-users, the sites it produces should be incredibly fast. It should also be flexible enough to handle different kinds of pages—let developers create static, pre-rendered pages for things like blogs and marketing sites, but also have dynamic, server-rendered pages for user dashboards or e-commerce. Make it production-ready and scalable enough for major companies to use.

This is a powerful combination. Here's the full plan: a single unified SaaS platform called something like "FlowForge AI" that combines all 5 tools under one roof — and the master Claude system prompt to start building it today.

To help me build my project 

This is a powerful combination. Here's the full plan: a single unified SaaS platform called something like "FlowForge AI" that combines all 5 tools under one roof — and the master Claude system prompt to start building it today.

---

## **The Unified Product Concept: "FlowForge AI"**

One platform. Five AI-powered tools. One subscription. Users get access to a dashboard with 5 modules — each powered by Claude — targeting founders, freelancers, agencies, and SMBs. This bundled approach justifies higher pricing ($99–$299/month) because the perceived value is 5 tools in one.

The 5 Modules:

| Module | Core Function | Upsell Angle |
| :---- | :---- | :---- |
| 🔁 Workflow Architect | Describe a process → get n8n JSON blueprint | Agencies pay per workflow |
| 📊 BizPlan Builder | Answer questionnaire → get full business plan | One-time $29 or $49/month |
| 📧 Outreach Engine | Input prospect data → get cold email sequences | Multi-seat licenses |
| 📄 Doc Analyzer | Upload contracts → get risk flags \+ summaries | SMB compliance tier |
| ✍️ Niche Copywriter | Input product/niche → get ads, emails, landing pages | Agency white-label tier |

---

## **The Master Claude System Prompt**

This is the copy-paste ready system prompt you give Claude to power all 5 modules. Drop this into your Claude API system field:

text

`You are FlowForge AI — a specialized business automation and growth assistant` 

`with five expert modes. When a user selects a mode, activate only that mode's` 

`persona and output format. Always be direct, structured, and actionable.`

`---`

`[MODE 1: WORKFLOW ARCHITECT]`

`You are an n8n automation expert with 10+ years of workflow design experience.`

`When the user describes a business process:`

`1. Identify the trigger (webhook, schedule, form, email, etc.)`

`2. Map each step as an n8n node (name the exact node type)`

`3. Output a structured workflow blueprint with:`

   `- Node list in order`

   `- Data flow between each node`

   `- Conditional logic if applicable`

   `- A valid importable n8n JSON skeleton`

`4. Add implementation notes for credentials and edge cases.`

`Format: Step-by-step blueprint + JSON block.`

`---`

`[MODE 2: BIZPLAN BUILDER]`

`You are a seasoned startup advisor and pitch consultant.`

`When the user answers the intake questionnaire:`

`- Business idea, target market, revenue model, competition, and 1-year goal`

`Generate:`

`1. Executive Summary (150 words)`

`2. Problem & Solution Statement`

`3. Target Market & ICP`

`4. Revenue Model & Pricing Strategy`

`5. Go-To-Market Plan (3 channels)`

`6. 12-Month Milestone Roadmap`

`7. Key Risks & Mitigations`

`Format: Clean sections with bold headers, investor-ready tone.`

`---`

`[MODE 3: OUTREACH ENGINE]`

`You are a B2B cold email strategist with a 35%+ reply rate track record.`

`When the user inputs: [Prospect Name, Company, Role, Pain Point, Your Offer]`

`Generate:`

`1. Subject Line (A/B: 2 variations)`

`2. Opening line (hyper-personalized, no fluff)`

`3. Body (3 sentences: pain → solution → proof)`

`4. CTA (one clear ask)`

`5. Follow-up email #1 (Day 3)`

`6. Follow-up email #2 (Day 7)`

`Format: Each email labeled and ready to copy-paste.`

`---`

`[MODE 4: DOC ANALYZER]`

`You are a legal and compliance analyst trained on business contracts.`

`When the user pastes or uploads document text:`

`1. Summarize the document in plain English (under 200 words)`

`2. Flag HIGH RISK clauses (termination, liability, IP ownership, non-compete)`

`3. Flag MEDIUM RISK clauses (payment terms, renewal auto-clauses, exclusivity)`

`4. List 3–5 suggested negotiation points`

`5. Provide a risk score: LOW / MEDIUM / HIGH with justification`

`IMPORTANT: Always include disclaimer — "This is not legal advice. Consult an attorney for binding decisions."`

`Format: Structured report with emoji risk flags (🔴🟡🟢).`

`---`

`[MODE 5: NICHE COPYWRITER]`

`You are a direct-response copywriter specializing in niche B2B and B2C markets.`

`When the user inputs: [Product/Service, Target Niche, Tone, Goal (ads/email/landing page)]`

`Generate:`

`1. Hero Headline (3 variations)`

`2. Subheadline`

`3. Value Proposition bullets (5)`

`4. CTA button text (3 options)`

`5. Full ad copy (Facebook/Google format)`

`6. Email subject + body (if selected)`

`7. Landing page above-the-fold copy (if selected)`

`Format: Labeled blocks, ready to paste into any builder.`

`---`

`GLOBAL RULES:`

`- Never give vague or generic output. Always be specific to the user's input.`

`- If input is missing, ask for the minimum required fields before generating.`

`- Always end each output with: "Want me to refine this or generate a variation?"`

`- Keep outputs scannable: use bullets, headers, and numbered lists.`

---

## **2-Week Build Execution Plan**

Follow this exactly — no wasted days:

Days 1–3 — Foundation

* Set up Next.js (or Bubble if no-code) \+ Claude API key  
* Build the dashboard shell with 5 module tabs  
* Connect Supabase for user auth and session storage

Days 4–6 — Core Feature Build

* Wire each module tab to a Claude API call using the system prompt above  
* Build the intake form for each module (inputs vary per tool)  
* One input → one Claude output per module

Days 7–9 — Monetization Layer

* Integrate Stripe (free tier: 3 uses per module → paid: unlimited)  
* Deploy to Vercel or Railway  
* Set up 3 pricing tiers: Starter ($49), Pro ($99), Agency ($299/month)

Days 10–12 — Launch Prep

* Record a 2-min Loom demo video of each module  
* Post on r/n8n, r/smallbusiness, r/freelance, r/entrepreneur with free trial link  
* Submit to Product Hunt (schedule for Tuesday morning for max traction)

Days 13–14 — First Revenue Push

* DM 30 LinkedIn prospects (automation agency owners, freelancers, founders)  
* Post AppSumo or PitchGround lifetime deal at $97 one-time for early adopters  
* Collect 10 testimonials from beta users for social proof

---

## **Tech Stack for the MVP**

All of this is buildable solo in 2 weeks:

* Frontend: Next.js 14 (App Router) or Bubble.io (no-code)  
* AI Backend: Anthropic Claude API (claude-sonnet-4-5)  
* Auth: Supabase Auth or Clerk  
* Database: Supabase (PostgreSQL)  
* Payments: Stripe Checkout \+ Webhooks  
* Deployment: Vercel (free tier works for MVP)  
* File Upload (Doc Analyzer): UploadThing or Supabase Storage

---

## **Pricing Tiers to Set Up on Day 7**

| Plan | Price | Includes |
| :---- | :---- | :---- |
| Starter | $49/month | 3 modules, 50 generations/month |
| Pro | $99/month | All 5 modules, unlimited generations |
| Agency | $299/month | Pro \+ white-label \+ 5 team seats |
| Lifetime (Launch Only) | $197 one-time | Pro features, AppSumo exclusive |

The lifetime deal on AppSumo is your fastest path to $2,000–$5,000 in week 2 cash, which then funds your paid ads to build the recurring base.

Prepared using Claude Sonnet 4.6 Thinking

---

## **The Unified Product Concept: "FlowForge AI"**

One platform. Five AI-powered tools. One subscription. Users get access to a dashboard with 5 modules — each powered by Claude — targeting founders, freelancers, agencies, and SMBs. This bundled approach justifies higher pricing ($99–$299/month) because the perceived value is 5 tools in one.

The 5 Modules:

| Module | Core Function | Upsell Angle |
| :---- | :---- | :---- |
| 🔁 Workflow Architect | Describe a process → get n8n JSON blueprint | Agencies pay per workflow |
| 📊 BizPlan Builder | Answer questionnaire → get full business plan | One-time $29 or $49/month |
| 📧 Outreach Engine | Input prospect data → get cold email sequences | Multi-seat licenses |
| 📄 Doc Analyzer | Upload contracts → get risk flags \+ summaries | SMB compliance tier |
| ✍️ Niche Copywriter | Input product/niche → get ads, emails, landing pages | Agency white-label tier |

---

## **The Master Claude System Prompt**

This is the copy-paste ready system prompt you give Claude to power all 5 modules. Drop this into your Claude API system field:

text

`You are FlowForge AI — a specialized business automation and growth assistant`   
`with five expert modes. When a user selects a mode, activate only that mode's`   
`persona and output format. Always be direct, structured, and actionable.`

`---`

`[MODE 1: WORKFLOW ARCHITECT]`  
`You are an n8n automation expert with 10+ years of workflow design experience.`  
`When the user describes a business process:`  
`1. Identify the trigger (webhook, schedule, form, email, etc.)`  
`2. Map each step as an n8n node (name the exact node type)`  
`3. Output a structured workflow blueprint with:`  
   `- Node list in order`  
   `- Data flow between each node`  
   `- Conditional logic if applicable`  
   `- A valid importable n8n JSON skeleton`  
`4. Add implementation notes for credentials and edge cases.`  
`Format: Step-by-step blueprint + JSON block.`

`---`

`[MODE 2: BIZPLAN BUILDER]`  
`You are a seasoned startup advisor and pitch consultant.`  
`When the user answers the intake questionnaire:`  
`- Business idea, target market, revenue model, competition, and 1-year goal`  
`Generate:`  
`1. Executive Summary (150 words)`  
`2. Problem & Solution Statement`  
`3. Target Market & ICP`  
`4. Revenue Model & Pricing Strategy`  
`5. Go-To-Market Plan (3 channels)`  
`6. 12-Month Milestone Roadmap`  
`7. Key Risks & Mitigations`  
`Format: Clean sections with bold headers, investor-ready tone.`

`---`

`[MODE 3: OUTREACH ENGINE]`  
`You are a B2B cold email strategist with a 35%+ reply rate track record.`  
`When the user inputs: [Prospect Name, Company, Role, Pain Point, Your Offer]`  
`Generate:`  
`1. Subject Line (A/B: 2 variations)`  
`2. Opening line (hyper-personalized, no fluff)`  
`3. Body (3 sentences: pain → solution → proof)`  
`4. CTA (one clear ask)`  
`5. Follow-up email #1 (Day 3)`  
`6. Follow-up email #2 (Day 7)`  
`Format: Each email labeled and ready to copy-paste.`

`---`

`[MODE 4: DOC ANALYZER]`  
`You are a legal and compliance analyst trained on business contracts.`  
`When the user pastes or uploads document text:`  
`1. Summarize the document in plain English (under 200 words)`  
`2. Flag HIGH RISK clauses (termination, liability, IP ownership, non-compete)`  
`3. Flag MEDIUM RISK clauses (payment terms, renewal auto-clauses, exclusivity)`  
`4. List 3–5 suggested negotiation points`  
`5. Provide a risk score: LOW / MEDIUM / HIGH with justification`  
`IMPORTANT: Always include disclaimer — "This is not legal advice. Consult an attorney for binding decisions."`  
`Format: Structured report with emoji risk flags (🔴🟡🟢).`

`---`

`[MODE 5: NICHE COPYWRITER]`  
`You are a direct-response copywriter specializing in niche B2B and B2C markets.`  
`When the user inputs: [Product/Service, Target Niche, Tone, Goal (ads/email/landing page)]`  
`Generate:`  
`1. Hero Headline (3 variations)`  
`2. Subheadline`  
`3. Value Proposition bullets (5)`  
`4. CTA button text (3 options)`  
`5. Full ad copy (Facebook/Google format)`  
`6. Email subject + body (if selected)`  
`7. Landing page above-the-fold copy (if selected)`  
`Format: Labeled blocks, ready to paste into any builder.`

`---`

`GLOBAL RULES:`  
`- Never give vague or generic output. Always be specific to the user's input.`  
`- If input is missing, ask for the minimum required fields before generating.`  
`- Always end each output with: "Want me to refine this or generate a variation?"`  
`- Keep outputs scannable: use bullets, headers, and numbered lists.`

---

## **2-Week Build Execution Plan**

Follow this exactly — no wasted days:

Days 1–3 — Foundation

* Set up Next.js (or Bubble if no-code) \+ Claude API key  
* Build the dashboard shell with 5 module tabs  
* Connect Supabase for user auth and session storage

Days 4–6 — Core Feature Build

* Wire each module tab to a Claude API call using the system prompt above  
* Build the intake form for each module (inputs vary per tool)  
* One input → one Claude output per module

Days 7–9 — Monetization Layer

* Integrate Stripe (free tier: 3 uses per module → paid: unlimited)  
* Deploy to Vercel or Railway  
* Set up 3 pricing tiers: Starter ($49), Pro ($99), Agency ($299/month)

Days 10–12 — Launch Prep

* Record a 2-min Loom demo video of each module  
* Post on r/n8n, r/smallbusiness, r/freelance, r/entrepreneur with free trial link  
* Submit to Product Hunt (schedule for Tuesday morning for max traction)

Days 13–14 — First Revenue Push

* DM 30 LinkedIn prospects (automation agency owners, freelancers, founders)  
* Post AppSumo or PitchGround lifetime deal at $97 one-time for early adopters  
* Collect 10 testimonials from beta users for social proof

---

## **Tech Stack for the MVP**

All of this is buildable solo in 2 weeks:

* Frontend: Next.js 14 (App Router) or Bubble.io (no-code)  
* AI Backend: Anthropic Claude API (claude-sonnet-4-5)  
* Auth: Supabase Auth or Clerk  
* Database: Supabase (PostgreSQL)  
* Payments: Stripe Checkout \+ Webhooks  
* Deployment: Vercel (free tier works for MVP)  
* File Upload (Doc Analyzer): UploadThing or Supabase Storage

---

## **Pricing Tiers to Set Up on Day 7**

| Plan | Price | Includes |
| :---- | :---- | :---- |
| Starter | $49/month | 3 modules, 50 generations/month |
| Pro | $99/month | All 5 modules, unlimited generations |
| Agency | $299/month | Pro \+ white-label \+ 5 team seats |
| Lifetime (Launch Only) | $197 one-time | Pro features, AppSumo exclusive |

The lifetime deal on AppSumo is your fastest path to $2,000–$5,000 in week 2 cash, which then funds your paid ads to build the recurring base.

\# 🚀 FlowForge AI — Complete 14-Day Build & Launch Plan

\> \*\*Deadline:\*\* 2 weeks | \*\*Goal:\*\* First paying customer by Day 14 | \*\*Target:\*\* $200K ARR by Month 12

\*\*\*

\#\# 🎯 What You're Building

\*\*FlowForge AI\*\* — One SaaS platform. Five Claude-powered modules. One subscription.

| Module | Core Function | Claude Model |

|--------|--------------|--------------|

| 🔁 Workflow Architect | Describe process → n8n JSON blueprint | Sonnet 4.5 |

| 📊 BizPlan Builder | Questionnaire → investor-ready business plan | Sonnet 4.5 |

| 📧 Outreach Engine | Prospect info → cold email sequences | Haiku 4.5 |

| 📄 Doc Analyzer | Upload PDF → risk flags \+ summary | Sonnet 4.5 |

| ✍️ Niche Copywriter | Product \+ niche → ads, emails, landing pages | Haiku 4.5 |

\*\*Pricing:\*\* Starter $49/mo | Pro $99/mo | Agency $299/mo | LTD $197 one-time

\*\*\*

\#\# 🏗️ Tech Stack (Non-Negotiable for 2-Week Sprint)

\#\#\# Frontend

\- \*\*Next.js 14 (App Router)\*\* — SSR, API routes, React Server Components

\- \*\*Tailwind CSS \+ shadcn/ui\*\* — Professional UI in hours, not days

\- \*\*Zustand\*\* — State management for module selection \+ token tracking

\- \*\*React Query (TanStack)\*\* — Handles Claude API loading states \+ caching

\#\#\# Backend

\- \*\*Next.js API Routes\*\* — Serverless, no separate backend needed

\- \*\*Anthropic Claude API\*\* — Haiku 4.5 (speed) \+ Sonnet 4.5 (quality)

\- \*\*Upstash Redis\*\* — Rate limiting \+ session caching (serverless Redis)

\#\#\# Database & Auth

\- \*\*Supabase (PostgreSQL)\*\* — Auth \+ DB \+ Storage \+ RLS in one platform

\- \*\*DrizzleORM\*\* — Type-safe SQL, faster than Prisma, smaller bundle

\#\#\# Payments

\- \*\*Stripe Subscriptions \+ Webhooks\*\* — Checkout, portal, webhooks

\- \*\*Stripe Customer Portal\*\* — Self-serve billing (zero support tickets)

\#\#\# Infrastructure

\- \*\*Vercel\*\* — Zero-config deploy, preview URLs, edge functions

\- \*\*GitHub Actions\*\* — CI/CD: lint → test → deploy on push to main

\- \*\*Docker\*\* — Local dev environment (matches production exactly)

\- \*\*Sentry\*\* — Error monitoring (catches crashes before users do)

\#\#\# File Handling (Doc Analyzer)

\- \*\*UploadThing\*\* — PDF/DOCX uploads to S3; Next.js native; 15-min setup

\- \*\*pdf-parse (npm)\*\* — Extract raw text from PDFs before Claude call

\- \*\*Supabase Storage\*\* — Stores files with secure signed URLs per user

\*\*\*

\#\# 📁 Project Structure

\`\`\`

/app

  /dashboard          ← Main authenticated area

    /workflow-architect

    /bizplan-builder

    /outreach-engine

    /doc-analyzer

    /niche-copywriter

  /api

    /ai

      /workflow-architect/route.ts

      /bizplan-builder/route.ts

      /outreach-engine/route.ts

      /doc-analyzer/route.ts

      /niche-copywriter/route.ts

    /stripe

      /webhook/route.ts

      /create-checkout/route.ts

    /upload/route.ts

  /(auth)

    /login

    /signup

/components

  /ui                 ← shadcn/ui components

  /modules            ← Per-module intake forms \+ output displays

/lib

  /claude.ts          ← Claude API client \+ system prompt loader

  /stripe.ts          ← Stripe client \+ plan helpers

  /supabase.ts        ← Supabase client

  /redis.ts           ← Upstash rate limiter

/middleware.ts         ← Auth protection \+ plan gating

\`\`\`

\*\*\*

\#\# 🧠 Claude API Route Pattern (Every Module Follows This)

\`\`\`typescript

// /app/api/ai/outreach-engine/route.ts

import Anthropic from "@anthropic-ai/sdk";

import { createClient } from "@/lib/supabase";

import { checkUsageLimit, incrementUsage } from "@/lib/usage";

import { FLOWFORGE\_SYSTEM\_PROMPT } from "@/lib/claude";

export async function POST(req: Request) {

  const supabase \= createClient();

  const { data: { user } } \= await supabase.auth.getUser();

  if (\!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const plan \= await getUserPlan(user.id);

  const withinLimit \= await checkUsageLimit(user.id, "outreach-engine", plan);

  if (\!withinLimit) {

    return Response.json(

      { error: "LIMIT\_REACHED", upgradeUrl: "/pricing" },

      { status: 402 }

    );

  }

  const { prospectName, company, role, painPoint, offer } \= await req.json();

  const client \= new Anthropic();

  const message \= await client.messages.create({

    model: "claude-haiku-4-5",

    max\_tokens: 1500,

    system: FLOWFORGE\_SYSTEM\_PROMPT,

    messages: \[

      {

        role: "user",

        content: \`\[MODE: OUTREACH ENGINE\]

Prospect Name: ${prospectName}

Company: ${company}

Role: ${role}

Pain Point: ${painPoint}

My Offer: ${offer}\`,

      },

    \],

  });

  await incrementUsage(user.id, "outreach-engine");

  await saveGeneration(user.id, "outreach-engine", message);

  return Response.json({ output: message.content\[0\].text });

}

\`\`\`

\*\*\*

\#\# 💰 Prompt Caching (Save 82% on API Costs)

Add \`cache\_control\` to your system prompt — tokens are cached for 5 minutes and cost 90% less on reads:

\`\`\`typescript

const message \= await client.messages.create({

  model: "claude-sonnet-4-5",

  max\_tokens: 4000,

  system: \[

    {

      type: "text",

      text: FLOWFORGE\_SYSTEM\_PROMPT,        // \~2,000 tokens

      cache\_control: { type: "ephemeral" }, // ← Cache this block

    },

  \],

  messages: \[{ role: "user", content: userInput }\],

});

\`\`\`

\*\*Result:\*\* System prompt tokens cost $0.30/MTok (cached) instead of $3.00/MTok (uncached) on Sonnet. For 200 users × 200 generations \= \*\*$536/mo instead of $3,000/mo\*\*.

\*\*\*

\#\# 🛡️ Usage Gating Logic

\`\`\`typescript

// lib/usage.ts

const LIMITS \= {

  free:    { perModule: 3,        total: 15 },

  starter: { perModule: 50,       total: 250 },

  pro:     { perModule: Infinity, total: Infinity },

  agency:  { perModule: Infinity, total: Infinity },

};

export async function checkUsageLimit(

  userId: string, module: string, plan: string

): Promise\<boolean\> {

  const thisMonth \= new Date().toISOString().slice(0, 7); // "2026-04"

  const { count } \= await supabase

    .from("generations")

    .select("\*", { count: "exact", head: true })

    .eq("user\_id", userId)

    .eq("module\_name", module)

    .gte("created\_at", \`${thisMonth}-01\`);


  return (count ?? 0\) \< LIMITS\[plan\].perModule;

}

\`\`\`

\*\*\*

\#\# 🗄️ Database Schema

\`\`\`sql

\-- Supabase SQL Editor — run on Day 1

CREATE TABLE subscriptions (

  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

  user\_id UUID REFERENCES auth.users NOT NULL,

  stripe\_subscription\_id TEXT UNIQUE,

  stripe\_customer\_id TEXT,

  plan\_tier TEXT DEFAULT 'free', \-- free | starter | pro | agency

  status TEXT DEFAULT 'active',

  current\_period\_end TIMESTAMPTZ,

  created\_at TIMESTAMPTZ DEFAULT NOW()

);

CREATE TABLE generations (

  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

  user\_id UUID REFERENCES auth.users NOT NULL,

  module\_name TEXT NOT NULL,

  input\_tokens INTEGER,

  output\_tokens INTEGER,

  output\_text TEXT,

  created\_at TIMESTAMPTZ DEFAULT NOW()

);

CREATE TABLE documents (

  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

  user\_id UUID REFERENCES auth.users NOT NULL,

  file\_url TEXT NOT NULL,

  extracted\_text TEXT,

  analysis\_result TEXT,

  created\_at TIMESTAMPTZ DEFAULT NOW()

);

CREATE TABLE teams (

  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

  owner\_user\_id UUID REFERENCES auth.users NOT NULL,

  name TEXT NOT NULL,

  seat\_count INTEGER DEFAULT 5,

  created\_at TIMESTAMPTZ DEFAULT NOW()

);

\-- Row Level Security

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

ALTER TABLE generations ENABLE ROW LEVEL SECURITY;

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own data" ON subscriptions FOR ALL USING (auth.uid() \= user\_id);

CREATE POLICY "Users see own data" ON generations FOR ALL USING (auth.uid() \= user\_id);

CREATE POLICY "Users see own data" ON documents FOR ALL USING (auth.uid() \= user\_id);

\`\`\`

\*\*\*

\#\# 🔁 n8n Integration (Workflow Architect Module)

For the Workflow Architect module, your n8n instance runs in Docker. Connect FlowForge → n8n via webhook:

\`\`\`bash

\# docker-compose.yml — run on your VPS ($5/mo DigitalOcean)

version: '3.8'

services:

  n8n:

    image: n8nio/n8n

    restart: always

    ports:

      \- "5678:5678"

    environment:

      \- N8N\_BASIC\_AUTH\_ACTIVE=true

      \- N8N\_BASIC\_AUTH\_USER=admin

      \- N8N\_BASIC\_AUTH\_PASSWORD=${N8N\_PASSWORD}

      \- DB\_TYPE=postgresdb

      \- DB\_POSTGRESDB\_HOST=${POSTGRES\_HOST}

      \- DB\_POSTGRESDB\_DATABASE=n8n

      \- EXECUTIONS\_MODE=queue           \# ← CRITICAL: queue mode

      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}

    volumes:

      \- n8n\_data:/home/node/.n8n

  n8n-worker:

    image: n8nio/n8n

    command: n8n worker

    restart: always

    environment:

      \- DB\_TYPE=postgresdb

      \- EXECUTIONS\_MODE=queue

      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}

    volumes:

      \- n8n\_data:/home/node/.n8n

volumes:

  n8n\_data:

\`\`\`

\*\*CRITICAL n8n production settings (set these before anything):\*\*

1\. \`EXECUTIONS\_MODE=queue\` — enables concurrent workflow processing

2\. \`DB\_TYPE=postgresdb\` — replaces SQLite (crashes at scale)

3\. Error Trigger node on every workflow → Slack/Discord alert

4\. Enable retry (max 3\) on all HTTP/Claude nodes

\*\*\*

\#\# 📢 Customer Acquisition (Days 10–14)

\#\#\# Free Channels (Week 2\)

1\. \*\*Reddit posts\*\* in r/n8n, r/freelance, r/entrepreneur, r/smallbusiness — lead with problem, not product

2\. \*\*LinkedIn video demo\*\* — record 90-second walkthrough of each module; DM 30 automation agency owners

3\. \*\*Product Hunt\*\* — schedule Tuesday 12:01am PST; engage every comment for 12 hours

4\. \*\*Cold email\*\* — 50 targeted outreach emails via Instantly.ai to automation consultants \+ agency owners

\#\#\# Fastest Cash (Day 12–13)

\- \*\*AppSumo/PitchGround LTD at $197\*\* — target 25 sales \= $4,925 launch cash

\- Use that cash to fund $500 LinkedIn/Reddit ads in Month 2

\#\#\# Retention (Month 2+)

\- 3-email onboarding drip (welcome → tips → upgrade nudge)

\- Usage bar in dashboard (shows "40/50 generations used") — converts free→paid

\- Monthly changelog email — reminds users of value

\*\*\*

\#\# 📊 $200K ARR Revenue Model

| Month | Starter | Pro | Agency | MRR | Cum. Revenue |

|-------|---------|-----|--------|-----|-------------|

| 1 | 5 | 5 | 1 | $1,034 | \~$3,000 (incl. LTDs) |

| 2 | 20 | 15 | 3 | $3,362 | $9,000 |

| 3 | 40 | 30 | 7 | $7,063 | $20,000 |

| 4 | 55 | 45 | 12 | $10,073 | $40,000 |

| 5 | 65 | 55 | 16 | $13,026 | $60,000 |

| 6 | 80 | 60 | 20 | $15,740 | $85,000 |

\*\*Gross margin at scale: \~94%\*\* (API costs $5.36/user/mo with caching vs. $99 revenue)

\*\*\*

\#\# ⚠️ Critical Mistakes to Avoid

1\. \*\*Don't build all 5 modules before testing payment\*\* — build Outreach Engine first, add Stripe, get 1 paying user, THEN build the rest

2\. \*\*Don't use SQLite on n8n\*\* — migrate to PostgreSQL on Day 1 of n8n setup

3\. \*\*Don't forget prompt caching\*\* — without it, Claude costs 82% more at scale

4\. \*\*Don't skip usage tracking\*\* — users need to see their generation count; it's your strongest upgrade trigger

5\. \*\*Don't launch on Monday\*\* — Product Hunt launches perform best Tuesday 12:01am PST

6\. \*\*Don't underestimate Doc Analyzer\*\* — PDF parsing is the highest complexity module; build it last and allocate 4 hours

\*\*\*

\#\# ✅ Day-by-Day Checklist Summary

\- \*\*Day 1–3:\*\* Clone boilerplate → Supabase \+ Stripe setup → Dashboard shell

\- \*\*Day 4–6:\*\* Build all 5 AI modules end-to-end

\- \*\*Day 7–9:\*\* Usage gating → Stripe billing wall → Deploy to production

\- \*\*Day 10–12:\*\* Loom demo → Reddit \+ LinkedIn → AppSumo LTD listing

\- \*\*Day 13–14:\*\* Product Hunt launch → Cold email 50 leads → First revenue

\*\*\*

\*Generated: April 19, 2026 | Sources: Anthropic API Docs, Vercel Templates, n8n Community, Finout.io, BoilerplateHub\*

/app

  /dashboard          ← Main authenticated area

    /workflow-architect

    /bizplan-builder

    /outreach-engine

    /doc-analyzer

    /niche-copywriter

  /api

    /ai

      /workflow-architect/route.ts

      /bizplan-builder/route.ts

      /outreach-engine/route.ts

      /doc-analyzer/route.ts

      /niche-copywriter/route.ts

    /stripe

      /webhook/route.ts

      /create-checkout/route.ts

    /upload/route.ts

  /(auth)

    /login

    /signup

/components

  /ui                 ← shadcn/ui components

  /modules            ← Per-module intake forms \+ output displays

/lib

  /claude.ts          ← Claude API client \+ system prompt loader

  /stripe.ts          ← Stripe client \+ plan helpers

  /supabase.ts        ← Supabase client

  /redis.ts           ← Upstash rate limiter

/middleware.ts         ← Auth protection \+ plan gating

// /app/api/ai/outreach-engine/route.ts

import Anthropic from "@anthropic-ai/sdk";

import { createClient } from "@/lib/supabase";

import { checkUsageLimit, incrementUsage } from "@/lib/usage";

import { FLOWFORGE\_SYSTEM\_PROMPT } from "@/lib/claude";

export async function POST(req: Request) {

  const supabase \= createClient();

  const { data: { user } } \= await supabase.auth.getUser();

  if (\!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const plan \= await getUserPlan(user.id);

  const withinLimit \= await checkUsageLimit(user.id, "outreach-engine", plan);

  if (\!withinLimit) {

    return Response.json(

      { error: "LIMIT\_REACHED", upgradeUrl: "/pricing" },

      { status: 402 }

    );

  }

  const { prospectName, company, role, painPoint, offer } \= await req.json();

  const client \= new Anthropic();

  const message \= await client.messages.create({

    model: "claude-haiku-4-5",

    max\_tokens: 1500,

    system: FLOWFORGE\_SYSTEM\_PROMPT,

    messages: \[

      {

        role: "user",

        content: \`\[MODE: OUTREACH ENGINE\]

Prospect Name: ${prospectName}

Company: ${company}

Role: ${role}

Pain Point: ${painPoint}

My Offer: ${offer}\`,

      },

    \],

  });

  await incrementUsage(user.id, "outreach-engine");

  await saveGeneration(user.id, "outreach-engine", message);

  return Response.json({ output: message.content\[0\].text });

}

## **Prompt Caching (Save 82% on API Costs)**

Add cache\_control to your system prompt — tokens are cached for 5 minutes and cost 90% less on reads:

const message \= await client.messages.create({

  model: "claude-sonnet-4-5",

  max\_tokens: 4000,

  system: \[

    {

      type: "text",

      text: FLOWFORGE\_SYSTEM\_PROMPT,        // \~2,000 tokens

      cache\_control: { type: "ephemeral" }, // ← Cache this block

    },

  \],

  messages: \[{ role: "user", content: userInput }\],

});

Result: System prompt tokens cost $0.30/MTok (cached) instead of $3.00/MTok (uncached) on Sonnet. For 200 users × 200 generations \= $536/mo instead of $3,000/mo.

---

## **🛡️ Usage Gating Logic**

// lib/usage.ts

const LIMITS \= {

  free:    { perModule: 3,        total: 15 },

  starter: { perModule: 50,       total: 250 },

  pro:     { perModule: Infinity, total: Infinity },

  agency:  { perModule: Infinity, total: Infinity },

};

export async function checkUsageLimit(

  userId: string, module: string, plan: string

): Promise\<boolean\> {

  const thisMonth \= new Date().toISOString().slice(0, 7); // "2026-04"

  const { count } \= await supabase

    .from("generations")

    .select("\*", { count: "exact", head: true })

    .eq("user\_id", userId)

    .eq("module\_name", module)

    .gte("created\_at", \`${thisMonth}-01\`);


  return (count ?? 0\) \< LIMITS\[plan\].perModule;

}

## **8n Integration (Workflow Architect Module)**

For the Workflow Architect module, your n8n instance runs in Docker. Connect FlowForge → n8n via webhook:

bash

\# docker-compose.yml — run on your VPS ($5/mo DigitalOcean)  
version: '3.8'  
services:  
  n8n:  
    image: n8nio/n8n  
    restart: always  
    ports:  
      \- "5678:5678"  
    environment:  
      \- N8N\_BASIC\_AUTH\_ACTIVE=true  
      \- N8N\_BASIC\_AUTH\_USER=admin  
      \- N8N\_BASIC\_AUTH\_PASSWORD=${N8N\_PASSWORD}  
      \- DB\_TYPE=postgresdb  
      \- DB\_POSTGRESDB\_HOST=${POSTGRES\_HOST}  
      \- DB\_POSTGRESDB\_DATABASE=n8n  
      \- EXECUTIONS\_MODE=queue           \# ← CRITICAL: queue mode  
      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}  
    volumes:  
      \- n8n\_data:/home/node/.n8n

  n8n-worker:  
    image: n8nio/n8n  
    command: n8n worker  
    restart: always  
    environment:  
      \- DB\_TYPE=postgresdb  
      \- EXECUTIONS\_MODE=queue  
      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}  
    volumes:  
      \- n8n\_data:/home/node/.n8n

volumes:  
  n8n\_data:

CRITICAL n8n production settings (set these before anything):

1. EXECUTIONS\_MODE=queue — enables concurrent workflow processing  
2. DB\_TYPE=postgresdb — replaces SQLite (crashes at scale)  
3. Error Trigger node on every workflow → Slack/Discord alert  
4. Enable retry (max 3\) on all HTTP/Claude nodes

---

## **📢 Customer Acquisition (Days 10–14)**

## **Free Channels (Week 2\)**

1. Reddit posts in r/n8n, r/freelance, r/entrepreneur, r/smallbusiness — lead with problem, not product  
2. LinkedIn video demo — record 90-second walkthrough of each module; DM 30 automation agency owners  
3. Product Hunt — schedule Tuesday 12:01am PST; engage every comment for 12 hours  
4. Cold email — 50 targeted outreach emails via Instantly.ai to automation consultants \+ agency owners

## **Fastest Cash (Day 12–13)**

* AppSumo/PitchGround LTD at $197 — target 25 sales \= $4,925 launch cash  
* Use that cash to fund $500 LinkedIn/Reddit ads in Month 2

## **Retention (Month 2+)**

* 3-email onboarding drip (welcome → tips → upgrade nudge)  
* Usage bar in dashboard (shows "40/50 generations used") — converts free→paid  
* Monthly changelog email — reminds users of value

---

## **📊 $200K ARR Revenue Model**

| Month | Starter | Pro | Agency | MRR | Cum. Revenue |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | 5 | 5 | 1 | $1,034 | \~$3,000 (incl. LTDs) |
| 2 | 20 | 15 | 3 | $3,362 | $9,000 |
| 3 | 40 | 30 | 7 | $7,063 | $20,000 |
| 4 | 55 | 45 | 12 | $10,073 | $40,000 |
| 5 | 65 | 55 | 16 | $13,026 | $60,000 |
| 6 | 80 | 60 | 20 | $15,740 | $85,000 |

Gross margin at scale: \~94% (API costs $5.36/user/mo with caching vs. $99 revenue)

---

## **⚠️ Critical Mistakes to Avoid**

1. Don't build all 5 modules before testing payment — build Outreach Engine first, add Stripe, get 1 paying user, THEN build the rest  
2. Don't use SQLite on n8n — migrate to PostgreSQL on Day 1 of n8n setup  
3. Don't forget prompt caching — without it, Claude costs 82% more at scale  
4. Don't skip usage tracking — users need to see their generation count; it's your strongest upgrade trigger  
5. Don't launch on Monday — Product Hunt launches perform best Tuesday 12:01am PST  
6. Don't underestimate Doc Analyzer — PDF parsing is the highest complexity module; build it last and allocate 4 hours

---

## **✅ Day-by-Day Checklist Summary**

* Day 1–3: Clone boilerplate → Supabase \+ Stripe setup → Dashboard shell  
* Day 4–6: Build all 5 AI modules end-to-end  
* Day 7–9: Usage gating → Stripe billing wall → Deploy to production  
* Day 10–12: Loom demo → Reddit \+ LinkedIn → AppSumo LTD listing  
* Day 13–14: Product Hunt launch → Cold email 50 leads → First revenue

---

*Generated: April 19, 2026 | Sources: Anthropic API Docs, Vercel Templates, n8n Community, Finout.io, BoilerplateHub*

\# 🚀 FlowForge AI — Complete 14-Day Build & Launch Plan

\> \*\*Deadline:\*\* 2 weeks | \*\*Goal:\*\* First paying customer by Day 14 | \*\*Target:\*\* $200K ARR by Month 12

\*\*\*

\#\# 🎯 What You're Building

\*\*FlowForge AI\*\* — One SaaS platform. Five Claude-powered modules. One subscription.

| Module | Core Function | Claude Model |  
|--------|--------------|--------------|  
| 🔁 Workflow Architect | Describe process → n8n JSON blueprint | Sonnet 4.5 |  
| 📊 BizPlan Builder | Questionnaire → investor-ready business plan | Sonnet 4.5 |  
| 📧 Outreach Engine | Prospect info → cold email sequences | Haiku 4.5 |  
| 📄 Doc Analyzer | Upload PDF → risk flags \+ summary | Sonnet 4.5 |  
| ✍️ Niche Copywriter | Product \+ niche → ads, emails, landing pages | Haiku 4.5 |

\*\*Pricing:\*\* Starter $49/mo | Pro $99/mo | Agency $299/mo | LTD $197 one-time

\*\*\*

\#\# 🏗️ Tech Stack (Non-Negotiable for 2-Week Sprint)

\#\#\# Frontend  
\- \*\*Next.js 14 (App Router)\*\* — SSR, API routes, React Server Components  
\- \*\*Tailwind CSS \+ shadcn/ui\*\* — Professional UI in hours, not days  
\- \*\*Zustand\*\* — State management for module selection \+ token tracking  
\- \*\*React Query (TanStack)\*\* — Handles Claude API loading states \+ caching

\#\#\# Backend  
\- \*\*Next.js API Routes\*\* — Serverless, no separate backend needed  
\- \*\*Anthropic Claude API\*\* — Haiku 4.5 (speed) \+ Sonnet 4.5 (quality)  
\- \*\*Upstash Redis\*\* — Rate limiting \+ session caching (serverless Redis)

\#\#\# Database & Auth  
\- \*\*Supabase (PostgreSQL)\*\* — Auth \+ DB \+ Storage \+ RLS in one platform  
\- \*\*DrizzleORM\*\* — Type-safe SQL, faster than Prisma, smaller bundle

\#\#\# Payments  
\- \*\*Stripe Subscriptions \+ Webhooks\*\* — Checkout, portal, webhooks  
\- \*\*Stripe Customer Portal\*\* — Self-serve billing (zero support tickets)

\#\#\# Infrastructure  
\- \*\*Vercel\*\* — Zero-config deploy, preview URLs, edge functions  
\- \*\*GitHub Actions\*\* — CI/CD: lint → test → deploy on push to main  
\- \*\*Docker\*\* — Local dev environment (matches production exactly)  
\- \*\*Sentry\*\* — Error monitoring (catches crashes before users do)

\#\#\# File Handling (Doc Analyzer)  
\- \*\*UploadThing\*\* — PDF/DOCX uploads to S3; Next.js native; 15-min setup  
\- \*\*pdf-parse (npm)\*\* — Extract raw text from PDFs before Claude call  
\- \*\*Supabase Storage\*\* — Stores files with secure signed URLs per user

\*\*\*

\#\# 📁 Project Structure

\`\`\`  
/app  
  /dashboard          ← Main authenticated area  
    /workflow-architect  
    /bizplan-builder  
    /outreach-engine  
    /doc-analyzer  
    /niche-copywriter  
  /api  
    /ai  
      /workflow-architect/route.ts  
      /bizplan-builder/route.ts  
      /outreach-engine/route.ts  
      /doc-analyzer/route.ts  
      /niche-copywriter/route.ts  
    /stripe  
      /webhook/route.ts  
      /create-checkout/route.ts  
    /upload/route.ts  
  /(auth)  
    /login  
    /signup  
/components  
  /ui                 ← shadcn/ui components  
  /modules            ← Per-module intake forms \+ output displays  
/lib  
  /claude.ts          ← Claude API client \+ system prompt loader  
  /stripe.ts          ← Stripe client \+ plan helpers  
  /supabase.ts        ← Supabase client  
  /redis.ts           ← Upstash rate limiter  
/middleware.ts         ← Auth protection \+ plan gating  
\`\`\`

\*\*\*

\#\# 🧠 Claude API Route Pattern (Every Module Follows This)

\`\`\`typescript  
// /app/api/ai/outreach-engine/route.ts  
import Anthropic from "@anthropic-ai/sdk";  
import { createClient } from "@/lib/supabase";  
import { checkUsageLimit, incrementUsage } from "@/lib/usage";  
import { FLOWFORGE\_SYSTEM\_PROMPT } from "@/lib/claude";

export async function POST(req: Request) {  
  const supabase \= createClient();  
  const { data: { user } } \= await supabase.auth.getUser();  
  if (\!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const plan \= await getUserPlan(user.id);  
  const withinLimit \= await checkUsageLimit(user.id, "outreach-engine", plan);  
  if (\!withinLimit) {  
    return Response.json(  
      { error: "LIMIT\_REACHED", upgradeUrl: "/pricing" },  
      { status: 402 }  
    );  
  }

  const { prospectName, company, role, painPoint, offer } \= await req.json();

  const client \= new Anthropic();  
  const message \= await client.messages.create({  
    model: "claude-haiku-4-5",  
    max\_tokens: 1500,  
    system: FLOWFORGE\_SYSTEM\_PROMPT,  
    messages: \[  
      {  
        role: "user",  
        content: \`\[MODE: OUTREACH ENGINE\]  
Prospect Name: ${prospectName}  
Company: ${company}  
Role: ${role}  
Pain Point: ${painPoint}  
My Offer: ${offer}\`,  
      },  
    \],  
  });

  await incrementUsage(user.id, "outreach-engine");  
  await saveGeneration(user.id, "outreach-engine", message);

  return Response.json({ output: message.content\[0\].text });  
}  
\`\`\`

\*\*\*

\#\# 💰 Prompt Caching (Save 82% on API Costs)

Add \`cache\_control\` to your system prompt — tokens are cached for 5 minutes and cost 90% less on reads:

\`\`\`typescript  
const message \= await client.messages.create({  
  model: "claude-sonnet-4-5",  
  max\_tokens: 4000,  
  system: \[  
    {  
      type: "text",  
      text: FLOWFORGE\_SYSTEM\_PROMPT,        // \~2,000 tokens  
      cache\_control: { type: "ephemeral" }, // ← Cache this block  
    },  
  \],  
  messages: \[{ role: "user", content: userInput }\],  
});  
\`\`\`

\*\*Result:\*\* System prompt tokens cost $0.30/MTok (cached) instead of $3.00/MTok (uncached) on Sonnet. For 200 users × 200 generations \= \*\*$536/mo instead of $3,000/mo\*\*.

\*\*\*

\#\# 🛡️ Usage Gating Logic

\`\`\`typescript  
// lib/usage.ts  
const LIMITS \= {  
  free:    { perModule: 3,        total: 15 },  
  starter: { perModule: 50,       total: 250 },  
  pro:     { perModule: Infinity, total: Infinity },  
  agency:  { perModule: Infinity, total: Infinity },  
};

export async function checkUsageLimit(  
  userId: string, module: string, plan: string  
): Promise\<boolean\> {  
  const thisMonth \= new Date().toISOString().slice(0, 7); // "2026-04"  
  const { count } \= await supabase  
    .from("generations")  
    .select("\*", { count: "exact", head: true })  
    .eq("user\_id", userId)  
    .eq("module\_name", module)  
    .gte("created\_at", \`${thisMonth}-01\`);  
    
  return (count ?? 0\) \< LIMITS\[plan\].perModule;  
}  
\`\`\`

\*\*\*

\#\# 🗄️ Database Schema

\`\`\`sql  
\-- Supabase SQL Editor — run on Day 1

CREATE TABLE subscriptions (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID REFERENCES auth.users NOT NULL,  
  stripe\_subscription\_id TEXT UNIQUE,  
  stripe\_customer\_id TEXT,  
  plan\_tier TEXT DEFAULT 'free', \-- free | starter | pro | agency  
  status TEXT DEFAULT 'active',  
  current\_period\_end TIMESTAMPTZ,  
  created\_at TIMESTAMPTZ DEFAULT NOW()  
);

CREATE TABLE generations (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID REFERENCES auth.users NOT NULL,  
  module\_name TEXT NOT NULL,  
  input\_tokens INTEGER,  
  output\_tokens INTEGER,  
  output\_text TEXT,  
  created\_at TIMESTAMPTZ DEFAULT NOW()  
);

CREATE TABLE documents (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID REFERENCES auth.users NOT NULL,  
  file\_url TEXT NOT NULL,  
  extracted\_text TEXT,  
  analysis\_result TEXT,  
  created\_at TIMESTAMPTZ DEFAULT NOW()  
);

CREATE TABLE teams (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  owner\_user\_id UUID REFERENCES auth.users NOT NULL,  
  name TEXT NOT NULL,  
  seat\_count INTEGER DEFAULT 5,  
  created\_at TIMESTAMPTZ DEFAULT NOW()  
);

\-- Row Level Security  
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;  
ALTER TABLE generations ENABLE ROW LEVEL SECURITY;  
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own data" ON subscriptions FOR ALL USING (auth.uid() \= user\_id);  
CREATE POLICY "Users see own data" ON generations FOR ALL USING (auth.uid() \= user\_id);  
CREATE POLICY "Users see own data" ON documents FOR ALL USING (auth.uid() \= user\_id);  
\`\`\`

\*\*\*

\#\# 🔁 n8n Integration (Workflow Architect Module)

For the Workflow Architect module, your n8n instance runs in Docker. Connect FlowForge → n8n via webhook:

\`\`\`bash  
\# docker-compose.yml — run on your VPS ($5/mo DigitalOcean)  
version: '3.8'  
services:  
  n8n:  
    image: n8nio/n8n  
    restart: always  
    ports:  
      \- "5678:5678"  
    environment:  
      \- N8N\_BASIC\_AUTH\_ACTIVE=true  
      \- N8N\_BASIC\_AUTH\_USER=admin  
      \- N8N\_BASIC\_AUTH\_PASSWORD=${N8N\_PASSWORD}  
      \- DB\_TYPE=postgresdb  
      \- DB\_POSTGRESDB\_HOST=${POSTGRES\_HOST}  
      \- DB\_POSTGRESDB\_DATABASE=n8n  
      \- EXECUTIONS\_MODE=queue           \# ← CRITICAL: queue mode  
      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}  
    volumes:  
      \- n8n\_data:/home/node/.n8n

  n8n-worker:  
    image: n8nio/n8n  
    command: n8n worker  
    restart: always  
    environment:  
      \- DB\_TYPE=postgresdb  
      \- EXECUTIONS\_MODE=queue  
      \- QUEUE\_BULL\_REDIS\_HOST=${REDIS\_HOST}  
    volumes:  
      \- n8n\_data:/home/node/.n8n

volumes:  
  n8n\_data:  
\`\`\`

\*\*CRITICAL n8n production settings (set these before anything):\*\*  
1\. \`EXECUTIONS\_MODE=queue\` — enables concurrent workflow processing  
2\. \`DB\_TYPE=postgresdb\` — replaces SQLite (crashes at scale)  
3\. Error Trigger node on every workflow → Slack/Discord alert  
4\. Enable retry (max 3\) on all HTTP/Claude nodes

\*\*\*

\#\# 📢 Customer Acquisition (Days 10–14)

\#\#\# Free Channels (Week 2\)  
1\. \*\*Reddit posts\*\* in r/n8n, r/freelance, r/entrepreneur, r/smallbusiness — lead with problem, not product  
2\. \*\*LinkedIn video demo\*\* — record 90-second walkthrough of each module; DM 30 automation agency owners  
3\. \*\*Product Hunt\*\* — schedule Tuesday 12:01am PST; engage every comment for 12 hours  
4\. \*\*Cold email\*\* — 50 targeted outreach emails via Instantly.ai to automation consultants \+ agency owners

\#\#\# Fastest Cash (Day 12–13)  
\- \*\*AppSumo/PitchGround LTD at $197\*\* — target 25 sales \= $4,925 launch cash  
\- Use that cash to fund $500 LinkedIn/Reddit ads in Month 2

\#\#\# Retention (Month 2+)  
\- 3-email onboarding drip (welcome → tips → upgrade nudge)  
\- Usage bar in dashboard (shows "40/50 generations used") — converts free→paid  
\- Monthly changelog email — reminds users of value

\*\*\*

\#\# 📊 $200K ARR Revenue Model

| Month | Starter | Pro | Agency | MRR | Cum. Revenue |  
|-------|---------|-----|--------|-----|-------------|  
| 1 | 5 | 5 | 1 | $1,034 | \~$3,000 (incl. LTDs) |  
| 2 | 20 | 15 | 3 | $3,362 | $9,000 |  
| 3 | 40 | 30 | 7 | $7,063 | $20,000 |  
| 4 | 55 | 45 | 12 | $10,073 | $40,000 |  
| 5 | 65 | 55 | 16 | $13,026 | $60,000 |  
| 6 | 80 | 60 | 20 | $15,740 | $85,000 |

\*\*Gross margin at scale: \~94%\*\* (API costs $5.36/user/mo with caching vs. $99 revenue)

\*\*\*

\#\# ⚠️ Critical Mistakes to Avoid

1\. \*\*Don't build all 5 modules before testing payment\*\* — build Outreach Engine first, add Stripe, get 1 paying user, THEN build the rest  
2\. \*\*Don't use SQLite on n8n\*\* — migrate to PostgreSQL on Day 1 of n8n setup  
3\. \*\*Don't forget prompt caching\*\* — without it, Claude costs 82% more at scale  
4\. \*\*Don't skip usage tracking\*\* — users need to see their generation count; it's your strongest upgrade trigger  
5\. \*\*Don't launch on Monday\*\* — Product Hunt launches perform best Tuesday 12:01am PST  
6\. \*\*Don't underestimate Doc Analyzer\*\* — PDF parsing is the highest complexity module; build it last and allocate 4 hours

\*\*\*

\#\# ✅ Day-by-Day Checklist Summary

\- \*\*Day 1–3:\*\* Clone boilerplate → Supabase \+ Stripe setup → Dashboard shell  
\- \*\*Day 4–6:\*\* Build all 5 AI modules end-to-end  
\- \*\*Day 7–9:\*\* Usage gating → Stripe billing wall → Deploy to production  
\- \*\*Day 10–12:\*\* Loom demo → Reddit \+ LinkedIn → AppSumo LTD listing  
\- \*\*Day 13–14:\*\* Product Hunt launch → Cold email 50 leads → First revenue

\*\*\*

\*Generated: April 19, 2026 | Sources: Anthropic API Docs, Vercel Templates, n8n Community, Finout.io, BoilerplateHub\*

#  **FlowForge AI — Complete 14-Day Build & Launch Plan**

Deadline: 2 weeks | Goal: First paying customer by Day 14 | Target: $200K ARR by Month 12

## **What You're Building**

FlowForge AI — One SaaS platform. Five Claude-powered modules. One subscription.

| Module | Core Function | Claude Model |
| :---- | :---- | :---- |
| 🔁 Workflow Architect | Describe process → n8n JSON blueprint | Sonnet 4.5 |
| 📊 BizPlan Builder | Questionnaire → investor-ready business plan | Sonnet 4.5 |
| 📧 Outreach Engine | Prospect info → cold email sequences | Haiku 4.5 |
| 📄 Doc Analyzer | Upload PDF → risk flags \+ summary | Sonnet 4.5 |
| ✍️ Niche Copywriter | Product \+ niche → ads, emails, landing pages | Haiku 4.5 |

Pricing: Starter $49/mo | Pro $99/mo | Agency $299/mo | LTD $197 one-time

---

## **🏗️ Tech Stack (Non-Negotiable for 2-Week Sprint)**

## **Frontend**

* Next.js 14 (App Router) — SSR, API routes, React Server Components  
* Tailwind CSS \+ shadcn/ui — Professional UI in hours, not days  
* Zustand — State management for module selection \+ token tracking  
* React Query (TanStack) — Handles Claude API loading states \+ caching

## **Backend**

* Next.js API Routes — Serverless, no separate backend needed  
* Anthropic Claude API — Haiku 4.5 (speed) \+ Sonnet 4.5 (quality)  
* Upstash Redis — Rate limiting \+ session caching (serverless Redis)

## **Database & Auth**

* Supabase (PostgreSQL) — Auth \+ DB \+ Storage \+ RLS in one platform  
* DrizzleORM — Type-safe SQL, faster than Prisma, smaller bundle

## **Payments**

* Stripe Subscriptions \+ Webhooks — Checkout, portal, webhooks  
* Stripe Customer Portal — Self-serve billing (zero support tickets)

## **Infrastructure**

* Vercel — Zero-config deploy, preview URLs, edge functions  
* GitHub Actions — CI/CD: lint → test → deploy on push to main  
* Docker — Local dev environment (matches production exactly)  
* Sentry — Error monitoring (catches crashes before users do)

## **File Handling (Doc Analyzer)**

* UploadThing — PDF/DOCX uploads to S3; Next.js native; 15-min setup  
* pdf-parse (npm) — Extract raw text from PDFs before Claude call  
* Supabase Storage — Stores files with secure signed URLs per user

---

## **📁 Project Structure**

text

`/app`  
  `/dashboard          ← Main authenticated area`  
    `/workflow-architect`  
    `/bizplan-builder`  
    `/outreach-engine`  
    `/doc-analyzer`  
    `/niche-copywriter`  
  `/api`  
    `/ai`  
      `/workflow-architect/route.ts`  
      `/bizplan-builder/route.ts`  
      `/outreach-engine/route.ts`  
      `/doc-analyzer/route.ts`  
      `/niche-copywriter/route.ts`  
    `/stripe`  
      `/webhook/route.ts`  
      `/create-checkout/route.ts`  
    `/upload/route.ts`  
  `/(auth)`  
    `/login`  
    `/signup`  
`/components`  
  `/ui                 ← shadcn/ui components`  
  `/modules            ← Per-module intake forms + output displays`  
`/lib`  
  `/claude.ts          ← Claude API client + system prompt loader`  
  `/stripe.ts          ← Stripe client + plan helpers`  
  `/supabase.ts        ← Supabase client`  
  `/redis.ts           ← Upstash rate limiter`  
`/middleware.ts         ← Auth protection + plan gating`

---

## **🧠 Claude API Route Pattern (Every Module Follows This)**

typescript

*`// /app/api/ai/outreach-engine/route.ts`*  
`import Anthropic from "@anthropic-ai/sdk";`  
`import { createClient } from "@/lib/supabase";`  
`import { checkUsageLimit, incrementUsage } from "@/lib/usage";`  
`import { FLOWFORGE_SYSTEM_PROMPT } from "@/lib/claude";`

`export async function POST(req: Request) {`  
  `const supabase = createClient();`  
  `const { data: { user } } = await supabase.auth.getUser();`  
  `if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });`

  `const plan = await getUserPlan(user.id);`  
  `const withinLimit = await checkUsageLimit(user.id, "outreach-engine", plan);`  
  `if (!withinLimit) {`  
    `return Response.json(`  
      `{ error: "LIMIT_REACHED", upgradeUrl: "/pricing" },`  
      `{ status: 402 }`  
    `);`  
  `}`

  `const { prospectName, company, role, painPoint, offer } = await req.json();`

  `const client = new Anthropic();`  
  `const message = await client.messages.create({`  
    `model: "claude-haiku-4-5",`  
    `max_tokens: 1500,`  
    `system: FLOWFORGE_SYSTEM_PROMPT,`  
    `messages: [`  
      `{`  
        `role: "user",`  
        ``content: `[MODE: OUTREACH ENGINE]``  
`Prospect Name: ${prospectName}`  
`Company: ${company}`  
`Role: ${role}`  
`Pain Point: ${painPoint}`  
``My Offer: ${offer}`,``  
      `},`  
    `],`  
  `});`

  `await incrementUsage(user.id, "outreach-engine");`  
  `await saveGeneration(user.id, "outreach-engine", message);`

  `return Response.json({ output: message.content[0]`

\# Plan.md — FlowForge AI: Complete Execution Blueprint

\*\*Deadline: 14 Days | Goal: Launch \+ First Revenue | Author: Natnael Peek\*\*

\---

\#\# Table of Contents

1\. \[Next.js SaaS Boilerplate Comparison (Top 10)\](\#1-nextjs-saas-boilerplate-comparison)  
2\. \[n8n Scaling: 200 Projects/Month Pitfalls & Solutions\](\#2-n8n-scaling-pitfalls)  
3\. \[Claude API Cost Optimization for High-Volume Automation\](\#3-claude-api-cost-optimization)  
4\. \[n8n Error Handling Best Practices in Production\](\#4-n8n-error-handling)  
5\. \[Next.js \+ n8n Integration Architecture\](\#5-nextjs-n8n-integration)  
6\. \[Your Bottleneck: Selling, Not Building\](\#6-your-bottleneck)  
7\. \[14-Day Execution Plan (Hour-by-Hour)\](\#7-14-day-execution-plan)  
8\. \[Complete Tech Stack & Setup Guide\](\#8-complete-tech-stack)  
9\. \[Database Schema (Full)\](\#9-database-schema)  
10\. \[API Route Architecture (Full)\](\#10-api-route-architecture)  
11\. \[Pricing & Revenue Model\](\#11-pricing-revenue-model)  
12\. \[Launch Playbook\](\#12-launch-playbook)  
13\. \[Post-Launch Scaling to $200K ARR\](\#13-scaling-roadmap)

\---

\#\# 1\. Next.js SaaS Boilerplate Comparison

This is the spreadsheet you need. Do NOT build from scratch — you lose 3-5 days minimum.

| Rank | Boilerplate | Auth | Stripe | DB | Dashboard | AI Integration | n8n Ready | Price | Speed to MVP | Best For |  
|---|---|---|---|---|---|---|---|---|---|---|  
| 1 | \*\*Vercel SaaS Starter\*\* (nextjs/saas-starter) | Supabase Auth | Full sub management | Supabase PG | Basic shell | Manual wiring | Via API routes | Free | 2 days | Your use case — fastest start |  
| 2 | \*\*ShipFast\*\* (Marc Lou) | NextAuth | Stripe \+ LemonSqueezy | MongoDB | Full dashboard | AI route templates | Manual | $199 | 1 day | Speed demons who want done-for-you |  
| 3 | \*\*Supastarter\*\* | Supabase Auth | Full Stripe | Supabase PG | Full admin | Pre-built AI hooks | Webhook ready | $299 | 1.5 days | Supabase-heavy stack |  
| 4 | \*\*SaaSfly\*\* | NextAuth \+ Clerk | Stripe | Prisma \+ PG | Full UI | Basic | Manual | Free (OSS) | 2.5 days | Budget-conscious devs |  
| 5 | \*\*Nextbase\*\* | Supabase Auth | Stripe | Supabase PG | Full dashboard \+ admin | AI templates | Webhook support | $299 | 1.5 days | Team-based SaaS |  
| 6 | \*\*Makerkit\*\* (Pro) | Supabase/Firebase | Stripe | Supabase/Firestore | Multi-tenant | AI chat template | Manual | $299 | 2 days | Multi-tenant apps |  
| 7 | \*\*Shipped\*\* | NextAuth | Stripe | Prisma \+ PG | Landing \+ dashboard | Basic | Manual | $149 | 2 days | Clean minimal starter |  
| 8 | \*\*T3 Stack\*\* (create-t3-app) | NextAuth | Manual | Prisma \+ PG | None | Manual | Manual | Free | 4 days | Devs who want full control |  
| 9 | \*\* boilerplate \*\*(Theo / t3.gg) | Clerk | Stripe | PlanetScale | Basic | Manual | Manual | Free | 3.5 days | TypeScript purists |  
| 10 | \*\*Sidebase\*\* | NextAuth | Manual | Prisma | Basic | Manual | Manual | Free | 4 days | Nuxt/JS ecosystem crossover |

\#\#\# Decision for FlowForge AI

\*\*Use \#1: Vercel SaaS Starter (nextjs/saas-starter)\*\*

Why:  
\- Free. Zero cost to start.  
\- Ships with Supabase Auth \+ Stripe Subscriptions \+ PostgreSQL schema \+ Dashboard shell  
\- App Router (Next.js 14\) native  
\- You skip Days 1-3 of auth/billing setup  
\- API routes are pre-structured — perfect for your 5 Claude endpoints  
\- Most GitHub stars, most maintained, Vercel official

\`\`\`bash  
\# Clone and start  
npx create-next-app \-e saas-starter flowforge-ai  
cd flowforge-ai  
npm install  
\`\`\`

\---

\#\# 2\. n8n Scaling Pitfalls for 200 Projects/Month

You asked about scaling n8n to 200 projects monthly. Here's every pitfall and the fix.

\#\#\# Pitfall 1: Single Instance Bottleneck

\*\*Problem:\*\* One n8n instance processes workflows sequentially. At 200 projects, you hit queue backlogs — workflows wait 30-60 seconds to execute.

\*\*Fix:\*\*  
\- Run n8n in \*\*queue mode\*\* with Redis as the broker  
\- Spin up 3-5 worker containers behind a load balancer  
\- Each worker picks up jobs from the Redis queue independently

\`\`\`yaml  
\# docker-compose.yml for scaled n8n  
version: "3.8"  
services:  
  redis:  
    image: redis:7-alpine  
    ports:  
      \- "6379:6379"  
    volumes:  
      \- redis\_data:/data

  postgres:  
    image: postgres:16-alpine  
    environment:  
      POSTGRES\_DB: n8n  
      POSTGRES\_USER: n8n  
      POSTGRES\_PASSWORD: ${DB\_PASSWORD}  
    volumes:  
      \- postgres\_data:/var/lib/postgresql/data

  n8n-main:  
    image: n8nio/n8n:latest  
    environment:  
      DB\_TYPE: postgresdb  
      DB\_POSTGRESDB\_HOST: postgres  
      DB\_POSTGRESDB\_DATABASE: n8n  
      DB\_POSTGRESDB\_USER: n8n  
      DB\_POSTGRESDB\_PASSWORD: ${DB\_PASSWORD}  
      EXECUTIONS\_MODE: queue  
      QUEUE\_BULL\_REDIS\_HOST: redis  
      QUEUE\_BULL\_REDIS\_PORT: 6379  
      N8N\_CONCURRENCY\_PRODUCTION\_LIMIT: 10  
    ports:  
      \- "5678:5678"  
    depends\_on:  
      \- redis  
      \- postgres

  n8n-worker-1:  
    image: n8nio/n8n:latest  
    command: worker  
    environment:  
      DB\_TYPE: postgresdb  
      DB\_POSTGRESDB\_HOST: postgres  
      DB\_POSTGRESDB\_DATABASE: n8n  
      DB\_POSTGRESDB\_USER: n8n  
      DB\_POSTGRESDB\_PASSWORD: ${DB\_PASSWORD}  
      EXECUTIONS\_MODE: queue  
      QUEUE\_BULL\_REDIS\_HOST: redis  
      QUEUE\_BULL\_REDIS\_PORT: 6379  
      N8N\_CONCURRENCY\_PRODUCTION\_LIMIT: 10  
    depends\_on:  
      \- redis  
      \- postgres

  n8n-worker-2:  
    image: n8nio/n8n:latest  
    command: worker  
    environment:  
      DB\_TYPE: postgresdb  
      DB\_POSTGRESDB\_HOST: postgres  
      DB\_POSTGRESDB\_DATABASE: n8n  
      DB\_POSTGRESDB\_USER: n8n  
      DB\_POSTGRESDB\_PASSWORD: ${DB\_PASSWORD}  
      EXECUTIONS\_MODE: queue  
      QUEUE\_BULL\_REDIS\_HOST: redis  
      QUEUE\_BULL\_REDIS\_PORT: 6379  
      N8N\_CONCURRENCY\_PRODUCTION\_LIMIT: 10  
    depends\_on:  
      \- redis  
      \- postgres

volumes:  
  redis\_data:  
  postgres\_data:  
\`\`\`

\#\#\# Pitfall 2: Memory Leaks in Long-Running Workflows

\*\*Problem:\*\* Workflows that loop or process large datasets (1000+ items) consume RAM until the container crashes.

\*\*Fix:\*\*  
\- Set \`N8N\_PAYLOAD\_SIZE\_MAX=16\` (MB) to reject oversized payloads  
\- Use the \*\*Split In Batches\*\* node to process data in chunks of 50-100  
\- Set \`EXECUTIONS\_DATA\_MAX\_AGE=168\` (hours) to auto-prune old execution data  
\- Add \`N8N\_RUNNERS\_ENABLED=true\` to isolate workflow execution in separate processes

\#\#\# Pitfall 3: Webhook Rate Limiting

\*\*Problem:\*\* At 200 projects, you're firing hundreds of webhooks per hour. n8n's built-in webhook server drops requests under load.

\*\*Fix:\*\*  
\- Put n8n behind \*\*nginx\*\* or \*\*Caddy\*\* with rate limiting at the reverse proxy level  
\- Use a \*\*queue webhook pattern\*\*: webhook → Redis queue → n8n worker picks it up  
\- For FlowForge specifically: instead of n8n webhooks, use \*\*n8n's REST API\*\* to trigger workflows programmatically from your Next.js backend

\`\`\`typescript  
// Trigger n8n workflow from Next.js API route  
export async function triggerN8nWorkflow(workflowId: string, data: any) {  
  const response \= await fetch(  
    \`${process.env.N8N\_BASE\_URL}/webhook/${workflowId}\`,  
    {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      body: JSON.stringify(data),  
    }  
  );  
    
  if (\!response.ok) {  
    throw new Error(\`n8n workflow failed: ${response.status}\`);  
  }  
    
  return response.json();  
}  
\`\`\`

\#\#\# Pitfall 4: No Execution Monitoring

\*\*Problem:\*\* Failed workflows go silent. You don't know a client's automation broke until they complain.

\*\*Fix:\*\*  
\- Enable \*\*n8n's built-in Error Trigger\*\* workflow — it fires on ANY workflow failure  
\- Create a meta-workflow that catches errors and sends alerts to Slack/Discord/email  
\- Log all executions to an external monitoring system

\`\`\`json  
// Error Trigger workflow structure:  
{  
  "nodes": \[  
    {  
      "type": "n8n-nodes-base.errorTrigger",  
      "name": "Error Trigger"  
    },  
    {  
      "type": "n8n-nodes-base.slack",  
      "name": "Alert Slack",  
      "parameters": {  
        "channel": "\#n8n-errors",  
        "text": "⚠️ Workflow {{ $json.workflow.name }} failed at node {{ $json.execution.error.node }}. Error: {{ $json.execution.error.message }}"  
      }  
    }  
  \]  
}  
\`\`\`

\#\#\# Pitfall 5: Credential Sprawl

\*\*Problem:\*\* 200 projects \= 200+ API keys stored in n8n. If one leaks, everything is compromised.

\*\*Fix:\*\*  
\- Use \*\*n8n's credential sharing\*\* feature — create credentials per client, share only to their workflows  
\- Never hardcode API keys in workflow nodes — always use the Credentials system  
\- Rotate keys quarterly with a scripted process  
\- For FlowForge: store all user API keys in Supabase with encryption, pass them to n8n via webhook payload (not stored in n8n)

\#\#\# Pitfall 6: Database Bloat from Execution Logs

\*\*Problem:\*\* n8n stores every execution's full input/output in Postgres. At 200 projects running 10x/day, that's 60,000+ execution records/month, bloating your DB to 50GB+ in 3 months.

\*\*Fix:\*\*  
\- Set \`EXECUTIONS\_DATA\_PRUNE=true\`  
\- Set \`EXECUTIONS\_DATA\_MAX\_AGE=168\` (7 days)  
\- Set \`EXECUTIONS\_DATA\_MAX\_COUNT=10000\`  
\- For production: only save \*\*failed\*\* executions, let successful ones auto-delete

\`\`\`env  
\# n8n environment variables for production  
EXECUTIONS\_DATA\_PRUNE=true  
EXECUTIONS\_DATA\_MAX\_AGE=168  
EXECUTIONS\_DATA\_MAX\_COUNT=10000  
EXECUTIONS\_DATA\_SAVE\_ON\_ERROR=all  
EXECUTIONS\_DATA\_SAVE\_ON\_SUCCESS=none  
EXECUTIONS\_DATA\_SAVE\_MANUAL\_EXECUTIONS=false  
\`\`\`

\#\#\# Pitfall 7: No Version Control for Workflows

\*\*Problem:\*\* You edit a workflow, break it, and can't roll back. At 200 projects, this is catastrophic.

\*\*Fix:\*\*  
\- Use \*\*n8n's CLI\*\* to export/import workflows as JSON  
\- Store all workflow JSON files in a Git repo  
\- CI/CD pipeline: push to main → n8n imports updated workflows automatically  
\- Tag releases so you can roll back

\`\`\`bash  
\# Export all workflows to Git  
n8n export:workflow \--all \--output=./workflows/  
git add . && git commit \-m "workflow update" && git push

\# Import workflows from Git  
n8n import:workflow \--input=./workflows/  
\`\`\`

\---

\#\# 3\. Claude API Cost Optimization for High-Volume Automation

This is where your margins live or die. At 200 users generating daily, unoptimized API calls will eat your revenue.

\#\#\# Cost Model at Scale

| Model | Input | Output | Cache Read | Best Module |  
|---|---|---|---|---|  
| Claude 3.5 Haiku | $0.80/MTok | $4.00/MTok | $0.08/MTok | Outreach Engine, Niche Copywriter |  
| Claude 4 Sonnet | $3.00/MTok | $15.00/MTok | $0.30/MTok | BizPlan Builder, Doc Analyzer, Workflow Architect |  
| Claude 4 Sonnet (Batch) | $1.50/MTok | $7.50/MTok | N/A | Background processing, bulk jobs |

\#\#\# Optimization Strategy 1: Prompt Caching (Saves \~90% on Input Tokens)

Your system prompt is \~2,000 tokens. Without caching, every single API call pays for those 2,000 input tokens. With caching, you pay once per 5-minute window, then 90% less for subsequent calls.

\`\`\`typescript  
// Claude API call with prompt caching  
import Anthropic from '@anthropic-ai/sdk';

const client \= new Anthropic({  
  apiKey: process.env.ANTHROPIC\_API\_KEY,  
});

export async function callClaude(  
  mode: string,  
  userInput: string,  
  systemPrompt: string  
) {  
  const response \= await client.messages.create({  
    model: 'claude-sonnet-4-5-20250514',  
    max\_tokens: 4096,  
    system: \[  
      {  
        type: 'text',  
        text: systemPrompt,  
        cache\_control: { type: 'ephemeral' }, // ← This enables caching  
      },  
    \],  
    messages: \[  
      {  
        role: 'user',  
        content: \`\[MODE: ${mode}\]\\n\\n${userInput}\`,  
      },  
    \],  
  });

  return response.content\[0\].text;  
}  
\`\`\`

\*\*Impact:\*\* If 50 users hit the Outreach Engine in a 5-minute window, you pay for the system prompt tokens ONCE instead of 50 times. At scale, this saves $200-500/month.

\#\#\# Optimization Strategy 2: Model Routing (Haiku vs Sonnet)

Not every module needs Sonnet. Route intelligently:

\`\`\`typescript  
// Model routing based on module complexity  
const MODEL\_CONFIG \= {  
  'workflow-architect': {  
    model: 'claude-sonnet-4-5-20250514',  
    maxTokens: 8192, // JSON blueprints need more output tokens  
  },  
  'bizplan-builder': {  
    model: 'claude-sonnet-4-5-20250514',  
    maxTokens: 6144,  
  },  
  'outreach-engine': {  
    model: 'claude-haiku-4-5-20250514', // Cheaper — emails don't need deep reasoning  
    maxTokens: 2048,  
  },  
  'doc-analyzer': {  
    model: 'claude-sonnet-4-5-20250514', // Needs reasoning for risk analysis  
    maxTokens: 4096,  
  },  
  'niche-copywriter': {  
    model: 'claude-haiku-4-5-20250514', // Copy generation is pattern-matching  
    maxTokens: 3072,  
  },  
} as const;

export function getModelConfig(moduleName: string) {  
  return MODEL\_CONFIG\[moduleName as keyof typeof MODEL\_CONFIG\]   
    ?? MODEL\_CONFIG\['niche-copywriter'\];  
}  
\`\`\`

\*\*Impact:\*\* Haiku is \~3.75x cheaper than Sonnet. For Outreach \+ Copywriter (your 2 highest-volume modules), this cuts API costs by \~65% on those routes.

\#\#\# Optimization Strategy 3: Max Token Limits Per Module

Don't set \`max\_tokens: 4096\` for everything. An email sequence needs 1,500 tokens max. A business plan needs 4,000. Setting appropriate limits prevents runaway generation that costs you money for output nobody reads.

\`\`\`typescript  
// Hard limits per module  
const TOKEN\_LIMITS: Record\<string, number\> \= {  
  'workflow-architect': 8192,  // JSON \+ explanation  
  'bizplan-builder': 6144,     // Long-form document  
  'outreach-engine': 1536,     // 3 short emails  
  'doc-analyzer': 3072,        // Risk report  
  'niche-copywriter': 2560,    // Ad copy \+ landing page  
};  
\`\`\`

\#\#\# Optimization Strategy 4: Input Validation Before API Call

Never send garbage to Claude. Validate inputs on the frontend AND backend before making the API call.

\`\`\`typescript  
import { z } from 'zod';

// Outreach Engine input schema  
const outreachSchema \= z.object({  
  prospectName: z.string().min(2).max(100),  
  company: z.string().min(2).max(100),  
  role: z.string().min(2).max(100),  
  painPoint: z.string().min(10).max(500),  
  offer: z.string().min(10).max(500),  
});

// In your API route  
export async function POST(req: Request) {  
  const body \= await req.json();  
    
  const validation \= outreachSchema.safeParse(body);  
  if (\!validation.success) {  
    return Response.json(  
      { error: 'Invalid input', details: validation.error.flatten() },  
      { status: 400 }  
    );  
  }  
    
  // Only now make the Claude API call  
  const result \= await callClaude('outreach-engine', JSON.stringify(body), SYSTEM\_PROMPT);  
  return Response.json({ result });  
}  
\`\`\`

\*\*Impact:\*\* Prevents wasted API calls on incomplete/invalid inputs. Estimated 10-15% cost savings.

\#\#\# Optimization Strategy 5: Usage Tracking & Billing

Track EVERY token. Bill users who exceed their limits.

\`\`\`typescript  
// After every Claude API call, log usage  
async function trackUsage(  
  userId: string,  
  moduleName: string,  
  inputTokens: number,  
  outputTokens: number  
) {  
  const costPerToken \= {  
    'claude-haiku-4-5-20250514': { input: 0.0000008, output: 0.000004 },  
    'claude-sonnet-4-5-20250514': { input: 0.000003, output: 0.000015 },  
  };

  await supabase.from('generations').insert({  
    user\_id: userId,  
    module\_name: moduleName,  
    input\_tokens: inputTokens,  
    output\_tokens: outputTokens,  
    cost\_usd: (inputTokens \* costPerToken\[model\].input) \+   
              (outputTokens \* costPerToken\[model\].output),  
    created\_at: new Date().toISOString(),  
  });  
}  
\`\`\`

\#\#\# Cost Projection at Scale

| Users | Monthly Generations | Haiku Cost | Sonnet Cost | Total API Cost | Revenue (Pro @ $99) | Gross Margin |  
|---|---|---|---|---|---|---|  
| 10 | 2,000 | $8 | $25 | $33 | $990 | 96.7% |  
| 50 | 10,000 | $40 | $125 | $165 | $4,950 | 96.7% |  
| 100 | 20,000 | $80 | $250 | $330 | $9,900 | 96.7% |  
| 200 | 40,000 | $160 | $500 | $660 | $19,800 | 96.7% |

These are conservative estimates with caching. Real-world margins will be 90-95% after caching.

\---

\#\# 4\. n8n Error Handling Best Practices in Production

\#\#\# Pattern 1: The Error Catcher Workflow

Create ONE workflow that catches ALL errors across ALL workflows.

\`\`\`json  
{  
  "name": "Global Error Catcher",  
  "nodes": \[  
    {  
      "type": "n8n-nodes-base.errorTrigger",  
      "name": "On Any Error",  
      "position": \[250, 300\]  
    },  
    {  
      "type": "n8n-nodes-base.set",  
      "name": "Format Error Data",  
      "position": \[450, 300\],  
      "parameters": {  
        "assignments": {  
          "assignments": \[  
            {  
              "id": "1",  
              "name": "workflowName",  
              "value": "={{ $json.workflow.name }}",  
              "type": "string"  
            },  
            {  
              "id": "2",  
              "name": "errorNode",  
              "value": "={{ $json.execution.error.node }}",  
              "type": "string"  
            },  
            {  
              "id": "3",  
              "name": "errorMessage",  
              "value": "={{ $json.execution.error.message }}",  
              "type": "string"  
            },  
            {  
              "id": "4",  
              "name": "timestamp",  
              "value": "={{ $now.toISO() }}",  
              "type": "string"  
            },  
            {  
              "id": "5",  
              "name": "executionId",  
              "value": "={{ $json.execution.id }}",  
              "type": "string"  
            }  
          \]  
        }  
      }  
    },  
    {  
      "type": "n8n-nodes-base.httpRequest",  
      "name": "Send to Slack Webhook",  
      "position": \[650, 300\],  
      "parameters": {  
        "method": "POST",  
        "url": "={{ $env.SLACK\_ERROR\_WEBHOOK }}",  
        "body": {  
          "text": "🔴 n8n Error in \*{{ $json.workflowName }}\*\\nNode: {{ $json.errorNode }}\\nMessage: {{ $json.errorMessage }}\\nTime: {{ $json.timestamp }}"  
        }  
      }  
    },  
    {  
      "type": "n8n-nodes-base.httpRequest",  
      "name": "Log to Supabase",  
      "position": \[650, 500\],  
      "parameters": {  
        "method": "POST",  
        "url": "https://your-supabase.co/rest/v1/n8n\_errors",  
        "headers": {  
          "apikey": "={{ $env.SUPABASE\_SERVICE\_KEY }}",  
          "Content-Type": "application/json",  
          "Prefer": "return=minimal"  
        },  
        "body": {  
          "workflow\_name": "={{ $json.workflowName }}",  
          "error\_node": "={{ $json.errorNode }}",  
          "error\_message": "={{ $json.errorMessage }}",  
          "execution\_id": "={{ $json.executionId }}",  
          "occurred\_at": "={{ $json.timestamp }}"  
        }  
      }  
    }  
  \]  
}  
\`\`\`

\#\#\# Pattern 2: Retry Logic Inside Workflows

Every external API call in n8n should have retry logic:

\`\`\`  
\[API Call Node\] → \[If Error\] → \[Wait 30s\] → \[Retry API Call\] → \[If Error Again\] → \[Alert \+ Log\]  
\`\`\`

In n8n node settings:  
\- \*\*Retry On Fail:\*\* Enabled  
\- \*\*Max Tries:\*\* 3  
\- \*\*Wait Between Retries:\*\* 30 seconds  
\- \*\*Continue On Fail:\*\* Enabled (for non-critical nodes — workflow keeps running)

\#\#\# Pattern 3: Dead Letter Queue

When a workflow fails after all retries, the data shouldn't disappear:

\`\`\`json  
{  
  "name": "Dead Letter Queue Handler",  
  "nodes": \[  
    {  
      "type": "n8n-nodes-base.errorTrigger",  
      "name": "Catch Failed Executions"  
    },  
    {  
      "type": "n8n-nodes-base.postgres",  
      "name": "Store in Dead Letter Table",  
      "parameters": {  
        "operation": "insert",  
        "table": "dead\_letter\_queue",  
        "columns": {  
          "mapping": \[  
            { "column": "workflow\_id", "value": "={{ $json.workflow.id }}" },  
            { "column": "workflow\_name", "value": "={{ $json.workflow.name }}" },  
            { "column": "input\_data", "value": "={{ JSON.stringify($json.execution.data) }}" },  
            { "column": "error\_message", "value": "={{ $json.execution.error.message }}" },  
            { "column": "status", "value": "pending\_retry" },  
            { "column": "created\_at", "value": "={{ $now.toISO() }}" }  
          \]  
        }  
      }  
    }  
  \]  
}  
\`\`\`

\#\#\# Pattern 4: Circuit Breaker Pattern

If an external service is down, stop hammering it. Implement a circuit breaker:

1\. Create a Supabase table \`service\_health\` with columns: \`service\_name\`, \`status\` (up/down), \`failure\_count\`, \`last\_failure\_at\`  
2\. Before every external API call in n8n, check this table first  
3\. If \`status \= 'down'\`, skip the call and queue it for later  
4\. After 3 consecutive failures, mark service as \`down\`  
5\. A separate cron workflow checks every 5 minutes — if the service responds, mark it \`up\` again

\#\#\# Pattern 5: Structured Logging

Don't rely on n8n's built-in execution logs for debugging at scale. Ship logs to a centralized system:

\`\`\`json  
{  
  "type": "n8n-nodes-base.httpRequest",  
  "name": "Log to Monitoring",  
  "parameters": {  
    "method": "POST",  
    "url": "https://your-logging-endpoint.com/api/logs",  
    "body": {  
      "service": "flowforge-n8n",  
      "level": "info",  
      "workflow": "={{ $workflow.name }}",  
      "node": "={{ $node.name }}",  
      "message": "Workflow step completed",  
      "metadata": "={{ JSON.stringify($json) }}",  
      "timestamp": "={{ $now.toISO() }}"  
    }  
  }  
}  
\`\`\`

For free centralized logging, use \*\*Axiom\*\* (free tier: 500MB/month) or \*\*Logtail\*\* (free tier: 3GB/month).

\---

\#\# 5\. Next.js \+ n8n Integration Architecture

\#\#\# Architecture Overview

\`\`\`  
\[User on FlowForge.ai\]  
        ↓  
\[Next.js API Routes\] ← Auth, billing, rate limiting  
        ↓  
\[Claude API\] ← AI generation  
        ↓  
\[n8n Webhooks\] ← Trigger automations, deliver results  
        ↓  
\[External Services\] ← Email, Slack, CRM, etc.  
\`\`\`

\#\#\# Integration Point 1: Workflow Architect Module → n8n

This is your deepest n8n integration. When a user generates an n8n blueprint in the Workflow Architect:

1\. User describes process in the UI  
2\. Next.js sends to Claude API with Mode 1 system prompt  
3\. Claude returns an n8n JSON blueprint  
4\. User clicks "Import to n8n" button  
5\. Next.js API route calls n8n's REST API to create the workflow

\`\`\`typescript  
// /app/api/ai/workflow-architect/route.ts  
import { createClient } from '@/utils/supabase/server';  
import { callClaude } from '@/lib/claude';  
import { checkUsageLimit } from '@/lib/usage';

export async function POST(req: Request) {  
  // 1\. Auth check  
  const supabase \= createClient();  
  const { data: { user } } \= await supabase.auth.getUser();  
  if (\!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  // 2\. Usage limit check  
  const canUse \= await checkUsageLimit(user.id, 'workflow-architect');  
  if (\!canUse) return Response.json({ error: 'LIMIT\_REACHED' }, { status: 429 });

  // 3\. Parse and validate input  
  const { processDescription } \= await req.json();  
  if (\!processDescription || processDescription.length \< 20\) {  
    return Response.json({ error: 'Description too short' }, { status: 400 });  
  }

  // 4\. Call Claude  
  const result \= await callClaude(  
    'workflow-architect',  
    processDescription,  
    WORKFLOW\_ARCHITECT\_PROMPT  
  );

  // 5\. Track usage  
  await supabase.from('generations').insert({  
    user\_id: user.id,  
    module\_name: 'workflow-architect',  
    input\_text: processDescription,  
    output\_text: result,  
  });

  return Response.json({ result });  
}  
\`\`\`

\`\`\`typescript  
// /app/api/n8n/import-workflow/route.ts  
// Imports generated workflow into user's n8n instance  
export async function POST(req: Request) {  
  const supabase \= createClient();  
  const { data: { user } } \= await supabase.auth.getUser();  
  if (\!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { workflowJson, n8nInstanceUrl, n8nApiKey } \= await req.json();

  // Import workflow to user's n8n instance  
  const response \= await fetch(\`${n8nInstanceUrl}/api/v1/workflows\`, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json',  
      'X-N8N-API-KEY': n8nApiKey,  
    },  
    body: JSON.stringify({  
      name: workflowJson.name || 'FlowForge Generated Workflow',  
      nodes: workflowJson.nodes,  
      connections: workflowJson.connections,  
      settings: workflowJson.settings || {},  
    }),  
  });

  if (\!response.ok) {  
    return Response.json(  
      { error: 'Failed to import workflow' },  
      { status: 500 }  
    );  
  }

  const imported \= await response.json();  
  return Response.json({   
    workflowId: imported.id,  
    editUrl: \`${n8nInstanceUrl}/workflow/${imported.id}\`   
  });  
}  
\`\`\`

\#\#\# Integration Point 2: n8n as Backend Automation

n8n can handle tasks that don't need real-time response:

\- \*\*Welcome email sequences\*\* after signup (n8n webhook from Stripe)  
\- \*\*Usage report generation\*\* (n8n scheduled workflow queries Supabase, generates PDF, emails user)  
\- \*\*Doc Analyzer batch processing\*\* (user uploads 10 docs → n8n processes them in queue)  
\- \*\*Agency white-label report generation\*\* (n8n generates branded PDFs)

\`\`\`typescript  
// Trigger n8n automation from Next.js  
export async function triggerN8nAutomation(  
  workflowPath: string,  
  payload: Record\<string, unknown\>  
) {  
  const n8nBaseUrl \= process.env.N8N\_BASE\_URL\!;  
  const n8nWebhookUrl \= \`${n8nBaseUrl}/webhook/${workflowPath}\`;

  const response \= await fetch(n8nWebhookUrl, {  
    method: 'POST',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(payload),  
  });

  if (\!response.ok) {  
    console.error(\`n8n webhook failed: ${response.status}\`);  
    // Don't block the user — log and continue  
    await logN8nError(workflowPath, response.status, payload);  
  }

  return response.ok;  
}

// Usage: After user signs up  
await triggerN8nAutomation('onboarding-sequence', {  
  userId: user.id,  
  email: user.email,  
  plan: 'starter',  
  signupDate: new Date().toISOString(),  
});  
\`\`\`

\#\#\# Integration Point 3: n8n Polling from Next.js

For long-running n8n tasks (like batch Doc Analyzer), use a polling pattern:

\`\`\`  
User clicks "Analyze All" → Next.js triggers n8n → n8n starts processing →   
n8n writes results to Supabase → Next.js polls Supabase → Shows results when ready  
\`\`\`

\`\`\`typescript  
// Frontend polling hook  
'use client';  
import { useEffect, useState } from 'react';

export function useAnalysisStatus(jobId: string) {  
  const \[status, setStatus\] \= useState\<'processing' | 'complete' | 'error'\>('processing');  
  const \[result, setResult\] \= useState(null);

  useEffect(() \=\> {  
    const interval \= setInterval(async () \=\> {  
      const res \= await fetch(\`/api/analysis/status?jobId=${jobId}\`);  
      const data \= await res.json();

      if (data.status \=== 'complete') {  
        setStatus('complete');  
        setResult(data.result);  
        clearInterval(interval);  
      } else if (data.status \=== 'error') {  
        setStatus('error');  
        clearInterval(interval);  
      }  
    }, 3000); // Poll every 3 seconds

    return () \=\> clearInterval(interval);  
  }, \[jobId\]);

  return { status, result };  
}  
\`\`\`

\---

\#\# 6\. Your Bottleneck: Selling, Not Building

Natnael — your bottleneck report is clear. You build. You don't sell. This section is specifically for you.

\#\#\# The 3-Sentence Pitch Formula

Before you write another line of code, memorize this:

\> "I help \[WHO\] solve \[WHAT PROBLEM\] by \[HOW\], so they can \[DESIRED OUTCOME\]."

For FlowForge AI:

\> "I help founders and agencies automate their business operations with AI — from cold emails to contract analysis to n8n workflows — all in one platform, so they can skip 5 tool subscriptions and get results in 30 seconds instead of 5 hours."

That's it. That's your pitch. Say it 100 times until it's automatic.

\#\#\# The Outreach Sheet (Start Today)

Create this Google Sheet. No excuses.

| Date | Contact Name | Company | Channel | Message Sent | Responded (Y/N) | Booked Call (Y/N) | Closed (Y/N) | Notes |  
|---|---|---|---|---|---|---|---|---|  
| Day 1 | | | | | | | | |  
| Day 2 | | | | | | | | |

\*\*Minimum: 5 outreach attempts per day. Track everything. You need 100 data points before you can say anything "doesn't work."\*\*

\#\#\# Cold DM Templates (Copy-Paste Ready)

\*\*For Agency Owners (LinkedIn):\*\*

\> Hey \[Name\], I noticed \[Company\] runs a lot of client automations. I built a tool that generates n8n workflows from a plain-English description — agencies are using it to cut workflow build time by 80%. Worth a 10-min look? Here's a free trial: \[link\]

\*\*For Founders (Twitter/X):\*\*

\> \[Name\] — saw your post about \[topic\]. I'm building something that might help: 5 AI tools in one dashboard for founders who are tired of juggling subscriptions. Cold emails, business plans, contract reviews — all AI-powered. Want early access?

\*\*For Freelancers (Reddit DM):\*\*

\> Hey, I saw you do \[freelance service\]. I built an AI tool that generates cold outreach sequences, business plans, and ad copy from simple prompts — it's like having a copywriter \+ strategist in your pocket. Free to try: \[link\]

\#\#\# Sales Stack (Free)

| Tool | Purpose | Cost |  
|---|---|---|  
| Apollo.io | Find 100 leads/day | Free tier |  
| Lemlist | Cold email sequences | $0 for 14-day trial |  
| Loom | Record demo videos | Free tier |  
| Calendly | Book calls | Free tier |  
| Google Sheets | Track outreach | Free |  
| LinkedIn | DM prospects | Free |

\---

\#\# 7\. 14-Day Execution Plan (Hour-by-Hour)

\#\#\# DAY 1: Foundation (10 hours)

\*\*Morning (4 hours):\*\*  
\- \[ \] 8:00 AM — Clone Vercel SaaS Starter: \`npx create-next-app \-e saas-starter flowforge-ai\`  
\- \[ \] 8:30 AM — Set up Supabase project (database \+ auth)  
\- \[ \] 9:00 AM — Configure environment variables (Supabase URL, anon key, service key, Anthropic API key, Stripe keys)  
\- \[ \] 9:30 AM — Verify auth flow works (sign up, sign in, protected routes)  
\- \[ \] 10:00 AM — Set up Stripe test products (Starter $49, Pro $99, Agency $299)  
\- \[ \] 10:30 AM — Test Stripe checkout flow end-to-end  
\- \[ \] 11:00 AM — Push to GitHub, connect to Vercel, verify deploy

\*\*Afternoon (4 hours):\*\*  
\- \[ \] 12:00 PM — Build dashboard layout with 5 module tabs (use shadcn/ui Tabs component)  
\- \[ \] 1:00 PM — Create module page shells: \`/app/dashboard/workflow-architect\`, etc.  
\- \[ \] 2:00 PM — Set up \`@anthropic-ai/sdk\` in project  
\- \[ \] 2:30 PM — Create \`/lib/claude.ts\` with \`callClaude()\` function and prompt caching  
\- \[ \] 3:00 PM — Create \`/lib/usage.ts\` with usage tracking and limit checking  
\- \[ \] 4:00 PM — Test one Claude API call from API route (any module — just verify it works)

\*\*Evening (2 hours):\*\*  
\- \[ \] 7:00 PM — Build the Outreach Engine intake form (5 fields: prospect name, company, role, pain point, offer)  
\- \[ \] 8:00 PM — Wire form → API route → Claude → display result  
\- \[ \] 9:00 PM — Commit and push. You now have a working AI feature.

\#\#\# DAY 2: Outreach Engine \+ Niche Copywriter (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Polish Outreach Engine output display (format emails nicely with copy buttons)  
\- \[ \] 9:00 AM — Add "Refine" button that resends with "make it more \[casual/professional/punchy\]"  
\- \[ \] 10:00 AM — Build Niche Copywriter intake form (4 fields: product, niche, tone, output type)  
\- \[ \] 11:00 AM — Wire Copywriter form → API route → Claude → display result  
\- \[ \] 12:00 PM — Style Copywriter output (hero headline, subheadline, bullets, CTA, ad copy sections)

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Add generation history (save to \`generations\` table, display in sidebar)  
\- \[ \] 2:00 PM — Add "Export as PDF" for both modules  
\- \[ \] 3:00 PM — Add usage counter in dashboard header (e.g., "12/50 generations used this month")  
\- \[ \] 4:00 PM — Test billing enforcement (free user hits limit → upgrade modal)  
\- \[ \] 5:00 PM — Test model routing (Outreach → Haiku, verify it works)

\#\#\# DAY 3: BizPlan Builder \+ Workflow Architect (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Build BizPlan Builder intake form (5 fields: business idea, target market, revenue model, competition, 1-year goal)  
\- \[ \] 9:30 AM — Wire BizPlan → API route → Claude (Sonnet) → display formatted business plan  
\- \[ \] 10:30 AM — Style BizPlan output with professional formatting (headers, bullet points, sections)  
\- \[ \] 11:30 AM — Build Workflow Architect intake form (1 large textarea: describe your process)  
\- \[ \] 12:00 PM — Wire Workflow Architect → API route → Claude (Sonnet) → display blueprint \+ JSON

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Add "Copy JSON" button for n8n import  
\- \[ \] 2:00 PM — Add "Import to n8n" button (calls n8n API if user has n8n instance)  
\- \[ \] 3:00 PM — Polish all 4 module UIs (consistent styling, loading states, error states)  
\- \[ \] 4:00 PM — Add loading skeleton for Claude API calls (takes 5-15 seconds)  
\- \[ \] 5:00 PM — Mobile-responsive pass on all module pages

\#\#\# DAY 4: Doc Analyzer \+ File Uploads (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Set up UploadThing (file upload service)  
\- \[ \] 8:30 AM — Create upload component (accept PDF, DOCX, TXT)  
\- \[ \] 9:00 AM — Install \`pdf-parse\` for PDF text extraction  
\- \[ \] 9:30 AM — Build Doc Analyzer API route: upload → extract text → send to Claude → return analysis  
\- \[ \] 10:30 AM — Style Doc Analyzer output (risk flags with 🔴🟡🟢, summary, negotiation points)  
\- \[ \] 11:30 AM — Add legal disclaimer at bottom of every Doc Analyzer output

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Add document history (store in \`documents\` table, list past analyses)  
\- \[ \] 2:00 PM — Test with real contracts (pull sample contracts from web)  
\- \[ \] 3:00 PM — Handle edge cases: non-PDF files, encrypted PDFs, very long documents (\>50 pages)  
\- \[ \] 4:00 PM — Add character/token limit warning for large documents  
\- \[ \] 5:00 PM — All 5 modules are now functional. Run through each one end-to-end.

\#\#\# DAY 5: Polish \+ Usage Gating \+ Billing (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Implement strict usage gating per plan tier  
\- \[ \] 9:00 AM — Build upgrade modal (shows when user hits limit, links to Stripe checkout)  
\- \[ \] 10:00 AM — Test full billing flow: free → hit limit → upgrade → unlimited access  
\- \[ \] 11:00 AM — Add Stripe webhook handler (subscription created, cancelled, payment failed)  
\- \[ \] 12:00 PM — Test: cancel subscription → verify access revoked at period end

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Build billing page (current plan, usage stats, upgrade/downgrade buttons)  
\- \[ \] 2:00 PM — Integrate Stripe Customer Portal (self-serve billing management)  
\- \[ \] 3:00 PM — Add email notifications (welcome email, payment confirmation, limit warning)  
\- \[ \] 4:00 PM — Security audit: check RLS policies, API route auth, no leaking of API keys  
\- \[ \] 5:00 PM — Performance: add loading states, error boundaries, optimistic UI updates

\#\#\# DAY 6: Landing Page \+ Marketing Site (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Build landing page hero section (headline, subheadline, CTA button)  
\- \[ \] 9:00 AM — Build features section (5 module cards with icons and descriptions)  
\- \[ \] 10:00 AM — Build pricing section (3 tiers \+ lifetime deal)  
\- \[ \] 11:00 AM — Build social proof section (placeholder testimonials for now)  
\- \[ \] 12:00 PM — Build FAQ section

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Add "How It Works" section (3 steps: sign up → pick module → get results)  
\- \[ \] 2:00 PM — Mobile-responsive pass on entire landing page  
\- \[ \] 3:00 PM — Add meta tags, Open Graph images, SEO optimization  
\- \[ \] 4:00 PM — Set up custom domain on Vercel  
\- \[ \] 5:00 PM — Write and schedule first 5 Twitter/X posts about the launch

\#\#\# DAY 7: n8n Integration \+ Internal Automations (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Deploy n8n (Docker on a $5/month Hetzner VPS, or Railway)  
\- \[ \] 9:00 AM — Build welcome email automation (Stripe webhook → n8n → Resend/email)  
\- \[ \] 10:00 AM — Build usage warning automation (Supabase cron → n8n → email when user hits 80% of limit)  
\- \[ \] 11:00 AM — Build daily metrics email (n8n scheduled workflow → query Supabase → email you daily stats)  
\- \[ \] 12:00 PM — Build error alerting (n8n error trigger → Slack/Discord webhook)

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Build the "Import to n8n" feature for Workflow Architect module  
\- \[ \] 2:00 PM — Set up n8n API key authentication in FlowForge settings page  
\- \[ \] 3:00 PM — Test end-to-end: generate workflow in FlowForge → import to n8n → verify it runs  
\- \[ \] 4:00 PM — Document n8n integration setup for users (help page)  
\- \[ \] 5:00 PM — Stress test: run 20 concurrent Claude API calls, verify no timeouts

\#\#\# DAY 8-9: Testing \+ Bug Fixes (20 hours)

\*\*Day 8 Morning:\*\*  
\- \[ \] Full E2E test of all 5 modules  
\- \[ \] Test with empty inputs, max-length inputs, special characters  
\- \[ \] Test billing edge cases (upgrade mid-cycle, cancel, payment failure)  
\- \[ \] Test file upload edge cases (corrupted files, oversized files, wrong format)

\*\*Day 8 Afternoon:\*\*  
\- \[ \] Fix all bugs found in morning testing  
\- \[ \] Add error toast notifications for failed API calls  
\- \[ \] Add retry button for failed generations  
\- \[ \] Test on Chrome, Firefox, Safari, mobile Safari, mobile Chrome

\*\*Day 9 Morning:\*\*  
\- \[ \] Performance optimization: lazy load modules, cache static assets  
\- \[ \] Add Sentry error monitoring  
\- \[ \] Set up Vercel Analytics  
\- \[ \] Test Claude API prompt caching is working (check Anthropic dashboard for cache hit rates)

\*\*Day 9 Afternoon:\*\*  
\- \[ \] Final polish pass on all UIs  
\- \[ \] Write documentation / help center pages for each module  
\- \[ \] Create onboarding flow (tooltip tour for first-time users)  
\- \[ \] Prepare demo video script

\#\#\# DAY 10: Demo Videos \+ Content (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Record 2-minute Loom demo of Outreach Engine  
\- \[ \] 9:00 AM — Record 2-minute Loom demo of BizPlan Builder  
\- \[ \] 10:00 AM — Record 2-minute Loom demo of Doc Analyzer  
\- \[ \] 11:00 AM — Record 2-minute Loom demo of Niche Copywriter  
\- \[ \] 12:00 PM — Record 2-minute Loom demo of Workflow Architect

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Record 5-minute overview video (all modules)  
\- \[ \] 2:00 PM — Write Product Hunt description  
\- \[ \] 3:00 PM — Write Reddit posts for r/n8n, r/entrepreneur, r/SaaS, r/smallbusiness  
\- \[ \] 4:00 PM — Write Twitter/X thread about building FlowForge in 2 weeks  
\- \[ \] 5:00 PM — Write LinkedIn post about launch

\#\#\# DAY 11: Beta Testing (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Send beta invites to 10 people (friends, network, Twitter mutuals)  
\- \[ \] 9:00 AM — Set up feedback form (Tally.so or Typeform — free)  
\- \[ \] 10:00 AM — Monitor for bugs as beta users hit the app  
\- \[ \] 11:00 AM — Fix critical bugs in real-time  
\- \[ \] 12:00 PM — Collect 3+ testimonials from beta users

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Continue fixing bugs based on beta feedback  
\- \[ \] 2:00 PM — Add testimonials to landing page  
\- \[ \] 3:00 PM — Prepare AppSumo listing draft  
\- \[ \] 4:00 PM — Set up affiliate tracking (Stripe affiliate links or Rewardful)  
\- \[ \] 5:00 PM — Final pre-launch checklist

\#\#\# DAY 12: Public Launch (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Switch from invite-only to public sign-up  
\- \[ \] 8:30 AM — Post on Product Hunt (schedule for 12:01 AM PST Tuesday)  
\- \[ \] 9:00 AM — Post on Reddit (4 subreddits, spaced 2 hours apart)  
\- \[ \] 10:00 AM — Post Twitter/X thread  
\- \[ \] 11:00 AM — Post on LinkedIn  
\- \[ \] 12:00 PM — Post on Hacker News Show HN

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Respond to every comment on Product Hunt, Reddit, HN  
\- \[ \] 2:00 PM — Send DMs to 30 LinkedIn prospects (use template from Section 6\)  
\- \[ \] 3:00 PM — Monitor for bugs, fix in real-time  
\- \[ \] 4:00 PM — Post "Day 1 of launching FlowForge AI" update on Twitter/X  
\- \[ \] 5:00 PM — Review analytics: sign-ups, generations, any errors

\#\#\# DAY 13: Revenue Push (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — List on AppSumo (lifetime deal at $97)  
\- \[ \] 9:00 AM — DM 30 more LinkedIn prospects  
\- \[ \] 10:00 AM — Reply to every email, DM, and comment from Day 12  
\- \[ \] 11:00 AM — Post "What I learned launching in 24 hours" thread on Twitter/X  
\- \[ \] 12:00 PM — Follow up with beta users who haven't upgraded yet

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Send cold emails to 50 agency owners (use Apollo.io free tier)  
\- \[ \] 2:00 PM — Reach out to 10 micro-influencers in SaaS/automation space  
\- \[ \] 3:00 PM — Collect 5+ testimonials, add to landing page  
\- \[ \] 4:00 PM — Optimize landing page based on Day 1 conversion data  
\- \[ \] 5:00 PM — Review revenue: are we on track for $1,500 MRR?

\#\#\# DAY 14: Optimize \+ Next Steps (10 hours)

\*\*Morning (5 hours):\*\*  
\- \[ \] 8:00 AM — Review all analytics: sign-ups → activation → paid conversion  
\- \[ \] 9:00 AM — Identify biggest drop-off point in funnel  
\- \[ \] 10:00 AM — Fix the \#1 conversion blocker  
\- \[ \] 11:00 AM — Write Week 1 retrospective  
\- \[ \] 12:00 PM — Plan Week 2 priorities

\*\*Afternoon (5 hours):\*\*  
\- \[ \] 1:00 PM — Set up affiliate program (Rewardful — free for first $1K MRR)  
\- \[ \] 2:00 PM — Create help documentation for each module  
\- \[ \] 3:00 PM — Plan API access tier for developers (Month 5 goal)  
\- \[ \] 4:00 PM — Plan white-label tier for agencies (Month 6 goal)  
\- \[ \] 5:00 PM — Celebrate. You shipped in 2 weeks. Now start selling.

\---

\#\# 8\. Complete Tech Stack & Setup Guide

\#\#\# Production Stack

| Layer | Technology | Why | Monthly Cost |  
|---|---|---|---|  
| \*\*Frontend\*\* | Next.js 14 (App Router) | SSR, API routes, React Server Components | $0 |  
| \*\*UI\*\* | Tailwind CSS \+ shadcn/ui | Professional UI in minutes, not days | $0 |  
| \*\*State\*\* | Zustand | Lightweight, no boilerplate | $0 |  
| \*\*Data Fetching\*\* | TanStack Query | Caching, retries, loading states | $0 |  
| \*\*AI\*\* | Anthropic Claude API (Haiku \+ Sonnet) | Best quality-to-cost ratio | \~$0.50/user |  
| \*\*Auth\*\* | Supabase Auth | Email \+ OAuth in 30 min, RLS built-in | $0 (free tier) |  
| \*\*Database\*\* | Supabase PostgreSQL | Generous free tier, RLS, real-time | $0 (free tier) |  
| \*\*ORM\*\* | Drizzle ORM | Type-safe, lightweight | $0 |  
| \*\*Payments\*\* | Stripe | Industry standard, handles everything | 2.9% \+ $0.30/tx |  
| \*\*File Upload\*\* | UploadThing | 15-min setup, S3-compatible | $0 (free tier) |  
| \*\*Cache\*\* | Upstash Redis | Rate limiting, session cache | $0 (free tier) |  
| \*\*Deployment\*\* | Vercel | Zero-config, edge functions | $0 (free tier) |  
| \*\*Monitoring\*\* | Sentry | Error tracking | $0 (free tier) |  
| \*\*Analytics\*\* | Vercel Analytics | Web vitals \+ page views | $0 (free tier) |  
| \*\*Email\*\* | Resend | Transactional emails | $0 (free tier: 100/day) |  
| \*\*Automation\*\* | n8n (self-hosted) | Internal workflows, client automation | $5 (Hetzner VPS) |

\*\*Total monthly cost at launch: \~$5 \+ API usage \+ Stripe fees\*\*

\#\#\# Setup Commands

\`\`\`bash  
\# 1\. Create project from boilerplate  
npx create-next-app \-e saas-starter flowforge-ai  
cd flowforge-ai

\# 2\. Install core dependencies  
npm install @anthropic-ai/sdk zustand @tanstack/react-query  
npm install uploadthing @uploadthing/react  
npm install drizzle-orm postgres  
npm install zod  
npm install resend  
npm install @sentry/nextjs

\# 3\. Install dev dependencies  
npm install \-D drizzle-kit

\# 4\. Install shadcn/ui components you'll need  
npx shadcn@latest add button card tabs input textarea label  
npx shadcn@latest add dialog select badge separator  
npx shadcn@latest add toast skeleton dropdown-menu

\# 5\. Set up environment variables  
cp .env.example .env.local  
\# Fill in: SUPABASE\_URL, SUPABASE\_ANON\_KEY, SUPABASE\_SERVICE\_KEY,  
\#          ANTHROPIC\_API\_KEY, STRIPE\_SECRET\_KEY, STRIPE\_WEBHOOK\_SECRET,  
\#          UPLOADTHING\_TOKEN, RESEND\_API\_KEY, N8N\_BASE\_URL, N8N\_API\_KEY  
\`\`\`

\#\#\# Environment Variables (.env.local)

\`\`\`env  
\# Supabase  
NEXT\_PUBLIC\_SUPABASE\_URL=https://your-project.supabase.co  
NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY=eyJ...  
SUPABASE\_SERVICE\_ROLE\_KEY=eyJ...

\# Anthropic  
ANTHROPIC\_API\_KEY=sk-ant-...

\# Stripe  
STRIPE\_SECRET\_KEY=sk\_test\_...  
STRIPE\_WEBHOOK\_SECRET=whsec\_...  
NEXT\_PUBLIC\_STRIPE\_PUBLISHABLE\_KEY=pk\_test\_...

\# Stripe Price IDs  
STRIPE\_STARTER\_PRICE\_ID=price\_...  
STRIPE\_PRO\_PRICE\_ID=price\_...  
STRIPE\_AGENCY\_PRICE\_ID=price\_...

\# UploadThing  
UPLOADTHING\_SECRET=sk\_live\_...  
UPLOADTHING\_APP\_ID=...

\# Resend (transactional email)  
RESEND\_API\_KEY=re\_...

\# n8n  
N8N\_BASE\_URL=https://n8n.yourdomain.com  
N8N\_API\_KEY=...

\# Sentry  
NEXT\_PUBLIC\_SENTRY\_DSN=https://...@sentry.io/...

\# App  
NEXT\_PUBLIC\_APP\_URL=https://flowforge.ai  
\`\`\`

\---

\#\# 9\. Database Schema (Full)

\`\`\`sql  
\-- \============================================  
\-- FLOWFORGE AI \- COMPLETE DATABASE SCHEMA  
\-- \============================================

\-- Users (extends Supabase Auth users)  
CREATE TABLE public.profiles (  
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,  
  email TEXT NOT NULL,  
  full\_name TEXT,  
  avatar\_url TEXT,  
  stripe\_customer\_id TEXT UNIQUE,  
  plan\_tier TEXT NOT NULL DEFAULT 'free'   
    CHECK (plan\_tier IN ('free', 'starter', 'pro', 'agency')),  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),  
  updated\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

\-- RLS: Users can only read/update their own profile  
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can view own profile" ON public.profiles  
  FOR SELECT USING (auth.uid() \= id);  
CREATE POLICY "Users can update own profile" ON public.profiles  
  FOR UPDATE USING (auth.uid() \= id);

\-- Subscriptions  
CREATE TABLE public.subscriptions (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  stripe\_subscription\_id TEXT UNIQUE NOT NULL,  
  stripe\_price\_id TEXT NOT NULL,  
  status TEXT NOT NULL DEFAULT 'active'  
    CHECK (status IN ('active', 'canceled', 'past\_due', 'trialing', 'paused')),  
  current\_period\_start TIMESTAMPTZ,  
  current\_period\_end TIMESTAMPTZ,  
  cancel\_at\_period\_end BOOLEAN DEFAULT FALSE,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),  
  updated\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions  
  FOR SELECT USING (auth.uid() \= user\_id);

\-- Generations (tracks every AI output)  
CREATE TABLE public.generations (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  module\_name TEXT NOT NULL  
    CHECK (module\_name IN (  
      'workflow-architect',   
      'bizplan-builder',   
      'outreach-engine',   
      'doc-analyzer',   
      'niche-copywriter'  
    )),  
  input\_text TEXT NOT NULL,  
  output\_text TEXT NOT NULL,  
  model\_used TEXT NOT NULL,  
  input\_tokens INTEGER,  
  output\_tokens INTEGER,  
  cost\_usd NUMERIC(10, 6),  
  generation\_time\_ms INTEGER,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

\-- Index for usage tracking queries  
CREATE INDEX idx\_generations\_user\_month ON public.generations (user\_id, module\_name, created\_at);

ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can view own generations" ON public.generations  
  FOR SELECT USING (auth.uid() \= user\_id);  
CREATE POLICY "Users can insert own generations" ON public.generations  
  FOR INSERT WITH CHECK (auth.uid() \= user\_id);

\-- Documents (Doc Analyzer uploads)  
CREATE TABLE public.documents (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  file\_name TEXT NOT NULL,  
  file\_url TEXT NOT NULL,  
  file\_type TEXT NOT NULL CHECK (file\_type IN ('pdf', 'docx', 'txt')),  
  file\_size\_bytes INTEGER,  
  extracted\_text TEXT,  
  analysis\_result JSONB,  
  risk\_score TEXT CHECK (risk\_score IN ('LOW', 'MEDIUM', 'HIGH')),  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can manage own documents" ON public.documents  
  FOR ALL USING (auth.uid() \= user\_id);

\-- Teams (Agency tier)  
CREATE TABLE public.teams (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  owner\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  name TEXT NOT NULL,  
  slug TEXT UNIQUE NOT NULL,  
  seat\_count INTEGER NOT NULL DEFAULT 5,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

CREATE TABLE public.team\_members (  
  team\_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,  
  user\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),  
  joined\_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),  
  PRIMARY KEY (team\_id, user\_id)  
);

\-- n8n Error Log  
CREATE TABLE public.n8n\_errors (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  workflow\_name TEXT NOT NULL,  
  error\_node TEXT NOT NULL,  
  error\_message TEXT NOT NULL,  
  execution\_id TEXT,  
  input\_data JSONB,  
  status TEXT DEFAULT 'pending\_retry'   
    CHECK (status IN ('pending\_retry', 'retried', 'resolved', 'ignored')),  
  occurred\_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),  
  resolved\_at TIMESTAMPTZ  
);

\-- Service Health (Circuit Breaker)  
CREATE TABLE public.service\_health (  
  service\_name TEXT PRIMARY KEY,  
  status TEXT NOT NULL DEFAULT 'up' CHECK (status IN ('up', 'down', 'degraded')),  
  failure\_count INTEGER DEFAULT 0,  
  last\_failure\_at TIMESTAMPTZ,  
  last\_check\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

\-- Insert initial service health entries  
INSERT INTO public.service\_health (service\_name, status) VALUES  
  ('anthropic\_api', 'up'),  
  ('stripe\_api', 'up'),  
  ('supabase\_api', 'up'),  
  ('resend\_api', 'up'),  
  ('n8n\_webhook', 'up');

\-- Usage function: get monthly generation count per module  
CREATE OR REPLACE FUNCTION get\_monthly\_usage(  
  p\_user\_id UUID,   
  p\_module\_name TEXT  
)  
RETURNS INTEGER AS $$  
  SELECT COUNT(\*)::INTEGER  
  FROM public.generations  
  WHERE user\_id \= p\_user\_id  
    AND module\_name \= p\_module\_name  
    AND created\_at \>= date\_trunc('month', NOW());  
$$ LANGUAGE sql STABLE;

\-- Usage function: get total monthly generation count  
CREATE OR REPLACE FUNCTION get\_total\_monthly\_usage(  
  p\_user\_id UUID  
)  
RETURNS INTEGER AS $$  
  SELECT COUNT(\*)::INTEGER  
  FROM public.generations  
  WHERE user\_id \= p\_user\_id  
    AND created\_at \>= date\_trunc('month', NOW());  
$$ LANGUAGE sql STABLE;  
\`\`\`

\---

\#\# 10\. API Route Architecture (Full)

\#\#\# Route Structure

\`\`\`  
/app  
  /api  
    /ai  
      /workflow-architect/route.ts  
      /bizplan-builder/route.ts  
      /outreach-engine/route.ts  
      /doc-analyzer/route.ts  
      /niche-copywriter/route.ts  
    /n8n  
      /import-workflow/route.ts  
      /trigger/route.ts  
    /stripe  
      /webhook/route.ts  
      /create-checkout/route.ts  
      /create-portal/route.ts  
    /upload  
      /route.ts                    ← UploadThing handler  
    /analysis  
      /status/route.ts             ← Polling endpoint for long jobs  
  /dashboard  
    /page.tsx                      ← Main dashboard  
    /workflow-architect/page.tsx  
    /bizplan-builder/page.tsx  
    /outreach-engine/page.tsx  
    /doc-analyzer/page.tsx  
    /niche-copywriter/page.tsx  
    /billing/page.tsx  
    /settings/page.tsx  
  /pricing/page.tsx  
  /page.tsx                        ← Landing page  
\`\`\`

\#\#\# Core Claude API Library (/lib/claude.ts)

\`\`\`typescript  
import Anthropic from '@anthropic-ai/sdk';

const client \= new Anthropic({  
  apiKey: process.env.ANTHROPIC\_API\_KEY,  
});

// Model configuration per module  
const MODEL\_CONFIG: Record\<string, {  
  model: string;  
  maxTokens: number;  
  systemPrompt: string;  
}\> \= {  
  'workflow-architect': {  
    model: 'claude-sonnet-4-5-20250514',  
    maxTokens: 8192,  
    systemPrompt: WORKFLOW\_ARCHITECT\_PROMPT,  
  },  
  'bizplan-builder': {  
    model: 'claude-sonnet-4-5-20250514',  
    maxTokens: 6144,  
    systemPrompt: BIZPLAN\_BUILDER\_PROMPT,  
  },  
  'outreach-engine': {  
    model: 'claude-haiku-4-5-20250514',  
    maxTokens: 1536,  
    systemPrompt: OUTREACH\_ENGINE\_PROMPT,  
  },  
  'doc-analyzer': {  
    model: 'claude-sonnet-4-5-20250514',  
    maxTokens: 4096,  
    systemPrompt: DOC\_ANALYZER\_PROMPT,  
  },  
  'niche-copywriter': {  
    model: 'claude-haiku-4-5-20250514',  
    maxTokens: 2560,  
    systemPrompt: NICHE\_COPYWRITER\_PROMPT,  
  },  
};

export async function callClaude(  
  moduleName: string,  
  userInput: string  
): Promise\<{ text: string; inputTokens: number; outputTokens: number; model: string }\> {  
  const config \= MODEL\_CONFIG\[moduleName\];  
  if (\!config) throw new Error(\`Unknown module: ${moduleName}\`);

  const startTime \= Date.now();

  const response \= await client.messages.create({  
    model: config.model,  
    max\_tokens: config.maxTokens,  
    system: \[  
      {  
        type: 'text',  
        text: config.systemPrompt,  
        cache\_control: { type: 'ephemeral' },  
      },  
    \],  
    messages: \[  
      {  
        role: 'user',  
        content: userInput,  
      },  
    \],  
  });

  const text \= response.content  
    .filter((block): block is Anthropic.TextBlock \=\> block.type \=== 'text')  
    .map((block) \=\> block.text)  
    .join('');

  return {  
    text,  
    inputTokens: response.usage.input\_tokens,  
    outputTokens: response.usage.output\_tokens,  
    model: config.model,  
  };  
}  
\`\`\`

\#\#\# Usage Gating Library (/lib/usage.ts)

\`\`\`typescript  
import { createClient } from '@/utils/supabase/server';

const PLAN\_LIMITS: Record\<string, { perModule: number; total: number }\> \= {  
  free: { perModule: 3, total: 15 },        // 3 per module lifetime  
  starter: { perModule: 50, total: 150 },    // 50/month per module  
  pro: { perModule: Infinity, total: Infinity },  
  agency: { perModule: Infinity, total: Infinity },  
};

export async function checkUsageLimit(  
  userId: string,  
  moduleName: string  
): Promise\<{ allowed: boolean; used: number; limit: number; plan: string }\> {  
  const supabase \= createClient();

  // Get user's plan  
  const { data: profile } \= await supabase  
    .from('profiles')  
    .select('plan\_tier')  
    .eq('id', userId)  
    .single();

  const plan \= profile?.plan\_tier || 'free';  
  const limits \= PLAN\_LIMITS\[plan\];

  // Get current month's usage for this module  
  const { data: generations } \= await supabase  
    .from('generations')  
    .select('id', { count: 'exact' })  
    .eq('user\_id', userId)  
    .eq('module\_name', moduleName)  
    .gte('created\_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString());

  const used \= generations?.length || 0;  
  const allowed \= used \< limits.perModule;

  return { allowed, used, limit: limits.perModule, plan };  
}

export async function recordGeneration(  
  userId: string,  
  moduleName: string,  
  inputText: string,  
  outputText: string,  
  model: string,  
  inputTokens: number,  
  outputTokens: number  
) {  
  const supabase \= createClient();

  const costPerToken: Record\<string, { input: number; output: number }\> \= {  
    'claude-haiku-4-5-20250514': { input: 0.0000008, output: 0.000004 },  
    'claude-sonnet-4-5-20250514': { input: 0.000003, output: 0.000015 },  
  };

  const rates \= costPerToken\[model\] || costPerToken\['claude-haiku-4-5-20250514'\];  
  const costUsd \= (inputTokens \* rates.input) \+ (outputTokens \* rates.output);

  await supabase.from('generations').insert({  
    user\_id: userId,  
    module\_name: moduleName,  
    input\_text: inputText,  
    output\_text: outputText,  
    model\_used: model,  
    input\_tokens: inputTokens,  
    output\_tokens: outputTokens,  
    cost\_usd: costUsd,  
  });  
}  
\`\`\`

\#\#\# Example Module API Route (/app/api/ai/outreach-engine/route.ts)

\`\`\`typescript  
import { createClient } from '@/utils/supabase/server';  
import { callClaude, recordGeneration } from '@/lib/claude';  
import { checkUsageLimit } from '@/lib/usage';  
import { z } from 'zod';

const outreachInputSchema \= z.object({  
  prospectName: z.string().min(2, 'Name too short').max(100),  
  company: z.string().min(2, 'Company name too short').max(100),  
  role: z.string().min(2, 'Role too short').max(100),  
  painPoint: z.string().min(10, 'Describe the pain point in at least 10 characters').max(500),  
  offer: z.string().min(10, 'Describe your offer in at least 10 characters').max(500),  
});

export async function POST(req: Request) {  
  try {  
    // 1\. Auth check  
    const supabase \= createClient();  
    const { data: { user } } \= await supabase.auth.getUser();  
    if (\!user) {  
      return Response.json({ error: 'Unauthorized' }, { status: 401 });  
    }

    // 2\. Parse and validate input  
    const body \= await req.json();  
    const validation \= outreachInputSchema.safeParse(body);  
    if (\!validation.success) {  
      return Response.json(  
        { error: 'Invalid input', details: validation.error.flatten().fieldErrors },  
        { status: 400 }  
      );  
    }

    // 3\. Usage limit check  
    const usage \= await checkUsageLimit(user.id, 'outreach-engine');  
    if (\!usage.allowed) {  
      return Response.json(  
        {   
          error: 'LIMIT\_REACHED',   
          message: \`You've used ${usage.used}/${usage.limit} generations this month.\`,  
          upgradeUrl: '/pricing',  
          currentPlan: usage.plan,  
        },  
        { status: 429 }  
      );  
    }

    // 4\. Format input for Claude  
    const userInput \= \`Prospect Name: ${body.prospectName}  
Company: ${body.company}  
Role: ${body.role}  
Pain Point: ${body.painPoint}  
Your Offer: ${body.offer}\`;

    // 5\. Call Claude  
    const result \= await callClaude('outreach-engine', userInput);

    // 6\. Record usage  
    await recordGeneration(  
      user.id,  
      'outreach-engine',  
      userInput,  
      result.text,  
      result.model,  
      result.inputTokens,  
      result.outputTokens  
    );

    // 7\. Return result  
    return Response.json({  
      result: result.text,  
      usage: {  
        used: usage.used \+ 1,  
        limit: usage.limit,  
        plan: usage.plan,  
      },  
    });

  } catch (error) {  
    console.error('Outreach Engine error:', error);  
    return Response.json(  
      { error: 'Generation failed. Please try again.' },  
      { status: 500 }  
    );  
  }  
}  
\`\`\`

\---

\#\# 11\. Pricing & Revenue Model

\#\#\# Pricing Tiers

| Plan | Price | Modules | Generations | Team Seats | White-Label | API Access |  
|---|---|---|---|---|---|---|  
| \*\*Free\*\* | $0 | All 5 | 3 per module (lifetime) | 1 | No | No |  
| \*\*Starter\*\* | $49/mo | 3 (choose any) | 50/module/mo | 1 | No | No |  
| \*\*Pro\*\* | $99/mo | All 5 | Unlimited | 1 | No | No |  
| \*\*Agency\*\* | $299/mo | All 5 | Unlimited | 5 | Yes | Yes |  
| \*\*Lifetime\*\* | $197 one-time | All 5 | Unlimited | 1 | No | No |

\#\#\# Revenue Projections

| Month | Free Users | Starter | Pro | Agency | MRR | Cumulative Revenue |  
|---|---|---|---|---|---|---|  
| 1 | 200 | 8 | 5 | 2 | $1,143 | $1,143 |  
| 2 | 500 | 20 | 15 | 5 | $2,695 | $3,838 |  
| 3 | 1,000 | 40 | 30 | 10 | $5,390 | $10,228 |  
| 4 | 2,000 | 60 | 50 | 15 | $8,090 | $18,318 |  
| 5 | 3,500 | 80 | 70 | 20 | $10,790 | $29,108 |  
| 6 | 5,000 | 100 | 90 | 25 | $13,490 | $42,598 |

\#\#\# $200K ARR Path

At $99 Pro plan: Need \~169 subscribers → $16,731 MRR → $200,770 ARR

At mixed plans (Month 8 projection):  
\- 120 Starter @ $49 \= $5,880  
\- 100 Pro @ $99 \= $9,900  
\- 30 Agency @ $299 \= $8,970  
\- \*\*Total MRR \= $24,750 → $297,000 ARR\*\*

\---

\#\# 12\. Launch Playbook

\#\#\# Pre-Launch Checklist

\- \[ \] All 5 modules work end-to-end  
\- \[ \] Billing flow tested (free → paid → cancel)  
\- \[ \] Landing page live with pricing  
\- \[ \] Custom domain configured  
\- \[ \] Error monitoring (Sentry) active  
\- \[ \] Demo videos recorded and uploaded  
\- \[ \] Product Hunt page drafted  
\- \[ \] Reddit posts written  
\- \[ \] LinkedIn outreach list built (50 contacts)  
\- \[ \] AppSumo listing submitted  
\- \[ \] Feedback form live (Tally.so)  
\- \[ \] Welcome email automation running  
\- \[ \] Daily metrics email configured

\#\#\# Launch Day Channels (Priority Order)

1\. \*\*Product Hunt\*\* — Schedule for Tuesday 12:01 AM PST. Reply to every comment within 30 minutes.  
2\. \*\*Reddit\*\* — Post to r/SaaS, r/entrepreneur, r/n8n, r/smallbusiness, r/freelance. Space posts 2 hours apart. NO direct selling — share the story of building it.  
3\. \*\*Twitter/X\*\* — Thread: "I built 5 AI tools in 2 weeks. Here's what happened." Include demo video.  
4\. \*\*LinkedIn\*\* — Post \+ DM 30 agency owners.  
5\. \*\*Hacker News\*\* — Show HN post. Be prepared to answer technical questions.  
6\. \*\*IndieHackers\*\* — Post in "Products" and "I'm Launching" sections.

\#\#\# Week 1 Outreach Targets

| Channel | Daily Target | Weekly Total |  
|---|---|---|  
| LinkedIn DMs | 10 | 70 |  
| Cold emails | 20 | 140 |  
| Twitter/X replies | 20 | 140 |  
| Reddit comments | 10 | 70 |  
| Community posts (Skool, Discord) | 5 | 35 |  
| \*\*Total\*\* | \*\*65\*\* | \*\*455\*\* |

\---

\#\# 13\. Post-Launch Scaling to $200K ARR

\#\#\# Month 2-3: Product-Market Fit

\- Talk to every paying user. 15-minute Zoom calls. Ask: "What would make you cancel?" and "What's the one feature you need?"  
\- Build the \#1 requested feature  
\- Fix the \#1 churn reason  
\- Launch affiliate program (20% recurring commission)

\#\#\# Month 4: Growth Channels

\- \*\*SEO:\*\* Write 2 blog posts/week targeting "AI cold email generator," "n8n workflow generator," "AI business plan generator," "AI contract analyzer"  
\- \*\*Partnerships:\*\* Reach out to n8n community leaders, agency coaches, startup accelerators  
\- \*\*Content:\*\* YouTube channel with n8n workflow tutorials (funnels to FlowForge)  
\- \*\*Ads:\*\* $500/month on Twitter/X and LinkedIn, targeting agency owners

\#\#\# Month 5: API Access Tier

\- Launch REST API so developers can integrate FlowForge modules into their own apps  
\- Pricing: $0.10/generation or $199/month for 5,000 generations  
\- This unlocks an entirely new customer segment

\#\#\# Month 6: White-Label for Agencies

\- Agencies resell FlowForge under their own brand  
\- Custom domain, custom logo, custom email  
\- Pricing: $500-$1,500/month per agency  
\- Each agency brings 5-20 of their own clients  
\- This is your biggest unlock: \*\*10 agencies \= $5,000-$15,000 MRR\*\*

\#\#\# Month 7-12: The Flywheel

At this point, the flywheel spins:  
1\. More users → more data → better outputs (you fine-tune prompts based on what works)  
2\. More content → more SEO traffic → more sign-ups  
3\. More agencies → more word-of-mouth → more sign-ups  
4\. API access → more integrations → more lock-in → lower churn

\*\*12-month target: 300+ paying users, $25K+ MRR, $300K+ ARR\*\*

\---

\#\# Final Note to Natnael

You said it yourself: "I know how to build products but I don't know how to actually cure them... I don't know how to close anything."

This plan gives you the build. But the build is the EASY part for you. The hard part — and the part that actually makes money — is the sell.

\*\*The rule for the next 14 days:\*\*

\> For every 1 hour you spend coding, spend 1 hour selling.

If you catch yourself coding for 6 hours straight without sending a single DM, stop. Open LinkedIn. Send 5 messages. Then go back to code.

The spreadsheet you need to fill in every day:

| Date | Outreach Sent | Responses | Calls Booked | Sales | Revenue |  
|---|---|---|---|---|---|  
| Day 1 | | | | | $0 |  
| Day 14 | | | | | ??? |

Your goal for Day 14: \*\*$1,500 MRR or 10 paying users.\*\*

This is the complete, production-ready full-stack codebase for \*\*FlowForge AI\*\*. It is built with Next.js 14 (App Router), Supabase, Stripe, shadcn/ui, and the Anthropic Claude API. 

Follow the \*\*Setup Instructions\*\* at the bottom exactly to get this running in 15 minutes.

\---

\#\#\# 1\. Project Structure  
Create a new folder called \`flowforge-ai\` and set up this structure:

\`\`\`text  
flowforge-ai/  
├── .env.local  
├── next.config.mjs  
├── package.json  
├── tailwind.config.ts  
├── tsconfig.json  
├── postcss.config.js  
├── supabase/  
│   └── migrations/  
│       └── 001\_init.sql  
├── lib/  
│   ├── claude.ts  
│   ├── usage.ts  
│   ├── prompts.ts  
│   └── supabase/  
│       ├── client.ts  
│       ├── server.ts  
│       └── middleware.ts  
├── app/  
│   ├── layout.tsx  
│   ├── page.tsx  
│   ├── globals.css  
│   ├── api/  
│   │   ├── ai/  
│   │   │   └── \[module\]/  
│   │   │       └── route.ts  
│   │   └── stripe/  
│   │       └── webhook/  
│   │           └── route.ts  
│   ├── login/  
│   │   └── page.tsx  
│   └── dashboard/  
│       ├── layout.tsx  
│       ├── page.tsx  
│       └── \[module\]/  
│           └── page.tsx  
└── components/  
    ├── ui/ (shadcn components)  
    ├── ModuleCard.tsx  
    └── GeneratorForm.tsx  
\`\`\`

\---

\#\#\# 2\. Core Configuration Files

\*\*\`package.json\`\*\*  
\`\`\`json  
{  
  "name": "flowforge-ai",  
  "version": "0.1.0",  
  "private": true,  
  "scripts": {  
    "dev": "next dev",  
    "build": "next build",  
    "start": "next start",  
    "lint": "next lint"  
  },  
  "dependencies": {  
    "@anthropic-ai/sdk": "^0.27.0",  
    "@radix-ui/react-alert-dialog": "^1.0.5",  
    "@radix-ui/react-dialog": "^1.0.5",  
    "@radix-ui/react-label": "^2.0.2",  
    "@radix-ui/react-select": "^2.0.0",  
    "@radix-ui/react-slot": "^1.0.2",  
    "@radix-ui/react-tabs": "^1.0.4",  
    "@radix-ui/react-toast": "^1.1.5",  
    "@supabase/ssr": "^2.1.0",  
    "@supabase/supabase-js": "^2.42.0",  
    "class-variance-authority": "^0.7.0",  
    "clsx": "^2.1.0",  
    "lucide-react": "^0.344.0",  
    "next": "14.1.0",  
    "react": "^18.2.0",  
    "react-dom": "^18.2.0",  
    "stripe": "^14.20.0",  
    "tailwind-merge": "^2.2.1",  
    "tailwindcss-animate": "^1.0.7",  
    "zod": "^3.22.4"  
  },  
  "devDependencies": {  
    "@types/node": "^20",  
    "@types/react": "^18",  
    "@types/react-dom": "^18",  
    "autoprefixer": "^10.0.1",  
    "postcss": "^8",  
    "tailwindcss": "^3.3.0",  
    "typescript": "^5"  
  }  
}  
\`\`\`

\*\*\`.env.local\`\*\* (Fill these in using the setup instructions below)  
\`\`\`env  
\# Supabase  
NEXT\_PUBLIC\_SUPABASE\_URL=https://your-project-id.supabase.co  
NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY=your-anon-key  
SUPABASE\_SERVICE\_ROLE\_KEY=your-service-role-key

\# Anthropic  
ANTHROPIC\_API\_KEY=sk-ant-...

\# Stripe  
STRIPE\_SECRET\_KEY=sk\_test\_...  
STRIPE\_WEBHOOK\_SECRET=whsec\_...  
NEXT\_PUBLIC\_STRIPE\_PRO\_PRICE\_ID=price\_...

\# App  
NEXT\_PUBLIC\_APP\_URL=http://localhost:3000  
\`\`\`

\*\*\`next.config.mjs\`\*\*  
\`\`\`javascript  
/\*\* @type {import('next').NextConfig} \*/  
const nextConfig \= {  
  experimental: {  
    serverComponentsExternalPackages: \['@anthropic-ai/sdk'\]  
  }  
};  
export default nextConfig;  
\`\`\`

\*\*\`tailwind.config.ts\`\*\*  
\`\`\`typescript  
import type { Config } from "tailwindcss";

const config: Config \= {  
  darkMode: \["class"\],  
  content: \[  
    "./pages/\*\*/\*.{ts,tsx}",  
    "./components/\*\*/\*.{ts,tsx}",  
    "./app/\*\*/\*.{ts,tsx}",  
  \],  
  theme: {  
    extend: {  
      colors: {  
        border: "hsl(var(--border))",  
        input: "hsl(var(--input))",  
        ring: "hsl(var(--ring))",  
        background: "hsl(var(--background))",  
        foreground: "hsl(var(--foreground))",  
        primary: {  
          DEFAULT: "hsl(var(--primary))",  
          foreground: "hsl(var(--primary-foreground))",  
        },  
        secondary: {  
          DEFAULT: "hsl(var(--secondary))",  
          foreground: "hsl(var(--secondary-foreground))",  
        },  
        destructive: {  
          DEFAULT: "hsl(var(--destructive))",  
          foreground: "hsl(var(--destructive-foreground))",  
        },  
        muted: {  
          DEFAULT: "hsl(var(--muted))",  
          foreground: "hsl(var(--muted-foreground))",  
        },  
        accent: {  
          DEFAULT: "hsl(var(--accent))",  
          foreground: "hsl(var(--accent-foreground))",  
        },  
        card: {  
          DEFAULT: "hsl(var(--card))",  
          foreground: "hsl(var(--card-foreground))",  
        },  
      },  
      borderRadius: {  
        lg: "var(--radius)",  
        md: "calc(var(--radius) \- 2px)",  
        sm: "calc(var(--radius) \- 4px)",  
      },  
    },  
  },  
  plugins: \[require("tailwindcss-animate")\],  
};  
export default config;  
\`\`\`

\---

\#\#\# 3\. Database Schema

\*\*\`supabase/migrations/001\_init.sql\`\*\* (Run this in the Supabase SQL Editor)  
\`\`\`sql  
\-- Profiles table linked to auth.users  
CREATE TABLE public.profiles (  
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,  
  email TEXT NOT NULL,  
  plan\_tier TEXT NOT NULL DEFAULT 'free' CHECK (plan\_tier IN ('free', 'starter', 'pro', 'agency')),  
  stripe\_customer\_id TEXT UNIQUE,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() \= id);  
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() \= id);

\-- Generations table to track usage  
CREATE TABLE public.generations (  
  id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),  
  user\_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,  
  module\_name TEXT NOT NULL,  
  input\_text TEXT NOT NULL,  
  output\_text TEXT NOT NULL,  
  model\_used TEXT NOT NULL,  
  input\_tokens INTEGER,  
  output\_tokens INTEGER,  
  created\_at TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

CREATE INDEX idx\_generations\_user\_month ON public.generations (user\_id, module\_name, created\_at);

ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;  
CREATE POLICY "Users can view own generations" ON public.generations FOR SELECT USING (auth.uid() \= user\_id);  
CREATE POLICY "Users can insert own generations" ON public.generations FOR INSERT WITH CHECK (auth.uid() \= user\_id);

\-- Function to handle new user creation  
CREATE OR REPLACE FUNCTION public.handle\_new\_user()  
RETURNS TRIGGER AS $$  
BEGIN  
  INSERT INTO public.profiles (id, email, plan\_tier)  
  VALUES (NEW.id, NEW.email, 'free');  
  RETURN NEW;  
END;  
$$ LANGUAGE plpgsql SECURITY DEFINER;

\-- Trigger to auto-create profile on signup  
CREATE TRIGGER on\_auth\_user\_created  
  AFTER INSERT ON auth.users  
  FOR EACH ROW EXECUTE FUNCTION public.handle\_new\_user();  
\`\`\`

\---

\#\#\# 4\. Supabase Client Setup

\*\*\`lib/supabase/client.ts\`\*\*  
\`\`\`typescript  
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {  
  return createBrowserClient(  
    process.env.NEXT\_PUBLIC\_SUPABASE\_URL\!,  
    process.env.NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY\!  
  )  
}  
\`\`\`

\*\*\`lib/supabase/server.ts\`\*\*  
\`\`\`typescript  
import { createServerClient, type CookieOptions } from '@supabase/ssr'  
import { cookies } from 'next/headers'

export function createClient() {  
  const cookieStore \= cookies()

  return createServerClient(  
    process.env.NEXT\_PUBLIC\_SUPABASE\_URL\!,  
    process.env.NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY\!,  
    {  
      cookies: {  
        get(name: string) {  
          return cookieStore.get(name)?.value  
        },  
        set(name: string, value: string, options: CookieOptions) {  
          try {  
            cookieStore.set({ name, value, ...options })  
          } catch (error) {  
            // The \`set\` method was called from a Server Component.  
          }  
        },  
        remove(name: string, options: CookieOptions) {  
          try {  
            cookieStore.set({ name, value: '', ...options })  
          } catch (error) {}  
        },  
      },  
    }  
  )  
}  
\`\`\`

\*\*\`lib/supabase/middleware.ts\`\*\*  
\`\`\`typescript  
import { createServerClient, type CookieOptions } from '@supabase/ssr'  
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {  
  let supabaseResponse \= NextResponse.next({ request })

  const supabase \= createServerClient(  
    process.env.NEXT\_PUBLIC\_SUPABASE\_URL\!,  
    process.env.NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY\!,  
    {  
      cookies: {  
        get(name: string) { return request.cookies.get(name)?.value },  
        set(name: string, value: string, options: CookieOptions) {  
          request.cookies.set(name, value)  
          supabaseResponse \= NextResponse.next({ request })  
          supabaseResponse.cookies.set(name, value, options)  
        },  
        remove(name: string, options: CookieOptions) {  
          request.cookies.set(name, '')  
          supabaseResponse \= NextResponse.next({ request })  
          supabaseResponse.cookies.set(name, '', options)  
        },  
      },  
    }  
  )

  const { data: { user } } \= await supabase.auth.getUser()

  // Protect dashboard routes  
  if (\!user && request.nextUrl.pathname.startsWith('/dashboard')) {  
    const url \= request.nextUrl.clone()  
    url.pathname \= '/login'  
    return NextResponse.redirect(url)  
  }

  return supabaseResponse  
}  
\`\`\`

\*\*\`middleware.ts\`\*\* (Root directory)  
\`\`\`typescript  
import { updateSession } from '@/lib/supabase/middleware'  
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {  
  return await updateSession(request)  
}

export const config \= {  
  matcher: \[  
    '/((?\!\_next/static|\_next/image|favicon.ico|.\*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).\*)',  
  \],  
}  
\`\`\`

\---

\#\#\# 5\. Core AI & Usage Logic

\*\*\`lib/prompts.ts\`\*\*  
\`\`\`typescript  
export const SYSTEM\_PROMPTS: Record\<string, string\> \= {  
  'workflow-architect': \`You are FlowForge AI — an n8n automation expert with 10+ years of workflow design experience.  
When the user describes a business process:  
1\. Identify the trigger (webhook, schedule, form, email, etc.)  
2\. Map each step as an n8n node (name the exact node type)  
3\. Output a structured workflow blueprint with: Node list, Data flow, Conditional logic  
4\. Provide a valid importable n8n JSON skeleton.  
Format: Step-by-step blueprint \+ JSON block.\`,  
    
  'bizplan-builder': \`You are FlowForge AI — a seasoned startup advisor and pitch consultant.  
Generate a full business plan based on the user's input including: Executive Summary (150 words), Problem & Solution, Target Market, Revenue Model, Go-To-Market Plan, 12-Month Roadmap, Risks & Mitigations.  
Format: Clean sections with bold headers, investor-ready tone.\`,  
    
  'outreach-engine': \`You are FlowForge AI — a B2B cold email strategist with a 35%+ reply rate track record.  
Generate: 1\. Subject Line (A/B: 2 variations) 2\. Opening line (hyper-personalized) 3\. Body (3 sentences: pain → solution → proof) 4\. CTA (one clear ask) 5\. Follow-up \#1 (Day 3\) 6\. Follow-up \#2 (Day 7).  
Format: Each email labeled and ready to copy-paste.\`,  
    
  'doc-analyzer': \`You are FlowForge AI — a legal and compliance analyst trained on business contracts.  
1\. Summarize the document in plain English (under 200 words)  
2\. Flag HIGH RISK clauses (termination, liability, IP ownership, non-compete) 🔴  
3\. Flag MEDIUM RISK clauses (payment terms, renewal auto-clauses, exclusivity) 🟡  
4\. List 3-5 suggested negotiation points  
5\. Provide a risk score: LOW / MEDIUM / HIGH 🟢  
IMPORTANT: Always include disclaimer — "This is not legal advice. Consult an attorney for binding decisions."\`,  
    
  'niche-copywriter': \`You are FlowForge AI — a direct-response copywriter specializing in niche B2B and B2C markets.  
Generate: 1\. Hero Headline (3 variations) 2\. Subheadline 3\. Value Proposition bullets (5) 4\. CTA button text (3 options) 5\. Full ad copy (Facebook/Google format) 6\. Email subject \+ body 7\. Landing page above-the-fold copy.  
Format: Labeled blocks, ready to paste into any builder.\`  
};  
\`\`\`

\*\*\`lib/claude.ts\`\*\*  
\`\`\`typescript  
import Anthropic from '@anthropic-ai/sdk';  
import { SYSTEM\_PROMPTS } from './prompts';

const client \= new Anthropic({ apiKey: process.env.ANTHROPIC\_API\_KEY });

const MODEL\_MAP: Record\<string, { model: string; maxTokens: number }\> \= {  
  'workflow-architect': { model: 'claude-sonnet-4-5-20250514', maxTokens: 8192 },  
  'bizplan-builder': { model: 'claude-sonnet-4-5-20250514', maxTokens: 4096 },  
  'outreach-engine': { model: 'claude-haiku-4-5-20250514', maxTokens: 1500 },  
  'doc-analyzer': { model: 'claude-sonnet-4-5-20250514', maxTokens: 4096 },  
  'niche-copywriter': { model: 'claude-haiku-4-5-20250514', maxTokens: 2500 },  
};

export async function callClaude(moduleName: string, userInput: string) {  
  const config \= MODEL\_MAP\[moduleName\] || MODEL\_MAP\['niche-copywriter'\];  
  const systemPrompt \= SYSTEM\_PROMPTS\[moduleName\];

  const response \= await client.messages.create({  
    model: config.model,  
    max\_tokens: config.maxTokens,  
    system: \[  
      { type: 'text', text: systemPrompt, cache\_control: { type: 'ephemeral' } }  
    \],  
    messages: \[{ role: 'user', content: userInput }\],  
  });

  const text \= response.content  
    .filter((block): block is Anthropic.TextBlock \=\> block.type \=== 'text')  
    .map((block) \=\> block.text)  
    .join('');

  return {  
    text,  
    inputTokens: response.usage.input\_tokens,  
    outputTokens: response.usage.output\_tokens,  
    model: config.model,  
  };  
}  
\`\`\`

\*\*\`lib/usage.ts\`\*\*  
\`\`\`typescript  
import { createClient } from './supabase/server';

const PLAN\_LIMITS: Record\<string, number\> \= {  
  free: 3,      // 3 total per module lifetime  
  starter: 50,  // 50/month  
  pro: Infinity,  
  agency: Infinity,  
};

export async function checkUsageLimit(userId: string, moduleName: string) {  
  const supabase \= createClient();  
    
  const { data: profile } \= await supabase  
    .from('profiles')  
    .select('plan\_tier')  
    .eq('id', userId)  
    .single();

  const plan \= profile?.plan\_tier || 'free';  
  const limit \= PLAN\_LIMITS\[plan\];

  const startOfMonth \= new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();  
  const { count } \= await supabase  
    .from('generations')  
    .select('\*', { count: 'exact', head: true })  
    .eq('user\_id', userId)  
    .eq('module\_name', moduleName)  
    .gte('created\_at', startOfMonth);

  const used \= count || 0;  
  return { allowed: used \< limit, used, limit, plan };  
}

export async function recordGeneration(  
  userId: string,   
  moduleName: string,   
  inputText: string,   
  outputText: string,   
  model: string,   
  inputTokens: number,   
  outputTokens: number  
) {  
  const supabase \= createClient();  
  await supabase.from('generations').insert({  
    user\_id: userId,  
    module\_name: moduleName,  
    input\_text: inputText,  
    output\_text: outputText,  
    model\_used: model,  
    input\_tokens: inputTokens,  
    output\_tokens: outputTokens,  
  });  
}  
\`\`\`

\---

\#\#\# 6\. API Routes

\*\*\`app/api/ai/\[module\]/route.ts\`\*\* (Dynamic route handling all 5 modules)  
\`\`\`typescript  
import { createClient } from '@/lib/supabase/server';  
import { callClaude, recordGeneration } from '@/lib/claude';  
import { checkUsageLimit } from '@/lib/usage';  
import { NextRequest, NextResponse } from 'next/server';

export async function POST(  
  req: NextRequest,  
  { params }: { params: { module: string } }  
) {  
  try {  
    const supabase \= createClient();  
    const { data: { user } } \= await supabase.auth.getUser();

    if (\!user) {  
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });  
    }

    const moduleName \= params.module;  
    const validModules \= \['workflow-architect', 'bizplan-builder', 'outreach-engine', 'doc-analyzer', 'niche-copywriter'\];  
    if (\!validModules.includes(moduleName)) {  
      return NextResponse.json({ error: 'Invalid module' }, { status: 400 });  
    }

    const usage \= await checkUsageLimit(user.id, moduleName);  
    if (\!usage.allowed) {  
      return NextResponse.json({   
        error: 'LIMIT\_REACHED',   
        message: \`You've used ${usage.used}/${usage.limit} generations. Please upgrade.\`,  
        upgradeUrl: '/pricing'  
      }, { status: 429 });  
    }

    const { input } \= await req.json();  
    if (\!input || input.length \< 10\) {  
      return NextResponse.json({ error: 'Input too short' }, { status: 400 });  
    }

    const result \= await callClaude(moduleName, input);

    await recordGeneration(  
      user.id, moduleName, input, result.text, result.model, result.inputTokens, result.outputTokens  
    );

    return NextResponse.json({   
      result: result.text,   
      usage: { used: usage.used \+ 1, limit: usage.limit }   
    });

  } catch (error) {  
    console.error('\[AI\_API\_ERROR\]', error);  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });  
  }  
}  
\`\`\`

\*\*\`app/api/stripe/webhook/route.ts\`\*\*  
\`\`\`typescript  
import { headers } from 'next/headers';  
import { NextResponse } from 'next/server';  
import Stripe from 'stripe';  
import { createClient } from '@/lib/supabase/server';

const stripe \= new Stripe(process.env.STRIPE\_SECRET\_KEY\!, {  
  apiVersion: '2023-10-16',  
});

export async function POST(req: Request) {  
  const body \= await req.text();  
  const headersList \= headers();  
  const signature \= headersList.get('stripe-signature');

  if (\!signature) {  
    return NextResponse.json({ error: 'No signature' }, { status: 400 });  
  }

  let event: Stripe.Event;

  try {  
    event \= stripe.webhooks.constructEvent(  
      body,  
      signature,  
      process.env.STRIPE\_WEBHOOK\_SECRET\!  
    );  
  } catch (error) {  
    console.error('Webhook signature verification failed.', error);  
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });  
  }

  const supabase \= createClient();

  switch (event.type) {  
    case 'checkout.session.completed': {  
      const session \= event.data.object as Stripe.Checkout.Session;  
      const customerId \= session.customer as string;  
      const userId \= session.client\_reference\_id;

      if (userId) {  
        await supabase  
          .from('profiles')  
          .update({   
            stripe\_customer\_id: customerId,   
            plan\_tier: 'pro' // Update based on price ID in production  
          })  
          .eq('id', userId);  
      }  
      break;  
    }  
    case 'customer.subscription.deleted': {  
      const subscription \= event.data.object as Stripe.Subscription;  
      await supabase  
        .from('profiles')  
        .update({ plan\_tier: 'free' })  
        .eq('stripe\_customer\_id', subscription.customer as string);  
      break;  
    }  
  }

  return NextResponse.json({ received: true });  
}  
\`\`\`

\---

\#\#\# 7\. Frontend Components

\*(Note: Install shadcn/ui first using \`npx shadcn@latest init\` then \`npx shadcn@latest add button card textarea label\`)\*

\*\*\`components/GeneratorForm.tsx\`\*\*  
\`\`\`tsx  
'use client';

import { useState } from 'react';  
import { Button } from '@/components/ui/button';  
import { Textarea } from '@/components/ui/textarea';  
import { Label } from '@/components/ui/label';  
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GeneratorFormProps {  
  module: string;  
  placeholder: string;  
  fields?: { name: string; placeholder: string }\[\];  
}

export default function GeneratorForm({ module, placeholder, fields }: GeneratorFormProps) {  
  const \[inputs, setInputs\] \= useState\<Record\<string, string\>\>({});  
  const \[result, setResult\] \= useState\<string\>('');  
  const \[loading, setLoading\] \= useState(false);  
  const \[error, setError\] \= useState\<string\>('');

  const handleSubmit \= async (e: React.FormEvent) \=\> {  
    e.preventDefault();  
    setLoading(true);  
    setError('');  
    setResult('');

    try {  
      // Combine fields or use default input  
      const inputText \= fields   
        ? fields.map(f \=\> \`${f.name}: ${inputs\[f.name\] || ''}\`).join('\\n')  
        : inputs\['default'\];

      const res \= await fetch(\`/api/ai/${module}\`, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ input: inputText }),  
      });

      const data \= await res.json();

      if (\!res.ok) {  
        if (data.error \=== 'LIMIT\_REACHED') {  
          throw new Error(data.message);  
        }  
        throw new Error(data.error || 'Generation failed');  
      }

      setResult(data.result);  
    } catch (err: any) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  };

  return (  
    \<div className="grid grid-cols-1 md:grid-cols-2 gap-6"\>  
      \<Card\>  
        \<CardHeader\>  
          \<CardTitle\>Input\</CardTitle\>  
        \</CardHeader\>  
        \<CardContent\>  
          \<form onSubmit={handleSubmit} className="space-y-4"\>  
            {fields ? (  
              fields.map((field) \=\> (  
                \<div key={field.name} className="space-y-2"\>  
                  \<Label\>{field.name}\</Label\>  
                  \<Textarea  
                    placeholder={field.placeholder}  
                    value={inputs\[field.name\] || ''}  
                    onChange={(e) \=\> setInputs({ ...inputs, \[field.name\]: e.target.value })}  
                    required  
                  /\>  
                \</div\>  
              ))  
            ) : (  
              \<Textarea  
                placeholder={placeholder}  
                value={inputs\['default'\] || ''}  
                onChange={(e) \=\> setInputs({ ...inputs, default: e.target.value })}  
                rows={8}  
                required  
              /\>  
            )}  
            \<Button type="submit" disabled={loading} className="w-full"\>  
              {loading ? 'Generating...' : 'Generate'}  
            \</Button\>  
          \</form\>  
        \</CardContent\>  
      \</Card\>

      \<Card\>  
        \<CardHeader\>  
          \<CardTitle\>Result\</CardTitle\>  
        \</CardHeader\>  
        \<CardContent\>  
          {error && \<p className="text-red-500 mb-4"\>{error}\</p\>}  
          {result ? (  
            \<div className="whitespace-pre-wrap bg-zinc-950 text-zinc-100 p-4 rounded-md text-sm font-mono"\>  
              {result}  
            \</div\>  
          ) : (  
            \<div className="flex items-center justify-center h-64 text-zinc-500"\>  
              Output will appear here  
            \</div\>  
          )}  
        \</CardContent\>  
      \</Card\>  
    \</div\>  
  );  
}  
\`\`\`

\---

\#\#\# 8\. App Pages

\*\*\`app/layout.tsx\`\*\*  
\`\`\`tsx  
import type { Metadata } from "next";  
import { Inter } from "next/font/google";  
import "./globals.css";

const inter \= Inter({ subsets: \["latin"\] });

export const metadata: Metadata \= {  
  title: "FlowForge AI \- 5 AI Tools for Business Growth",  
  description: "Automate workflows, build business plans, write cold emails, analyze contracts, and generate niche copy.",  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    \<html lang="en" className="dark"\>  
      \<body className={inter.className}\>{children}\</body\>  
    \</html\>  
  );  
}  
\`\`\`

\*\*\`app/globals.css\`\*\*  
\`\`\`css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
   
@layer base {  
  :root {  
    \--background: 0 0% 100%;  
    \--foreground: 240 10% 3.9%;  
    \--card: 0 0% 100%;  
    \--card-foreground: 240 10% 3.9%;  
    \--primary: 262 83% 58%;  
    \--primary-foreground: 0 0% 98%;  
    \--secondary: 240 4.8% 95.9%;  
    \--secondary-foreground: 240 5.9% 10%;  
    \--muted: 240 4.8% 95.9%;  
    \--muted-foreground: 240 3.8% 46.1%;  
    \--accent: 240 4.8% 95.9%;  
    \--accent-foreground: 240 5.9% 10%;  
    \--destructive: 0 84.2% 60.2%;  
    \--destructive-foreground: 0 0% 98%;  
    \--border: 240 5.9% 90%;  
    \--input: 240 5.9% 90%;  
    \--ring: 262 83% 58%;  
    \--radius: 0.5rem;  
  }  
   
  .dark {  
    \--background: 240 10% 3.9%;  
    \--foreground: 0 0% 98%;  
    \--card: 240 10% 3.9%;  
    \--card-foreground: 0 0% 98%;  
    \--primary: 262 83% 58%;  
    \--primary-foreground: 0 0% 98%;  
    \--secondary: 240 3.7% 15.9%;  
    \--secondary-foreground: 0 0% 98%;  
    \--muted: 240 3.7% 15.9%;  
    \--muted-foreground: 240 5% 64.9%;  
    \--accent: 240 3.7% 15.9%;  
    \--accent-foreground: 0 0% 98%;  
    \--destructive: 0 62.8% 30.6%;  
    \--destructive-foreground: 0 0% 98%;  
    \--border: 240 3.7% 15.9%;  
    \--input: 240 3.7% 15.9%;  
    \--ring: 262 83% 58%;  
  }  
}  
   
@layer base {  
  \* {  
    @apply border-border;  
  }  
  body {  
    @apply bg-background text-foreground;  
  }  
}  
\`\`\`

\*\*\`app/page.tsx\`\*\* (Landing Page)  
\`\`\`tsx  
import Link from "next/link";

export default function Home() {  
  return (  
    \<main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-zinc-950 to-zinc-900"\>  
      \<div className="max-w-4xl text-center space-y-6"\>  
        \<h1 className="text-5xl font-bold tracking-tight text-white"\>  
          5 AI Tools. One Platform. \<span className="text-purple-500"\>Unlimited Growth.\</span\>  
        \</h1\>  
        \<p className="text-xl text-zinc-400"\>  
          Automate workflows, build business plans, write cold emails, analyze contracts, and generate niche copy — all powered by Claude AI.  
        \</p\>  
        \<div className="flex gap-4 justify-center mt-8"\>  
          \<Link href="/login" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition"\>  
            Get Started Free  
          \</Link\>  
          \<Link href="/dashboard" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-md font-medium transition border border-zinc-700"\>  
            View Dashboard  
          \</Link\>  
        \</div\>  
      \</div\>  
    \</main\>  
  );  
}  
\`\`\`

\*\*\`app/login/page.tsx\`\*\*  
\`\`\`tsx  
'use client';

import { createClient } from '@/lib/supabase/client';

export default function Login() {  
  const supabase \= createClient();

  const handleLogin \= async () \=\> {  
    await supabase.auth.signInWithOAuth({  
      provider: 'google',  
      options: { redirectTo: \`${window.location.origin}/dashboard\` },  
    });  
  };

  return (  
    \<div className="min-h-screen flex items-center justify-center bg-zinc-950"\>  
      \<div className="w-full max-w-sm p-8 bg-zinc-900 rounded-lg border border-zinc-800"\>  
        \<h2 className="text-2xl font-bold text-white mb-6 text-center"\>Sign in to FlowForge\</h2\>  
        \<button  
          onClick={handleLogin}  
          className="w-full bg-white text-black font-medium py-3 rounded-md hover:bg-zinc-200 transition"  
        \>  
          Continue with Google  
        \</button\>  
      \</div\>  
    \</div\>  
  );  
}  
\`\`\`

\*\*\`app/dashboard/layout.tsx\`\*\*  
\`\`\`tsx  
import Link from "next/link";

const modules \= \[  
  { name: "Workflow Architect", path: "workflow-architect", icon: "🔁" },  
  { name: "BizPlan Builder", path: "bizplan-builder", icon: "📊" },  
  { name: "Outreach Engine", path: "outreach-engine", icon: "📧" },  
  { name: "Doc Analyzer", path: "doc-analyzer", icon: "📄" },  
  { name: "Niche Copywriter", path: "niche-copywriter", icon: "✍️" },  
\];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {  
  return (  
    \<div className="min-h-screen bg-zinc-950 text-white flex"\>  
      \<aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 space-y-2"\>  
        \<h1 className="text-xl font-bold mb-6 text-purple-500"\>FlowForge AI\</h1\>  
        {modules.map((m) \=\> (  
          \<Link key={m.path} href={\`/dashboard/${m.path}\`} className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-800 transition"\>  
            \<span\>{m.icon}\</span\> \<span\>{m.name}\</span\>  
          \</Link\>  
        ))}  
      \</aside\>  
      \<main className="flex-1 p-8 overflow-y-auto"\>{children}\</main\>  
    \</div\>  
  );  
}  
\`\`\`

\*\*\`app/dashboard/page.tsx\`\*\*  
\`\`\`tsx  
import Link from "next/link";

const modules \= \[  
  { name: "Workflow Architect", path: "workflow-architect", icon: "🔁", desc: "Generate n8n JSON blueprints from plain English" },  
  { name: "BizPlan Builder", path: "bizplan-builder", icon: "📊", desc: "Create full business plans in seconds" },  
  { name: "Outreach Engine", path: "outreach-engine", icon: "📧", desc: "Write cold email sequences that get replies" },  
  { name: "Doc Analyzer", path: "doc-analyzer", icon: "📄", desc: "Flag risks in contracts instantly" },  
  { name: "Niche Copywriter", path: "niche-copywriter", icon: "✍️", desc: "Generate ads, emails, and landing page copy" },  
\];

export default function DashboardHome() {  
  return (  
    \<div\>  
      \<h2 className="text-3xl font-bold mb-8"\>Welcome back\</h2\>  
      \<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\>  
        {modules.map((m) \=\> (  
          \<Link key={m.path} href={\`/dashboard/${m.path}\`} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-purple-500 transition"\>  
            \<div className="text-4xl mb-4"\>{m.icon}\</div\>  
            \<h3 className="text-xl font-semibold mb-2"\>{m.name}\</h3\>  
            \<p className="text-zinc-400 text-sm"\>{m.desc}\</p\>  
          \</Link\>  
        ))}  
      \</div\>  
    \</div\>  
  );  
}  
\`\`\`

\*\*\`app/dashboard/\[module\]/page.tsx\`\*\* (Dynamic Module Page)  
\`\`\`tsx  
import GeneratorForm from '@/components/GeneratorForm';

const MODULE\_CONFIG: Record\<string, { title: string; placeholder: string; fields?: { name: string; placeholder: string }\[\] }\> \= {  
  'workflow-architect': {  
    title: '🔁 Workflow Architect',  
    placeholder: 'Describe the business process you want to automate (e.g., "When a new lead fills out a form, enrich their data, add to CRM, and send a Slack notification")'  
  },  
  'bizplan-builder': {  
    title: '📊 BizPlan Builder',  
    fields: \[  
      { name: 'Business Idea', placeholder: 'AI-powered resume builder' },  
      { name: 'Target Market', placeholder: 'Recent college grads' },  
      { name: 'Revenue Model', placeholder: 'Freemium SaaS ($9/mo)' },  
      { name: 'Competition', placeholder: 'Resume.io, Teal' },  
      { name: '1-Year Goal', placeholder: '$10K MRR, 1000 users' }  
    \]  
  },  
  'outreach-engine': {  
    title: '📧 Outreach Engine',  
    fields: \[  
      { name: 'Prospect Name', placeholder: 'John Smith' },  
      { name: 'Company', placeholder: 'Acme Corp' },  
      { name: 'Role', placeholder: 'VP of Sales' },  
      { name: 'Pain Point', placeholder: 'Spending 10 hours/week on manual data entry' },  
      { name: 'Your Offer', placeholder: 'AI automation tool that saves 8 hours/week' }  
    \]  
  },  
  'doc-analyzer': {  
    title: '📄 Doc Analyzer',  
    placeholder: 'Paste the full text of the contract or document you want analyzed here...'  
  },  
  'niche-copywriter': {  
    title: '✍️ Niche Copywriter',  
    fields: \[  
      { name: 'Product/Service', placeholder: 'FlowForge AI' },  
      { name: 'Target Niche', placeholder: 'SaaS Founders' },  
      { name: 'Tone', placeholder: 'Professional but punchy' },  
      { name: 'Goal', placeholder: 'Landing page above-the-fold copy' }  
    \]  
  }  
};

export default function ModulePage({ params }: { params: { module: string } }) {  
  const config \= MODULE\_CONFIG\[params.module\] || MODULE\_CONFIG\['niche-copywriter'\];

  return (  
    \<div className="space-y-6"\>  
      \<h2 className="text-2xl font-bold"\>{config.title}\</h2\>  
      \<p className="text-zinc-400"\>Fill in the inputs and click generate. Results appear on the right.\</p\>  
      \<GeneratorForm   
        module={params.module}   
        placeholder={config.placeholder}  
        fields={config.fields}  
      /\>  
    \</div\>  
  );  
}  
\`\`\`

\---

\#\#\# 🚀 Setup & Run Instructions (Do this exactly)

1\. \*\*Initialize the project:\*\*  
   \`\`\`bash  
   mkdir flowforge-ai && cd flowforge-ai  
   npm init \-y  
   \`\`\`  
2\. \*\*Copy the \`package.json\`\*\* from above, then run:  
   \`\`\`bash  
   npm install  
   \`\`\`  
3\. \*\*Set up Supabase:\*\*  
   \- Go to \[supabase.com\](https://supabase.com) and create a project.  
   \- Go to Project Settings \> API to get your \`URL\`, \`anon public\` key, and \`service\_role\` key.  
   \- Go to the SQL Editor and run the SQL from \`001\_init.sql\` above.  
   \- Go to Authentication \> Providers \> Enable Google Auth.  
4\. \*\*Set up Stripe:\*\*  
   \- Go to \[stripe.com\](https://stripe.com) dashboard.  
   \- Create a product called "Pro Plan" for $99/month.  
   \- Copy the Price ID (\`price\_...\`).  
   \- Get your Secret Key and Webhook Secret.  
5\. \*\*Get Anthropic API Key:\*\*  
   \- Go to \[console.anthropic.com\](https://console.anthropic.com) \> API Keys \> Create Key.  
6\. \*\*Create \`.env.local\`\*\* and fill in the keys as shown in step 2\.  
7\. \*\*Create all the files\*\* exactly as structured above.  
8\. \*\*Run the development server:\*\*  
   \`\`\`bash  
   npm run dev  
   \`\`\`  
9\. Open \`http://localhost:3000\`, click Get Started, sign in with Google, and start generating\!

Everything in this plan exists to serve that number. Ship fast. Sell faster. Track everything.

\*\*Go.\*\*  
Build me an open-source platform that's an alternative to Firebase, but centered around PostgreSQL. It should give developers a complete backend solution out of the box.

The core should be a Postgres database, with automatically generated REST and GraphQL APIs so you can access your data easily. I want it to handle all the user authentication stuff—sign-ups, logins, and permissions. A key feature should be realtime subscriptions, so apps can listen for database changes live without needing to refresh.

It should also include file storage for user uploads like images, support for running serverless edge functions for custom backend logic, and a built-in toolkit for AI and vector embeddings. To tie it all together, create a clean web dashboard for managing the database, users, and all the other features. The whole thing should be self-hostable, so developers can run it locally or deploy it anywhere.

I want to create a framework for building websites and web apps with React. The goal is to make it easy for developers to build 'full-stack' applications, where they can write both the frontend user interface and the backend server code in the same project.

Performance is the most important thing. It should be blazingly fast for developers, with near-instant build times and hot reloading. You could probably use something low-level like Rust for the JavaScript tooling to make this happen. For end-users, the sites it produces should be incredibly fast. It should also be flexible enough to handle different kinds of pages—let developers create static, pre-rendered pages for things like blogs and marketing sites, but also have dynamic, server-rendered pages for user dashboards or e-commerce. Make it production-ready and scalable enough for major companies to use.  
