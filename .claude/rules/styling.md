---
paths:
  - 'src/**/*.{tsx,css}'
---

# Styling Rules (StyleSheet + Theme Tokens)

- Static styles go through `StyleSheet.create` — never inline object literals in `style` for static styles. Web-only forks (`*.web.tsx`) may use CSS Modules (`*.module.css`) as the existing components do.
- Colors, spacing, and fonts come from the design tokens in `src/constants/theme.ts` — never hardcode hex colors or magic pixel values (`#ff0000`, `13`). Add a token instead.
- Reusable visual patterns become `components/ui` components, not copy-pasted style objects.
- Themed text/backgrounds use the existing `ThemedText`/`ThemedView` components and `use-theme`/`use-color-scheme` hooks — never assume a single color scheme; light/dark must both work.
- Prefer `gap` over margins between siblings.
- Formatting follows Prettier output — don't hand-sort or fight the formatter.
