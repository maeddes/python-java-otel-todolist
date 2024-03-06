import {AppComponent} from "./app/app.component";
import {bootstrapApplication, BrowserModule, provideClientHydration} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {importProvidersFrom} from "@angular/core";
import {provideHttpClient, withFetch} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule
    ),
    provideHttpClient(),
    provideClientHydration(),
  ]
}).catch((err) =>
  console.error(err),
);
