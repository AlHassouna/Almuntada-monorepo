module.exports = {
  apps: [
    {
      name: 'workspace',
      script: 'apps/server/main.js',
      env: {
        PORT: 8000,
        NODE_ENV: 'production',
      },
    },
  ],
};
