# MUDDA-CrossPlatform

Cross-platform (Android / iOS / Web) client built with Expo SDK 57 (expo-router) + React Native 0.86 + React 19 + TypeScript.
Client state via Zustand. Styling via `StyleSheet` + design tokens (`src/constants/theme.ts`); web forks may use CSS Modules.
OTA updates via expo-updates (EAS Update).

> **Expo HAS CHANGED.** Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## Commands

| Task               | Command                           |
| ------------------ | --------------------------------- |
| Dev server         | `npm start`                       |
| Run on Android     | `npm run android`                 |
| Run on iOS         | `npm run ios`                     |
| Run on Web         | `npm run web`                     |
| Lint               | `npm run lint`                    |
| Format             | `npm run format` / `format:check` |
| Type check         | `npm run typecheck`               |
| Unit tests         | `npm run test` (single run)       |
| Unit tests (CI)    | `npm run test:ci` (with coverage) |
| Unit tests (watch) | `npx jest --watch`                |

- Path alias `@/*` → `./src/*` (plus `@/assets/*` → `./assets/*`)
- The pre-commit hook (husky) runs ESLint/Prettier via lint-staged automatically; commit-msg runs commitlint.
- CI (GitHub Actions) runs lint, format check, typecheck, tests, expo-doctor, and a bundle export check on every PR; PR titles are validated against Conventional Commits.

## Project Structure

```
src/
├── app/         # expo-router file-based routes (screens live here)
├── components/  # Reusable components (components/ui: generic UI primitives)
├── constants/   # Design tokens, constants (theme.ts)
├── hooks/       # Shared hooks (use-theme, use-color-scheme, ...)
└── store/       # Zustand stores (client-only global state)
```

### Placement rules

1. Screens are expo-router route files in `src/app/`. Keep route files focused on screen composition — extract reusable pieces into `components/`.
2. Domain-agnostic UI primitives (button, collapsible, themed text) go to `components/ui/`; app-specific composites go to `components/`.
3. Client-only global state lives in Zustand stores under `src/store/`; never duplicate it inside components.
4. Platform-specific implementations use file suffixes (`*.web.tsx`, `*.ios.tsx`, `*.android.tsx`) next to the default file. New UI must work on Android, iOS, and web unless explicitly scoped.
5. Always use the `@/` alias for cross-directory imports; relative paths only within the same directory.

## Commit Convention

Format: `type: 짧은 한글 설명` — a single short subject line in Korean, nothing else (no body, no trailers). Split changes into logical units.

- Types: `feat` `fix` `refactor` `style` `test` `docs` `ci` `chore`
- Examples: `feat: 로그인 폼 추가`, `fix: CI 액션 버전 최신화`

**Never push unless the user explicitly asks.** Committing autonomously is fine.

## Branch Convention

- Branch off `develop`, named `type/short-kebab-description` — same types as commits.
- Examples: `feat/login-form`, `fix/splash-hang`, `ci/setup-github-actions`

## PR Convention

- Base branch: `develop` (fall back to `main` if absent)
- PR titles follow the commit convention (`type: 설명`) — CI enforces Conventional Commits on the title.
- **The PR template is mandatory**: always read `.github/PULL_REQUEST_TEMPLATE.md` and follow its structure exactly, written in Korean. Fill every applicable section; delete sections that don't apply. (If the template file doesn't exist yet, use the structure in the `/pr` skill.)
- Before opening a PR, verify locally: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run test:ci`.

## Testing

- Unit tests are colocated next to their target file as `*.test.ts(x)` (e.g. `src/store/useCounterStore.test.ts`)
- Jest (`jest-expo` preset); use React Native Testing Library for component tests

## Rules

Detailed conventions live in `.claude/rules/` and load automatically per file pattern:

- `typescript.md` — strict typing rules (no `any`, no `as`, no `enum`, ...)
- `react-native.md` — component structure, expo-router/RN idioms, cross-platform forks
- `styling.md` — theme token usage, no hardcoded values
- `testing.md` — Jest/Testing Library conventions
