module.exports = {
  apps: [
    {
      name: 'workspace',
      script: './server/main.js',
      env: {
        PORT: 8000,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'workspace-client',
      script: './client/main.js',
      env: {
        PORT: 4200,
        NODE_ENV: 'production',
      },
    },
  ],
};
