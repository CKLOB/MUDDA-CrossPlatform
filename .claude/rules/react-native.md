---
paths:
  - 'src/**/*.tsx'
---

# React Native / Expo Rules

- Components are function declarations: `export function LoginForm() {}`. Default exports only where expo-router requires them (route files in `src/app/`).
- Component files are kebab-case (`login-form.tsx`); one component per file as a rule.
- Props: define a `Props` type per component (`type LoginFormProps = {...}`); destructure in the signature.
- Don't `useEffect` for derived state or data transformation — compute during render. Effects are for external system synchronization only.
- Client-only global state goes to **Zustand** stores in `src/store/` — never prop-drill app-wide state.
- Navigation uses expo-router primitives (`Link`, `router`, typed routes) — never reach for bare `react-navigation` APIs directly.
- Images use `expo-image` (`Image`), not RN's built-in `Image`.
- Respect safe areas via `react-native-safe-area-context` (`SafeAreaView`, `useSafeAreaInsets`) instead of hardcoded paddings.
- Animations use `react-native-reanimated` (worklets) — avoid the legacy `Animated` API for new code.
- This app targets **Android, iOS, and web**. Platform forks: prefer `Platform.select`/`Platform.OS` for small differences, `*.web.tsx`/`*.ios.tsx`/`*.android.tsx` file suffixes for diverging implementations (see `components/app-tabs.tsx` + `app-tabs.web.tsx`). New UI must work on all three platforms unless explicitly scoped.
- Avoid prop drilling more than 2 levels — restructure with composition (children) first, context only if that fails.
- Never use array index as `key` for dynamic lists.
- Long lists render with `FlatList` virtualization, never `ScrollView` + `map`.
