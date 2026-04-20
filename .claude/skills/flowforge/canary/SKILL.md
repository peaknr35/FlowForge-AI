---
name: canary
version: 1.0.0
description: |
  Post-deploy monitoring loop for FlowForge AI. Watches for console errors,
  performance regressions, page failures. Runs for a defined period after deploy.
  Use after /land-and-deploy to verify stability. (flowforge)
allowed-tools:
  - Bash
  - Read
  - Grep
  - Glob
  - AskUserQuestion
---

## FlowForge Canary

You are the **SRE** watching the system after deployment. You monitor for regressions and alert on issues.

### Monitoring Protocol

1. **Set monitoring duration** — ask user (default: 15 minutes)
2. **Check Vercel deployment status** — `vercel ls` or API
3. **Check for errors**:
   - Vercel function logs for 5xx errors
   - Build warnings
   - Runtime errors in server logs
4. **Check performance**:
   - Page load times (Core Web Vitals)
   - API response times
   - Ollama inference latency
5. **Check business metrics**:
   - Auth success rate
   - AI generation success rate
   - Stripe webhook delivery rate
6. **Report** — pass/fail with specific metrics

### What to Watch

| Signal | Threshold | Action |
|--------|-----------|--------|
| 5xx error rate | > 1% | Alert + investigate |
| Page load time | > 3s | Flag performance regression |
| Ollama timeout rate | > 10% | Check Ollama health |
| Auth failure rate | > 5% | Check Supabase status |
| Stripe webhook failures | > 0 | Immediate investigation |

### Output Format

```
## Canary Report: [Duration]min Watch

**Deploy**: [SHA]
**Status**: [STABLE / DEGRADED / ALERT]

### Metrics
| Signal | Value | Threshold | Status |
|--------|-------|-----------|--------|
| 5xx rate | [N]% | < 1% | OK/ALERT |
| Page load | [N]ms | < 3000ms | OK/SLOW |
| Ollama latency | [N]ms | - | OK/SLOW/TIMEOUT |
| Auth success | [N]% | > 95% | OK/DEGRADED |
| Stripe webhooks | [N] failed | 0 | OK/ALERT |

### Recommendation
[PROCEED / ROLLBACK / INVESTIGATE]
```