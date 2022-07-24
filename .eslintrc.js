module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
  ],
  ignorePatterns: ['**/types/*.d.ts'],
  rules: {
    // http://eslint.org/docs/rules/
    'max-len': 'off',
    'object-curly-newline': 'off',
    curly: ['error', 'all'],
    'no-underscore-dangle': ['error', {allow: ['__typename']}],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['..*'],
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'vapour/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'app/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': ['off'],
    'react/button-has-type': 'off',
    'class-methods-use-this': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    // allowing nesting of input without id attribute inside a label
    'jsx-a11y/label-has-associated-control': ['error', {assert: 'nesting'}],

    // https://github.com/testing-library/eslint-plugin-testing-library#supported-rules
    'testing-library/await-async-query': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-explicit-assert': ['error', {assertion: 'toBeInTheDocument', includeFindQueries: true}],
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/render-result-naming-convention': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
