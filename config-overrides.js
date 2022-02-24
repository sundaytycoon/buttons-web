/* eslint-disable no-unused-vars */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

// TO-BE : 설정관련 확인 후 좀 더 건드려볼 것
// see https://github.com/timarney/react-app-rewired

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
  })
);