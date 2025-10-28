import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Core } from '../Servies/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private core: Core) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        return throwError(() => {
          this.core._Error.next(true)
           setTimeout(() => {
          this.core._Error.next(false)
           }, 4000);
        });
      })
    );
  }
}
