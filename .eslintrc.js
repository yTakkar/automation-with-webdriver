module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'globals': {
    'describe': true,
    'test': true,
    'it': true,
    'expect': true,
    'browser': true,
    '$': true
  },
  'rules': {
    'no-console': 'off',
    'no-ternary': 0,
    'no-nested-ternary': 0,
    'multiline-ternary': 0,
    'prettier/prettier': [
      'error', {
        singleQuote: true,
        trailingComma: 'es5'
      }
    ]
  }
}
