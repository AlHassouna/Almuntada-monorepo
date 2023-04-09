import {commonEnv} from "./environment.common";

const env: Partial<typeof commonEnv> = {};

export const environment = {...commonEnv, ...env};
