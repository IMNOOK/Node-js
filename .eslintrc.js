module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off",
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.js', '.jsx'],
      },
    ],
  },
};