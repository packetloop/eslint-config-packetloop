module.exports = {
  plugins: [
    'react'
  ],
  rules: {
    // A bit more strictness for React
    'react/prefer-es6-class': [2, 'never'],
    'react/prefer-stateless-function': 2,
    'react/jsx-curly-spacing': [2, 'never', {allowMultiline: true}],
    'react/jsx-closing-bracket-location': [
      2, {selfClosing: 'after-props', nonEmpty: 'after-props'}
    ],
    'react/jsx-pascal-case': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-string-refs': 2,
    'react/no-multi-comp': 0
  }
};
