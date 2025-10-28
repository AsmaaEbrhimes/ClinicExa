import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Core } from '../Servies/core';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
  constructor(private core: Core) {}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
          this.core._Sussess.next(true);
          setTimeout(() => {
            this.core._Sussess.next(false);
          }, 4000);
        }
      }
    }),
  );
}
}
