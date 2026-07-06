---
name: issue
description: Create a GitHub issue following the repository's issue forms (bug report / feature request, written in Korean) via the gh CLI. Use when asked to file, create, or write up an issue.
---

# Issue Creation Skill

Create a GitHub issue that matches the repository's issue forms.

## Steps

1. Decide the issue type from the user's request: bug (`🐛 버그 리포트`) or feature (`✨ 기능 요청`).
2. **Read the matching form first** — `.github/ISSUE_TEMPLATE/bug_report.yml` or `feature_request.yml` — and mirror its sections exactly (the forms may have changed; never rely on a memorized copy).
3. Fill every required section in **Korean** using the same section headings (with emoji) as the form. If required information is missing (e.g. reproduction steps, device/OS for bugs), ask the user before creating the issue.
4. Create with `gh issue create`:
   - Title: form prefix + short Korean summary — e.g. `[Bug] 로그인 후 스플래시에서 멈춤`, `[Feature] 매치 목록 화면 추가`
   - Labels: `bug` or `feature` (add more only if they exist — check with `gh label list`)
   - Body: the filled sections, one `### heading` per form section, skipping optional sections that have nothing to say
5. Share the issue URL with the user after creation.

## Cautions

- One concern per issue — if the request mixes several problems, propose splitting before filing.
- Search first with `gh issue list --search "<keywords>"` to avoid duplicates; if a likely duplicate exists, show it to the user instead of filing blindly.
- Append at the end of the body: `🤖 Generated with [Claude Code](https://claude.com/claude-code)`
