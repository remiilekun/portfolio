const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
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
});
