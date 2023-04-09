import {commonEnv} from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "production",
  apiUrl: 'https://almuntada.onrender.com/api',
};
export const environment = {...commonEnv, ...env};
