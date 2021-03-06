import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newConedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
          });
          return next.handle(newConedReq);
    }
  }