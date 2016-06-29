module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/packetloop',
    './rules/react'
  ].map(require.resolve),
  rules: {},
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
};
