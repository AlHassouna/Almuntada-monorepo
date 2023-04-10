import {commonEnv} from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: false,
  environmentName: "development",
  apiUrl: 'http://localhost:8000/api',
};

console.log("env dev", env)
export const environment = {...commonEnv, ...env};
