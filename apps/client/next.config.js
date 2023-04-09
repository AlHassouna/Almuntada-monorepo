//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withNx} = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // testing
  distDir: '.next',
  nx: {
    svgr: false,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en', 'he'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withNx(nextConfig);
