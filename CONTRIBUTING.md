# Contributing to FlowForge AI

## Issues

1. Search existing issues before opening a new one.
2. Include a clear title, steps to reproduce, and expected vs. actual behavior.
3. Tag with the appropriate label (bug, feature, question).

## Pull Requests

1. Fork the repository and create a branch from `main`.
2. Make focused changes. One concern per PR.
3. Ensure `npm run lint` passes with no errors.
4. Ensure `npm run build` succeeds.
5. Write a clear PR description referencing any related issues.

## Code Style

- **TypeScript strict mode** -- no `any`, no implicit casts.
- **Immutable patterns** -- create new objects; do not mutate existing ones.
- **Files under 800 lines** -- if a file grows, extract utilities or submodules.
- **Functions under 50 lines** -- keep them focused and testable.
- **Error handling** -- handle errors explicitly at every level. No silent catches.
- **Naming** -- descriptive variables, no abbreviations unless domain-standard.
- **No hardcoded values** -- use constants or configuration.

## Commit Messages

Follow conventional commits:

```
<type>: <description>

feat: add contract risk scoring
fix: resolve email sequence ordering bug
refactor: extract shared validation utilities
docs: update API endpoint descriptions
test: add contract analyzer unit tests
chore: upgrade Next.js to 16.2.5
```

## Questions

Open an issue or contact peaknr35@gmail.com.