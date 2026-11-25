# Contributing

Clone the repository and create an English-named branch from `main`. Use Node.js 26 (the version in `.nvmrc`) and the pnpm version pinned in `package.json`. If you use nvm, run `nvm install` to select the project version.

Install dependencies from the lockfile and run the checks for your change.

```sh
pnpm install --frozen-lockfile
pnpm run format
pnpm run lint
pnpm run typecheck
pnpm run test
```

Each command runs independently as a separate CI job. Type checking uses TypeScript, formatting and linting use Biome, and tests use Vitest.

TypeScript checks the test configuration and any TypeScript files under `src/` and `tests/`. Vitest allows an empty suite until the first product tests are added.

In the pull request, describe the scope, the reason for the change, and what you verified. Link related issues and describe any open design decisions that affect the change.
