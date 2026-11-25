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

## Issues

Write issues in English, use a descriptive title, and search for an existing issue before opening a new one. Keep each issue focused on one problem or proposal.

- For a bug, include the version or commit, relevant environment details, the smallest reproduction you can share, and the expected and observed behavior.
- For a feature, explain the user's goal, the problem with the current workflow, and the result that would satisfy the request. Include a proposed approach if you have one.

## Pull requests

Write the title and description in English. Use the commit header format below for the title. Keep the change focused and use the PR template to describe what changed, why, and how you verified it. Report the commands you ran, their results, and any verification gaps. Link related issues and describe any open design decisions that affect the change.

Use `Closes #123` when the PR fully resolves an issue and `Refs #123` for related work. If you squash merge, use the PR title as the squash commit header.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with an optional scope. Write a short English summary that starts with a lowercase imperative verb and omits the trailing period.

```text
<type>(<scope>): <summary>
```

| Type       | Use                                            |
| ---------- | ---------------------------------------------- |
| `feat`     | New functionality                              |
| `fix`      | Bug fix                                        |
| `docs`     | Documentation changes                          |
| `refactor` | Internal restructuring that preserves behavior |
| `perf`     | Performance improvement                        |
| `test`     | Test changes                                   |
| `build`    | Build tooling or dependency changes            |
| `ci`       | CI configuration or automation                 |
| `chore`    | Other repository maintenance                   |

Use a scope when it identifies an affected area, such as `cli` or `github`. Add a body when the reasoning needs more context. For breaking changes, add `!` before the colon and use a `BREAKING CHANGE:` footer to explain the impact and migration.

```text
fix(cli): report invalid configuration paths
ci: run verification jobs independently
```
