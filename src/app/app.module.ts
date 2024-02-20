import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { AuthService } from './auth.service';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '9c1b002d-7473-4fce-8279-321e8c0a82d5',
      redirectUri: 'http://localhost:4200',
    },
  });
}

@NgModule({
  declarations: [AppComponent, PublicPageComponent, RestrictedPageComponent],
  imports: [BrowserModule, AppRoutingModule, MsalModule],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
