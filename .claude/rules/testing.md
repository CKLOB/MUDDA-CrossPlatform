---
paths:
  - '**/*.test.{ts,tsx}'
---

# Testing Rules (Jest + React Native Testing Library)

- Colocate tests next to their target file as `*.test.ts(x)` (e.g. `src/store/useCounterStore.test.ts`).
- Test user-visible behavior, not implementation details. Query by role/text (`getByRole`, `getByText`) — `testID` only when there's no accessible alternative.
- Use `userEvent` from `@testing-library/react-native` for interactions, not bare `fireEvent`, when the interaction has a userEvent equivalent.
- Structure: `describe` per component/function, `it` names state the expected behavior in plain English.
- Run with `npm run test` (single run) or `npx jest --watch`; CI runs `npm run test:ci` (with coverage).
- New features and bug fixes ship with tests; a bug fix starts with a failing test that reproduces it.
- Zustand stores are module-level singletons — reset store state in `beforeEach` (see `useCounterStore.test.ts`) so tests stay independent.
- Mock native modules with `jest.mock` in a shared setup file, not ad-hoc copies per test file.
