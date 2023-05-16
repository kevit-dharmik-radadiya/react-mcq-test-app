module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 0, // Remove Delete `␍` error
    'react/function-component-definition': [
      2,
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ], // Allow all type of function declaration and expression
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }], // Allow empty expression and fragment. Like, <>{foo}</>
    'no-param-reassign': ["error", { props: false }],
    'no-underscore-dangle': ["error", {
      allow: ['_id'],
      allowInObjectDestructuring: true,
      allowInArrayDestructuring: true
    }], // Allow _id. Like, item._id
    "react/jsx-props-no-spreading": ["error", {
      custom: 'ignore'
    }],
    "react-hooks/exhaustive-deps": 'warn', // Get rid of error and show error on hook
    'no-unneeded-ternary': ["error", { defaultAssignment: false }],
  },
};
