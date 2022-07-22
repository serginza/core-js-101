module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-restricted-properties": [2, {
      "object": "disallowedObjectName",
      "property": "disallowedPropertyName"
    }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-restricted-globals": ["error", "event", "fdescribe"],
  },
};
