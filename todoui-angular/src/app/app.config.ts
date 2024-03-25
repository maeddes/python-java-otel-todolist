import {APP_INITIALIZER, ApplicationConfig, Injector} from '@angular/core';

import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withComponentInputBinding, withViewTransitions,} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {AppEnvConfig, AppEnvProvider} from './app-env.provider';
import {environment} from '../environments/environment';

/**
 * Workaround to ensure the {@link AppEnvProvider} is also provided if the execution server is local development instead of SSR.
 */
const loadEnvForDevelopment = (injector: Injector): AppEnvConfig => {
  if (!environment.production) {
    return {
      API_VERSION: 'DEV-local',
      API_URL: 'http://localhost:8080',
    }
  }
  // TODO: fix fallback values
  return injector.get(AppEnvProvider) || {}
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // 👈 to enable e.g. auth intercepting
    provideRouter(
      appRoutes, // 👈 define routes here
      withComponentInputBinding(), // 👈 enables the possibility to access query or path variables on the component using `input()` or `@Input()`
      withViewTransitions(), // 👈 to enable smoother page transition on routing actions (uses transition API)
      // withDebugTracing(), // 👈 enables full routing traces. Should be turned off if it is not needed.
    ),
    provideAnimationsAsync(), // enables async loaded animations, to speed up transitions...
    provideClientHydration(), // enables SSR hydration
    // FIXME: seems like it is mandatory for the build to have it in here once
    {provide: AppEnvProvider, useFactory: loadEnvForDevelopment, deps: [Injector]},
    {
      // Just a hook to run a console log on the Browser to show all provided values for `AppEnvProvider`
      provide: APP_INITIALIZER,
      useFactory: (appEnvProvider: typeof AppEnvProvider) => console.info('Print injector', {
        AppEnvProvider: appEnvProvider
      }),
      deps: [AppEnvProvider]
    }
  ],
};
