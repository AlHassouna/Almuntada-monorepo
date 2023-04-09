import {commonEnv} from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "development",
  apiUrl: 'http://localhost:8000/api',
};

export const environment = {...commonEnv, ...env};
