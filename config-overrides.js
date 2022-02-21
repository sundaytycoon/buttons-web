/* eslint-disable no-unused-vars */
// TO-BE : 설정관련 확인 후 좀 더 건드려볼 것
// see https://github.com/timarney/react-app-rewired
module.exports = {
  webpack(config, env) {
    return config;
  },
  jest(config) {
    return config;
  },
  devServer(configFunction) {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },
  paths(paths, env) {
    return paths;
  },
};
