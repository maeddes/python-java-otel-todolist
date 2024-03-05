import {InjectionToken} from '@angular/core';

/**
 * Add all ENV variables that should be considered here!
 */
export type AppEnvConfig = {
  API_VERSION: string;
  API_URL: string;
};

export const AppEnvProvider = new InjectionToken<AppEnvConfig>(
  'app-env.config'
);
