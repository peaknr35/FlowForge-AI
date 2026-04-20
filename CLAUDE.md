@AGENTS.md

# FlowForge AI — Skill Routing

When the user's request matches these patterns, invoke the corresponding FlowForge skill:

| User says | Invoke skill |
|-----------|-------------|
| "think bigger", "expand scope", "strategy review", "rethink this", "is this ambitious enough" | `/flowforge:plan-ceo-review` |
| "lock architecture", "technical plan", "eng review", "data flow", "edge cases" | `/flowforge:plan-eng-review` |
| "design review", "rate this design", "UX review", "detect AI slop" | `/flowforge:plan-design-review` |
| "review this code", "code review", "find bugs in this" | `/flowforge:review` |
| "debug this", "investigate", "root cause", "why is this broken" | `/flowforge:investigate` |
| "implement this", "code this feature", "build this" | `/flowforge:code` |
| "test this", "QA this", "does this work", "find bugs" | `/flowforge:qa` |
| "security audit", "scan for vulns", "CSO review", "OWASP" | `/flowforge:cso` |
| "ship this", "deploy", "create PR", "push to main" | `/flowforge:ship` |
| "merge and deploy", "land this PR", "verify production" | `/flowforge:land-and-deploy` |
| "canary", "post-deploy check", "monitor this deploy" | `/flowforge:canary` |
| "monitor the system", "watch for issues", "24/7 monitoring", "alert me" | `/flowforge:monitor` |