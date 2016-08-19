module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/packetloop'
  ].map(require.resolve),
  rules: {},
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
