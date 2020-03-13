const path = require('path');
const withOffline = require('next-offline');
const withImages = require('next-images');

const nextConfig = {
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
    config.resolve.alias.data = path.join(__dirname, 'src/data'); // eslint-disable-line no-param-reassign
    config.resolve.alias.hooks = path.join(__dirname, 'src/hooks'); // eslint-disable-line no-param-reassign
    config.resolve.alias.lib = path.join(__dirname, 'src/lib'); // eslint-disable-line no-param-reassign
    return config;
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ];
    },
  },
};

module.exports = withImages(withOffline(nextConfig));
