import { Injectable } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private oidcSecurityService: OidcSecurityService) { }

    get isLoggedIn() {
        return this.oidcSecurityService.isAuthenticated$;
    }
    get token() {
        return this.oidcSecurityService.getIdToken();
    }
    get userData() {
        return this.oidcSecurityService.userData$;
    }
    checkAuth() {
        return this.oidcSecurityService.checkAuth();
    }
    doLogin() {
        return of(this.oidcSecurityService.authorize());
    }
    signout() {
        this.oidcSecurityService.logoff();
    }
}