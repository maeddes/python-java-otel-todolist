import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppEnvProvider } from './app-env.provider';

@Component({
  selector: 'app-root',
  template: `
    <pre class="api-version">The API URL is: {{ apiVersion() }}</pre>
    <router-outlet />
  `,
  imports: [RouterOutlet],
  standalone: true,
  styles: `
    .api-version {
      position: absolute;
      right: 0;
      bottom: 0;

      font-size: 0.8rem;
      padding: 1rem;
    }
  `,
})
export class AppComponent {
  private readonly appEnvProvider = inject(AppEnvProvider);
  readonly apiVersion = () => this.appEnvProvider.API_VERSION;
}
