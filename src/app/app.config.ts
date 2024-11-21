import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAuth0, authHttpInterceptorFn } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MatNativeDateModule } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: environment.audience
      },
      httpInterceptor: {
        allowedList: [
          {          
            uri: `${environment.audience}*`,
            tokenOptions: {
              authorizationParams: {              
                audience: environment.audience,
              }
            }
          }
        ]
      }
    }),
    provideAnimationsAsync(),
  ]
};
