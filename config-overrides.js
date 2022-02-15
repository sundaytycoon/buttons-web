// TO-BE : 설정관련 확인 후 좀 더 건드려볼 것
// see https://github.com/timarney/react-app-rewired
module.exports = {
  webpack: function (config, env) {
    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },
  paths: function (paths, env) {
    return paths;
  },
};
