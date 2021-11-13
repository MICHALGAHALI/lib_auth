import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
  export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
          return next.handle(req).pipe(
            tap((e: HttpEvent<any>) => {
              if (e.type === HttpEventType.Response) {
                //this._transferState.set(tasksKey, e.body);
              }
            }))
    }
  }