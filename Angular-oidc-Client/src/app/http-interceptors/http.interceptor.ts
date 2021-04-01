import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.token;
        console.log('token', token)

        if (!token) {
            console.log('no token')
            return next.handle(request);
        }
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token)
        })
        return next.handle(request);
    }
}