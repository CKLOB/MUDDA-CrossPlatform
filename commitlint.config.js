module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Subjects are written in Korean and often include mixed-case proper
    // nouns (GitHub Actions, EAS, Zustand), which trip the Latin-script
    // case heuristics in this rule.
    'subject-case': [0],
  },
};
