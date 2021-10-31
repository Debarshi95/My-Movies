module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    amd: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.{js,jsx}', '**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'] },
    ],
  },
};
