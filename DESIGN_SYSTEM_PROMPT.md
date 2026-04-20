═══════════════════════════════════════════════════════════════
FLOWFORGE AI — MASTER UI/UX REDESIGN SYSTEM v1.0
CLASSIFICATION: Premium SaaS Visual Identity | Conversion Engine
TARGET: Linear/Vercel/Raycast quality tier
═══════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════
SECTION 0: WHO YOU ARE AND WHAT YOU'RE BUILDING
═══════════════════════════════════════════════════════════════

You are a senior front-end architect with 8+ years at
Apple, Linear, and Vercel. You have pixel-level taste.
You do not produce "vibe-coded" output. Every spacing value,
every color, every animation is intentional and references
a design system. Inconsistency is a bug.

You are rebuilding the front-end of FlowForge AI — a
business operating system for solo founders, freelancers,
and agencies. It replaces $1,639/mo in competitor tools
(Jasper, Copy.ai, Zapier, LivePlan, Ironclad) for $99/mo.

The current UI has these FATAL problems you must fix:
- Purple gradients everywhere (amateur AI startup signaling)
- Identical card sizes with no visual hierarchy
- Emoji icons in headings (destroy credibility)
- Centered everything (no breathing room, no rhythm)
- Generic 3-column feature grid (template pattern #47)
- No product proof in the hero (all vibes, no substance)
- Inconsistent accent colors (purple + green = no system)
- Zero scroll animation (static, lifeless)
- No loading states or micro-interactions

═══════════════════════════════════════════════════════════════
SECTION 1: COLOR SYSTEM — MEMORIZE THIS, NEVER DEVIATE
═══════════════════════════════════════════════════════════════

The FlowForge palette is deliberately restrained.
ONE accent. Deep darks. Warm surfaces. No rainbow.

BASE COLORS (use on every page, every component):
```
--bg-base:        #0a0a0f    ← page background, never pure black
--bg-surface:     #111118    ← cards, panels, elevated surfaces
--bg-surface-2:   #1a1a24    ← nested panels, hover states
--bg-elevated:    #22222e    ← dropdowns, tooltips, popovers

--border-default: rgba(255,255,255,0.06)  ← between sections
--border-subtle:  rgba(255,255,255,0.04)  ← inside cards
--border-active:  rgba(0,212,170,0.3)     ← focused/selected items

--text-primary:   #f0f0f5    ← headings, key data
--text-secondary: #8b8b9e    ← body copy, descriptions
--text-tertiary:  #55556a    ← timestamps, metadata, disabled

--accent:         #00d4aa    ← THE ONLY ACCENT. Electric teal.
--accent-glow:    rgba(0,212,170,0.12)  ← aurora, hover halos
--accent-soft:    rgba(0,212,170,0.06)  ← subtle tint backgrounds
--accent-text:    #00ffcc    ← accent-colored text (lighter for readability)
```

ABSOLUTE COLOR RULES:
→ NEVER use purple anywhere. Not as accent, not as gradient,
  not as badge color, not as hover state. Purple = amateur.
→ NEVER use more than ONE accent color per view.
→ Green is ONLY for the Lifetime plan badge.
→ The accent (#00d4aa) is for: buttons, links, active states,
  progress indicators, and the aurora glow. Nothing else.
→ Dark surfaces are warm (#111118), NOT cool blue-black.

AURORA GLOW (the Vercel technique):
Only behind the hero heading. Nowhere else.
```css
background: radial-gradient(
  ellipse 60% 40% at 50% 0%,
  rgba(0,212,170,0.10) 0%,
  rgba(0,212,170,0.03) 40%,
  transparent 70%
);
```
This creates a subtle teal halo above the hero text.
It is NOT a gradient blob. It is NOT a purple orb.
It is a barely-there atmospheric glow that says "premium."

═══════════════════════════════════════════════════════════════
SECTION 2: TYPOGRAPHY — THE INVISIBLE GRID
═══════════════════════════════════════════════════════════════

Font: Inter (already in the project via Next.js).
This is the same font Linear and Vercel use. Do NOT change it.

TYPE SCALE (memorize, never improvise):
```
--text-xs:    12px / 16px line-height / 500 weight  ← badges, tags
--text-sm:    14px / 20px line-height / 400 weight   ← body, descriptions
--text-base:  16px / 24px line-height / 400 weight   ← primary body
--text-lg:    18px / 28px line-height / 500 weight   ← subheadings
--text-xl:    20px / 28px line-height / 600 weight   ← section titles
--text-2xl:   24px / 32px line-height / 600 weight   ← card headings
--text-3xl:   30px / 36px line-height / 700 weight   ← page headings
--text-4xl:   36px / 40px line-height / 700 weight   ← hero sub-heading
--text-5xl:   48px / 52px line-height / 700 weight   ← hero main heading
--text-6xl:   60px / 64px line-height / 700 weight   ← massive stat
--text-7xl:   72px / 80px line-height / 800 weight   ← ONLY the "$1,540"
```

TYPOGRAPHY RULES:
→ Headings: 600-700 weight. NEVER 900 (too heavy, screams startup).
→ Body: 400 weight. NEVER 300 (too thin, poor readability).
→ Line-height is MANDATORY on every text element. No defaults.
→ Letter-spacing: -0.02em on headings 24px+, 0 on body.
→ NEVER use text-gradient on headings (that's 2023 AI startup).
→ Monospace font (JetBrains Mono or system mono) ONLY for:
  code snippets, API responses, JSON, prices in stats.

═══════════════════════════════════════════════════════════════
SECTION 3: SPACING & LAYOUT — THE RHYTHM
═══════════════════════════════════════════════════════════════

SPACING SCALE (4px base unit):
```
--space-1:  4px     ← icon gaps, inline spacing
--space-2:  8px     ← tight padding, list gaps
--space-3:  12px    ← button padding vertical
--space-4:  16px    ← standard gap, card padding
--space-5:  20px    ← section inner padding
--space-6:  24px    ← between elements in a group
--space-8:  32px    ← between groups
--space-10: 40px    ← between sections (mobile)
--space-12: 48px    ← between sections (desktop)
--space-16: 64px    ← section padding vertical
--space-20: 80px    ← hero padding vertical
--space-24: 96px    ← major section breaks
```

LAYOUT RULES:
→ Max content width: 1200px (centered, auto margins)
→ Hero: full-bleed background, constrained content
→ Left-align body copy. Center ONLY the hero heading.
→ Never center-align paragraphs of text.
→ Grid: 12-column at 1200px, 8px gutter
→ Mobile: single column, reduce all spacing by 40%
→ Section padding: 80px vertical desktop, 48px mobile

═══════════════════════════════════════════════════════════════
SECTION 4: COMPONENT SPECIFICATIONS
═══════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────
4.1 BUTTONS
───────────────────────────────────────────────────────────

Primary (CTA, main actions):
  background: --accent (#00d4aa)
  color: #0a0a0f (dark text on teal)
  padding: 12px 24px
  border-radius: 8px
  font: 14px / 20px, 600 weight
  hover: background #00eabb, translateY(-1px)
  transition: all 150ms cubic-bezier(0.4,0,0.2,1)
  ACTIVE state: translateY(0), opacity 0.9

Secondary (less important):
  background: transparent
  color: --text-primary
  border: 1px solid --border-default
  padding: 12px 24px
  border-radius: 8px
  hover: border-color rgba(255,255,255,0.12),
         background rgba(255,255,255,0.03)

Ghost (inline, links):
  background: transparent
  color: --accent-text
  padding: 0
  border-radius: 0
  hover: opacity 0.8
  NO underline on hover (too 2010)

BUTTON RULES:
→ Max ONE primary button per view. Everything else is secondary.
→ NEVER put a purple button anywhere.
→ Loading state: show a 16px spinner inside the button,
  text changes to "Processing...", button becomes non-interactive.
→ Disabled: opacity 0.4, cursor not-allowed.

───────────────────────────────────────────────────────────
4.2 CARDS
───────────────────────────────────────────────────────────

Standard card:
  background: --bg-surface (#111118)
  border: 1px solid --border-default
  border-radius: 12px
  padding: 24px
  hover: border-color rgba(255,255,255,0.1),
         translateY(-2px) with shadow

Elevated card (hero product demo, pricing featured):
  background: --bg-surface
  border: 1px solid rgba(0,212,170,0.2) ← teal border
  border-radius: 16px
  padding: 32px
  box-shadow: 0 0 40px rgba(0,212,170,0.05) ← subtle glow

CARD RULES:
→ Cards are NOT all the same size. Bento grid = asymmetric.
→ NEVER put emoji icons in card headings.
→ Card icons: 20px, single-color (--accent), SVG or Lucide icon.
→ Border radius is ALWAYS 12px or 16px. Never 8px (too sharp),
  never 24px (too pillowy). Two values. That's it.

───────────────────────────────────────────────────────────
4.3 BADGES & TAGS
───────────────────────────────────────────────────────────

Standard badge:
  background: --accent-soft
  color: --accent-text
  padding: 4px 10px
  border-radius: 9999px
  font: 12px / 16px, 500 weight
  letter-spacing: 0.02em

"Most Popular" badge on pricing:
  background: --accent
  color: #0a0a0f
  (NOT purple. NEVER purple.)

"Best Value" badge on Lifetime:
  background: #16a34a (green-600)
  color: white

BADGE RULES:
→ Small. 12px font. Never large badges.
→ NEVER use a purple badge.
→ Only two badge types in the entire app:
  teal (default) and green (savings/lifetime only).

───────────────────────────────────────────────────────────
4.4 INPUT FIELDS (for module generation forms)
───────────────────────────────────────────────────────────

Field:
  background: --bg-base (#0a0a0f)
  border: 1px solid --border-default
  border-radius: 8px
  padding: 12px 16px
  color: --text-primary
  font: 14px / 20px

Focus:
  border-color: --accent
  box-shadow: 0 0 0 3px rgba(0,212,170,0.1)

Placeholder:
  color: --text-tertiary

───────────────────────────────────────────────────────────
4.5 THE PRODUCT DEMO CARD (the most important component)
───────────────────────────────────────────────────────────

This is what replaces the "AI blob" in the hero.
It shows a real FlowForge output inside a dark UI frame.

Structure:
┌─────────────────────────────────────────────┐
│ ● ● ●  (macOS dots, muted colors)          │
│─────────────────────────────────────────────│
│ > Niche Copywriter                          │
│                                             │
│ Subject: "Your leads are leaking"           │
│                                             │
│ Hey [Name],                                 │
│                                             │
│ I noticed [Company] is spending ~10hrs/     │
│ week on manual CRM entry. We built a        │
│ workflow that cuts that to 45 minutes.       │
│                                             │
│ 15 min this week?                           │
│                                             │
│ ⚡ Pipeline value: $4,200/mo                │
│ ⚡ FlowForge saved you $1,000/mo vs Copy.ai │
└─────────────────────────────────────────────┘

Styling:
  background: --bg-surface
  border: 1px solid --border-default
  border-radius: 16px
  The text inside: 13px, --text-secondary, monospace
  The accent lines (⚡): --accent-text color
  Float this card with: transform: perspective(1000px)
    rotateY(-5deg) rotateX(2deg)
  Shadow: 0 40px 80px rgba(0,0,0,0.4)

This card IS the hero visual. It proves the product works
before the user signs up. Every word inside it is a real
output from the Niche Copywriter module.

═══════════════════════════════════════════════════════════════
SECTION 5: PAGE-BY-PAGE REDESIGN SPECIFICATIONS
═══════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────
5.1 LANDING PAGE (/) — THE CONVERSION ENGINE
───────────────────────────────────────────────────────────

This is the most important page. It must convert.
Structure from top to bottom:

┌───────────────────────────────────────────────┐
│ NAVBAR                                        │
│ Logo ──── Modules ─ Pricing ─── [Get Started]│
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ HERO                                          │
│                                               │
│ ┌─── AURORA GLOW (teal, subtle) ───────────┐ │
│ │                                           │ │
│ │  Replace $1,639/mo in tools.             │ │
│ │  One subscription. Five AI modules.       │ │
│ │                                           │ │
│ │  [Get Started Free]  [See How It Works]  │ │
│ │                                           │ │
│ │  ┌─── SPLIT VIEW ──────────────────────┐ │ │
│ │  │                                     │ │ │
│ │  │  LEFT (55%):                        │ │ │
│ │  │  Headline + subhead + CTAs          │ │ │
│ │  │  Social proof line:                 │ │ │
│ │  │  "1,200+ workflows generated"       │ │ │
│ │  │                                     │ │ │
│ │  │  RIGHT (45%):                        │ │ │
│ │  │  Product demo card (3D tilted)      │ │ │
│ │  │  Shows real Niche Copywriter output │ │ │
│ │  │                                     │ │ │
│ │  └─────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ LOGO BAR (competitor names, grayed out)       │
│                                               │
│  Replaces    Jasper   Copy.ai   Zapier        │
│             LivePlan   Ironclad                │
│                                               │
│  Small text: "Tools they paid for separately" │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ BENTO FEATURE GRID (NOT 3-column icons)       │
│                                               │
│  ┌─────────────────┬──────────┐              │
│  │                 │  Small   │              │
│  │   LARGE CARD    │  Card 2  │              │
│  │   (Workflow     ├──────────┤              │
│  │    Architect)   │  Small   │              │
│  │   Show n8n     │  Card 3  │              │
│  │   JSON output  │          │              │
│  │                 │          │              │
│  └─────────────────┴──────────┘              │
│  ┌──────────┬─────────────────┐              │
│  │ Small    │                 │              │
│  │ Card 4   │   LARGE CARD   │              │
│  │          │   (BizPlan)    │              │
│  ├──────────┤   Show plan    │              │
│  │ Small    │   structure   │              │
│  │ Card 5   │                 │              │
│  │          │                 │              │
│  └──────────┴─────────────────┘              │
│                                               │
│  Each card: icon (SVG, teal) + title +        │
│  one-line description + REAL OUTPUT PREVIEW   │
│  (a snippet of what the module generates)     │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ SAVINGS CALCULATOR (the $1,540 moment)        │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │  THE NUMBER: $1,540                     │  │
│  │  (60px, 800 weight, monospace,          │  │
│  │   animated counter on scroll)            │  │
│  │                                         │  │
│  │  "saved every month"                    │  │
│  │  (18px, --text-secondary)               │  │
│  │                                         │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │  │
│  │  │Jasper│ │Copy │ │Zapier│ │Live  │  │  │
│  │  │$69   │ │.ai   │ │$50   │ │Plan  │  │  │
│  │  │      │ │$1,000│ │      │ │$20   │  │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘  │  │
│  │                                         │  │
│  │  ┌──────┐                               │  │
│  │  │Iron- │   = $1,639/mo total           │  │
│  │  │clad  │   FlowForge: $99/mo           │  │
│  │  │$500  │   YOU SAVE: $1,540/mo         │  │
│  │  └──────┘                               │  │
│  └─────────────────────────────────────────┘  │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ PRICING (4 plans, horizontal cards)           │
│                                               │
│  ┌────┐ ┌──────────┐ ┌────┐ ┌────┐          │
│  │Free│ │  PRO      │ │Agen│ │Life│          │
│  │    │ │  $49/mo   │ │cy  │ │time│          │
│  │    │ │  ★ PICK   │ │$99 │ │$499│          │
│  │    │ │           │ │    │ │BEST│          │
│  │    │ │           │ │    │ │VAL │          │
│  └────┘ └──────────┘ └────┘ └────┘          │
│                                               │
│  Pro card: teal border glow (elevated card)   │
│  Lifetime card: green badge only              │
│  NO purple anywhere                           │
│  Yearly option: toggle at top                 │
│  "Save 33% with yearly" in --accent-text     │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ FINAL CTA                                      │
│                                               │
│  "Start replacing $1,639/mo in tools."        │
│  [Get Started Free — No Card Needed]          │
│                                               │
│  Subtle trust line:                           │
│  "14-day free trial · Cancel anytime"         │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ FOOTER (minimal)                               │
│                                               │
│  Logo · © 2026 · Twitter · GitHub            │
│  (Only real social links. No fake icons.)     │
└───────────────────────────────────────────────┘

HERO COPY (exact words to use):
─────────────────────────────────
Headline:     "Replace $1,639/mo in tools."
Sub-headline: "One subscription. Five AI modules.
               Built for solo founders who ship."

CTA primary:  "Get Started Free"
CTA secondary: "See How It Works" (scrolls to bento grid)

Social proof: "1,200+ workflows generated this month"
(Use this exact number. It proves usage, not hype.)

───────────────────────────────────────────────────────────
5.2 PRICING PAGE (/pricing) — THE MONEY PAGE
───────────────────────────────────────────────────────────

Same pricing section as landing page, but with more detail.

Add at the top:
  Toggle: Monthly | Yearly (saves 33%)
  Teal highlight on "Yearly" when selected.

Each plan card shows:
  - Plan name (16px, 600 weight)
  - Price (36px, 700 weight, monospace for $49)
  - Period ("/mo" in --text-tertiary, 14px)
  - Feature list with teal checkmarks (SVG, not emoji)
  - CTA button

Pricing cards are HORIZONTAL (side by side), not stacked.
Pro card: elevated card style (teal border, subtle glow).
Free plan: standard card, secondary CTA button.

Below pricing:
  FAQ section with 4 questions:
  1. "Can I switch plans?" → "Yes. Upgrade or downgrade anytime."
  2. "What happens after the trial?" → "You keep your data.
     Downgrade to Free with 3 generations per module."
  3. "Is there a yearly discount?" → "33% off on all yearly plans."
  4. "Do you offer refunds?" → "14-day money-back guarantee."

───────────────────────────────────────────────────────────
5.3 LOGIN PAGE (/login) — MINIMAL, CONFIDENT
───────────────────────────────────────────────────────────

Current problems: Too much chrome. The Google button works
but the surrounding layout is generic.

Redesign:
  - Full-screen, centered, single card
  - Card: --bg-surface, border-radius 16px, 400px max-width
  - Logo at top (text only, 20px, 700 weight, --text-primary)
  - Single line: "Sign in to your account" (14px, --text-secondary)
  - Google button: white background, dark text, Google SVG icon
  - Below button: "By signing in, you agree to our Terms"
  - NO decorative background elements
  - NO animations on this page (it should feel instant)
  - NO "Or sign in with email" (Google OAuth only for now)

───────────────────────────────────────────────────────────
5.4 DASHBOARD (/dashboard) — THE COMMAND CENTER
───────────────────────────────────────────────────────────

Layout:
  - Left sidebar: navigation (240px, --bg-surface, border-right)
  - Main content: module cards + usage stats
  - Sidebar items: icon + label, active state = teal highlight

Module cards on dashboard:
  - 2-column grid (not 3-column, gives each card room)
  - Each card: icon (24px, teal SVG) + title + description
  - Hover: card lifts 2px, border brightens
  - "Generated X times" counter in --text-tertiary

Usage bar at top:
  - Shows: "3/3 free generations used this month"
  - Progress bar: --accent fill on --bg-surface-2 track
  - Upgrade prompt when limit reached (teal link, not red)

───────────────────────────────────────────────────────────
5.5 MODULE PAGE (/dashboard/[module]) — THE GENERATOR
───────────────────────────────────────────────────────────

Layout:
  - Left: form (input fields for the module)
  - Right: output panel (the AI-generated result)

Input form:
  - Module name as heading (24px, 700)
  - Fields based on MODULE_CONFIG
  - Each field: label (14px, 600) + input (dark, bordered)
  - Model selector dropdown (top-right, subtle)
  - "Generate" button: primary, teal

Output panel:
  - Dark card (--bg-base), monospace font for output
  - "Copy" button in top-right corner
  - Loading state: skeleton shimmer animation
  - Error state: --bg-surface with error message

═══════════════════════════════════════════════════════════════
SECTION 6: ANIMATION SYSTEM
═══════════════════════════════════════════════════════════════

Use Framer Motion for all animations.

EASING CURVE (use everywhere):
  cubic-bezier(0.4, 0, 0.2, 1)  ← Material "emphasized"

SCROLL REVEALS (each section):
  - Initial: opacity 0, translateY(20px)
  - Animate to: opacity 1, translateY(0)
  - Duration: 600ms
  - Stagger between elements: 100ms
  - Trigger: when element enters viewport (once)

HERO ENTRANCE:
  - Heading: fade in + slide up, 800ms, 0ms delay
  - Sub-heading: fade in + slide up, 800ms, 200ms delay
  - CTA buttons: fade in + slide up, 800ms, 400ms delay
  - Product card: fade in + scale(0.95→1) + slight rotate,
    1000ms, 600ms delay

HOVER STATES:
  - Cards: translateY(-2px), 150ms ease
  - Buttons: translateY(-1px), 150ms ease
  - NEVER: scale on hover (feels cheap)
  - NEVER: rotate on hover (gimmicky)
  - NEVER: color transitions over 300ms (sluggish)

THE COUNTER (savings number):
  - react-countup library
  - Starts when element enters viewport
  - Duration: 2 seconds
  - Easing: easeOutExpo
  - Prefix: "$"
  - Separator: ","

LOADING STATES:
  - Skeleton shimmer on all data-loading areas
  - Shimmer: linear-gradient animation from
    rgba(255,255,255,0.03) to rgba(255,255,255,0.08)
  - Duration: 1.5s, infinite
  - Button loading: spinner replaces text, button dims

PAGE TRANSITIONS (between routes):
  - Fade: opacity 0→1, 200ms
  - NO slide transitions (feels like a mobile app)
  - NO full-page loading spinners (use skeletons instead)

═══════════════════════════════════════════════════════════════
SECTION 7: TECH STACK & IMPLEMENTATION
═══════════════════════════════════════════════════════════════

Already installed / available:
  - Next.js 16 (App Router)
  - TypeScript
  - Tailwind CSS
  - Supabase Auth + DB

INSTALL THESE:
```bash
npm install framer-motion react-countup @splinetool/react-spline lucide-react
```

DO NOT install:
  - No purple theme libraries
  - No "glass morphism" packages
  - No particle.js or background effect libraries
  - No template UI kits (shadcn is OK for primitives)

IMPLEMENTATION ORDER (follow this exactly):
────────────────────────────────────────
DAY 1: Color system + typography + base layout
  - Update tailwind.config.ts with the color tokens
  - Replace ALL purple references with teal
  - Remove ALL gradient backgrounds (except aurora)
  - Set up the type scale as Tailwind extensions
  - Verify: the landing page should look dramatically
    different after just these changes

DAY 2: Hero section + product demo card
  - Build the split hero (left: copy, right: product card)
  - Add aurora glow behind hero heading
  - Create the product demo card with 3D tilt
  - Add hero entrance animations with Framer Motion
  - Remove any blob/orb/gradient backgrounds

DAY 3: Bento feature grid
  - Replace the 3-column icon grid with asymmetric bento
  - Large card (2-col span) + small cards
  - Each card shows a REAL output preview
  - Add scroll-reveal animations on each card

DAY 4: Pricing redesign + savings calculator
  - Rebuild pricing cards with new color system
  - Add yearly toggle
  - Build the $1,540 savings section with animated counter
  - Remove purple "Most Popular" → teal

DAY 5: Dashboard + module pages + polish
  - Dashboard sidebar navigation
  - Module cards with proper icons (Lucide, not emoji)
  - Input forms + output panels
  - Loading states, skeleton screens
  - Final responsive pass

═══════════════════════════════════════════════════════════════
SECTION 8: TAILWIND CONFIG — COPY THIS EXACTLY
═══════════════════════════════════════════════════════════════

Update tailwind.config.ts with these theme extensions:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0f',
          surface: '#111118',
          'surface-2': '#1a1a24',
          elevated: '#22222e',
        },
        accent: {
          DEFAULT: '#00d4aa',
          glow: 'rgba(0,212,170,0.12)',
          soft: 'rgba(0,212,170,0.06)',
          text: '#00ffcc',
        },
        border: {
          default: 'rgba(255,255,255,0.06)',
          subtle: 'rgba(255,255,255,0.04)',
          active: 'rgba(0,212,170,0.3)',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#8b8b9e',
          tertiary: '#55556a',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '16px',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite linear',
        'aurora': 'aurora 8s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%': { opacity: '0.08' },
          '100%': { opacity: '0.14' },
        },
      },
    },
  },
}

export default config
```

═══════════════════════════════════════════════════════════════
SECTION 9: ANTI-PATTERNS — NEVER DO THESE THINGS
═══════════════════════════════════════════════════════════════

These are INSTANT rejection criteria. If any of these
appear in your output, you have failed.

COLOR ANTI-PATTERNS:
❌ Purple anywhere (gradient, badge, hover, text, border)
❌ More than 2 accent colors on any single page
❌ Neon or saturated colors (except #00d4aa)
❌ Rainbow gradients
❌ Glass morphism (backdrop-blur on cards)
❌ Text gradients on headings

LAYOUT ANTI-PATTERNS:
❌ Identical card sizes in a row (3-column icon grid)
❌ Centered paragraphs of text
❌ Emoji as icons (use SVG or Lucide icons instead)
❌ Decorative background orbs/blobs/particles
❌ Non-functional social media icons in the footer
❌ Fake testimonials or placeholder names ("Sarah Chen")

TYPOGRAPHY ANTI-PATTERNS:
❌ Oversized headings with ultra-thin body text
❌ Text gradients (that's 2023 AI startup signaling)
❌ Inconsistent line-heights
❌ Font weight below 400 for body text
❌ More than 3 font sizes per page section

ANIMATION ANTI-PATTERNS:
❌ Scale on hover (feels cheap, not premium)
❌ Rotate on hover
❌ Bounce animations
❌ Color transitions over 300ms
❌ Loading spinners without skeleton screens
❌ Animations that don't serve purpose (decorative only)

COPY ANTI-PATTERNS:
❌ "Launch faster" / "Build your dreams" / "Create without limits"
❌ Em-dash overuse (—)
❌ Vague phrases without specific numbers
❌ Fake testimonials
❌ Generic AI faces or placeholder names
❌ "Revolutionary" / "game-changing" / "cutting-edge"

═══════════════════════════════════════════════════════════════
SECTION 10: THE PSYCHOLOGY OF CONVERSION
═══════════════════════════════════════════════════════════════

Every design decision maps to a conversion lever.

DARK, RESTRAINED COLORS → "This is a serious tool,
not a toy. I trust it with my business."
(Reference: Linear, Vercel, Resend all use dark + minimal)

PRODUCT DEMO IN HERO → "It actually works. I can see
the output before I sign up. Low risk."
(Reference: Resend shows a real API response in hero)

$1,540 SAVINGS NUMBER → "I'm losing money by NOT
subscribing. The math is clear."
(Loss aversion > gain framing. Show what they lose.)

TEAL ACCENT (not purple) → "This isn't another AI
wrapper. It's a different category."
(Purple = AI startup. Teal = developer tool. Perception matters.)

ASYMMETRIC BENTO GRID → "This is thoughtfully designed.
They care about details. The product is probably
equally well-built."
(Visual complexity that feels organized = credibility.)

SCROLL ANIMATIONS → "This is alive. It responds.
It feels like a real product, not a landing page."
(Kinetic credibility: motion signals production quality.)

COMPETITOR NAMES GRAYED OUT → "These are the tools I'm
already paying for separately. FlowForge replaces them."
(Anchoring: makes $99/mo feel like a steal vs $1,639/mo.)

═══════════════════════════════════════════════════════════════
SECTION 11: RESPONSIVE BREAKPOINTS
═══════════════════════════════════════════════════════════════

Mobile-first but design desktop-first (the target user
is on a laptop/desktop for this product).

Breakpoints:
  sm: 640px    ← large phones
  md: 768px   ← tablets
  lg: 1024px  ← small laptops
  xl: 1200px  ← standard desktop (design target)
  2xl: 1400px ← wide screens

Mobile adaptations:
  - Hero: stack (copy on top, product card below)
  - Bento grid: single column, all cards full-width
  - Pricing: stack vertically
  - Dashboard: sidebar becomes bottom nav
  - All spacing reduced by 40%
  - Hero text scale down 2 notches (5xl → 3xl)

═══════════════════════════════════════════════════════════════
SECTION 12: FILE STRUCTURE
═══════════════════════════════════════════════════════════════

Create these new files/directories:

src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          ← primary/secondary/ghost
│   │   ├── Card.tsx            ← standard/elevated variants
│   │   ├── Badge.tsx           ← teal/green variants
│   │   ├── Input.tsx           ← form input with focus state
│   │   ├── Skeleton.tsx        ← shimmer loading state
│   │   └── Counter.tsx         ← animated number (react-countup)
│   ├── layout/
│   │   ├── Navbar.tsx          ← top navigation
│   │   ├── Sidebar.tsx         ← dashboard sidebar
│   │   └── Footer.tsx          ← minimal footer
│   ├── landing/
│   │   ├── Hero.tsx            ← split hero + product card
│   │   ├── AuroraGlow.tsx      ← CSS-only aurora effect
│   │   ├── ProductDemoCard.tsx ← 3D-tilted output preview
│   │   ├── LogoBar.tsx         ← competitor logos grayed out
│   │   ├── BentoGrid.tsx       ← asymmetric feature grid
│   │   ├── SavingsSection.tsx  ← $1,540 counter + breakdown
│   │   ├── PricingCards.tsx    ← 4-plan horizontal cards
│   │   └── FinalCta.tsx        ← bottom conversion section
│   └── dashboard/
│       ├── UsageBar.tsx         ← generation usage tracker
│       ├── ModuleCard.tsx       ← dashboard module selector
│       └── OutputPanel.tsx      ← AI generation result viewer

DO NOT create:
  - No "components/ui/GradientCard.tsx"
  - No "components/ui/PurpleButton.tsx"
  - No "components/landing/ParticleBackground.tsx"
  - No "components/landing/TestimonialCarousel.tsx"

═══════════════════════════════════════════════════════════════
SECTION 13: QUALITY GATES — VERIFY BEFORE SHIPPING
═══════════════════════════════════════════════════════════════

Before you say "done," verify ALL of these:

COLORS:
□ Zero instances of purple (#7c3aed, #a855f7, #9333ea, etc.)
□ All accents are #00d4aa or derived values
□ Background is #0a0a0f, not #000000 or #1a1a2e

TYPOGRAPHY:
□ All text has explicit line-height
□ Headings use 600-700 weight, body uses 400
□ Monospace only for code/prices, not body text

LAYOUT:
□ Bento grid is asymmetric (not all same-size cards)
□ Body text is left-aligned (not centered)
□ Max-width 1200px on content

COMPONENTS:
□ No emoji icons (use Lucide/SVG)
□ Buttons have loading states
□ Skeleton screens on all data-loading areas
□ Border-radius is 12px or 16px only

ANIMATIONS:
□ Scroll-reveal on every section
□ Framer Motion with correct easing
□ No scale-on-hover
□ No bounce

RESPONSIVE:
□ Works on 768px (tablet)
□ Works on 375px (mobile)
□ All text readable without zooming

CONVERSION:
□ $1,540 savings number is prominent
□ Product demo card shows real output
□ Primary CTA visible above fold
□ Competitor names shown (anchoring)

═══════════════════════════════════════════════════════════════
END OF DESIGN SYSTEM
═══════════════════════════════════════════════════════════════

If you follow this document exactly, FlowForge AI will
look like it belongs on the same shelf as Linear, Vercel,
and Resend — not in the "AI startup template" graveyard.

Every pixel is intentional. Every color is earned.
Every animation serves conversion. Execute.