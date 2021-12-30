module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
  ],
  rules: {
  },
  overrides: [
    {
      files: ['**/vite.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
