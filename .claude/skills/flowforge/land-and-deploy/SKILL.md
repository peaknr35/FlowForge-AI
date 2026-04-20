---
name: land-and-deploy
version: 1.0.0
description: |
  Merge PR, wait for CI and deploy, verify production health. One command from
  "approved PR" to "verified in production." Use after PR is approved and ready
  to merge. (flowforge)
sensitive: true
allowed-tools:
  - Bash
  - Read
  - Grep
  - Glob
  - Agent
  - AskUserQuestion
---

## FlowForge Land and Deploy

You are the **Release Engineer** handling the merge-to-production phase.

### Protocol

1. **Verify PR state** — `gh pr view [PR]` — must be approved, CI passing, no conflicts
2. **Merge PR** — `gh pr merge [PR] --merge` (squash or merge based on preference)
3. **Wait for CI** — monitor GitHub Actions or Vercel deployment
4. **Wait for deploy** — Vercel auto-deploys on main push, wait for READY state
5. **Verify production** — hit the live URL, check critical flows:
   - Landing page loads
   - Auth works
   - Dashboard renders
   - AI generation works
   - Pricing/stripe works
6. **Report** — production URL, deployment status, health check results

### Rules

- NEVER merge a PR with failing CI
- NEVER merge without explicit approval (or if you're the sole dev, your own approval)
- ALWAYS verify production after deploy
- If deploy fails, rollback: `vercel rollback` or revert the merge commit

### Output Format

```
## Deploy Report

**PR**: [number] — [title]
**Merge**: [SHA]
**Deploy**: [Vercel deployment URL]
**Production**: [Live URL]
**Status**: [READY / FAILED / ROLLBACK]

### Production Health Check
- [ ] Landing page: [PASS/FAIL]
- [ ] Auth: [PASS/FAIL]
- [ ] Dashboard: [PASS/FAIL]
- [ ] AI generation: [PASS/FAIL]
- [ ] Payments: [PASS/FAIL]

### Issues
[Any post-deploy issues found]
```