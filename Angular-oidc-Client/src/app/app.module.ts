import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthInterceptor } from './http-interceptors/http.interceptor';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () => {
    oidcConfigService.withConfig({
      stsServer: "https://localhost:5001",
      clientId: "Angular-oidc-Client",
      redirectUrl: window.location.origin + '/home',
      postLogoutRedirectUri: window.location.origin,
      scope: "openid profile api1",
      responseType: "code",
      silentRenew: true,
      useRefreshToken: true,
      logLevel: LogLevel.Debug
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
