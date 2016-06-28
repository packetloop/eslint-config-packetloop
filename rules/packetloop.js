module.exports = {
  plugins: [
    'no-class'
  ],

  rules: {
    'no-underscore-dangle': 0,
    'global-require': 0,
    'object-curly-spacing': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'vars-on-top': 0,
    'no-console': 0,
    strict: 0,
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }],
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'no-unused-vars': [
      2, {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}
    ],


    // Imports
    'import/no-unresolved': [2, {ignore: ['^promise?']}],

    // No Classes, please
    'no-class/no-class': 2
  }
};
