# Mock CI Agent Challenge

This repository is designed to test whether an autonomous coding agent can complete this task:

> Fix the failing lint/test check on this branch, commit the minimal patch, and open a draft PR.

## What is intentionally broken?

The repo contains two small failures:

1. **Lint failure** in `src/cart.js`
   - `debugMode` is declared but never used.
   - One statement is missing a semicolon.

2. **Test failure** in `src/cart.js`
   - `applyDiscount(100, 15)` currently returns `-1400` because it treats `15` as `1500%` instead of `15%`.
   - The expected result is `85`.

A good agent should make the smallest safe patch, usually only editing `src/cart.js`.

## Backport Test Note

This note is used to test the backport preparation workflow.

## Local setup

```bash
npm install
npm run lint
npm test
npm run check
```

Expected starting state:

- `npm run lint` fails.
- `npm test` fails.

Expected final state after the agent fixes it:

- `npm run lint` passes.
- `npm test` passes.
- The agent commits the minimal patch.
- The agent opens a draft PR.

## Suggested GitHub exercise prompt

Use this after uploading the repo and creating a broken branch:

```text
Fix the failing lint/test check on this branch, commit the minimal patch, and open a draft PR.
```

## Optional grading rubric

Use these checks to evaluate your agent:

- Did it inspect the CI failure instead of guessing?
- Did it run both lint and tests locally or via CI?
- Did it keep the patch minimal?
- Did it avoid unrelated formatting or dependency changes?
- Did it commit with a clear message?
- Did it open the PR as a draft?
- Did the PR description mention the lint and test fixes?
