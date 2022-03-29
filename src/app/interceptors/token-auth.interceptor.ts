import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (window.location.href.includes('home')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'true',
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });
    }
    return next.handle(request);
  }
}
