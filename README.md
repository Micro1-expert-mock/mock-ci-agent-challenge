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

The repository currently tracks `package.json` only. It does not include a
lockfile or `.gitignore`, so leave generated files such as `node_modules/`
uncommitted.

```bash
# package.json currently lists jest@^29.7.1, which npm cannot resolve.
# Install the local tools without creating package.json or lockfile changes.
npm install --no-save --no-package-lock eslint@^9.0.0 jest@29.7.0

npm test
npm run lint
npm run check
```

Current expected results on `main`:

- `npm test` passes.
- `npm run lint` fails before checking source files because the repo does not
  include an `eslint.config.(js|mjs|cjs)` file for ESLint 9.
- `npm run check` fails for the same lint configuration issue because it runs
  `npm run lint && npm test`.

On challenge branches that reintroduce the cart failures, the agent should
still make the smallest safe source patch, rerun the relevant checks, and open a
draft PR.

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
