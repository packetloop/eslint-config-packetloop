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
    'no-mixed-operators': 0,
    'operator-assignment': [2, 'never'],


    // Imports
    'import/no-unresolved': [2, {ignore: ['^promise?']}],
    // TODO: switch on
    'import/imports-first': 0,
    // TODO: switch on
    'import/newline-after-import': 0,
    // TODO: switch on
    'import/order': [
      0, {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,


    // No Classes, please
    'no-class/no-class': 2
  }
};
