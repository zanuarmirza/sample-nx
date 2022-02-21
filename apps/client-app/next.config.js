// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSentryConfig } = require('@sentry/nextjs');
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sentry: {
    disableServerWebpackPlugin: process.env.DOT_SENTRY_RELEASE_ENABLE !== 'true',
    disableClientWebpackPlugin: process.env.DOT_SENTRY_RELEASE_ENABLE !== 'true',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.module = false;
    }
    return config;
  },
  images: {},
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
  debug: true,
  setCommits: {
    auto: true,
  },
};


const sentryModuleExport =
  process.env.DOT_SENTRY_RELEASE_ENABLE === 'true'
    ? withSentryConfig(nextConfig, SentryWebpackPluginOptions)
    : nextConfig;

module.exports = withBundleAnalyzer(withNx(sentryModuleExport));
