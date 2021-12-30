module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // devDependenciesのimportを許可
      },
    ],
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
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
