const path = require('path');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }
    config.resolve.alias.components = path.join(__dirname, 'src/components'); // eslint-disable-line no-param-reassign
    return config;
  },
};
