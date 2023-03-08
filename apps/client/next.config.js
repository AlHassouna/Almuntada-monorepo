//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withNx} = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
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
    ignoreBuildErrors: true
  }
};

module.exports = withNx(nextConfig);
