# Contributing

Clone the repository and create a branch from `main`. Git is sufficient for the current documentation-stage repository.

Run the same whitespace check used in pull request CI before opening a pull request. Fetch the latest base branch first.

```sh
git fetch origin main
git diff --check origin/main...HEAD
```

The command checks committed changes. Use `git diff --check` for unstaged changes and `git diff --cached --check` for staged changes.

In the pull request, describe the scope, the reason for the change, and what you verified. Link related issues and describe any open design decisions that affect the change.
