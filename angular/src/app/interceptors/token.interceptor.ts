import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, switchMap } from 'rxjs';
import { ProxyService } from '../services/proxy.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public proxyService: ProxyService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.proxyService.token}`,
            },
          });
          return next.handle(newRequest);
  }
}