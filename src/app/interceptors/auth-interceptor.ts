import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 401:
          return authService.refreshToken().pipe(
            switchMap((res) => {
              return next(req);
            }),
            catchError((err) => {
              return throwError(() => error);
            }),
          );

        case 429:
          //toast: Too many attempts! Please try again later
          return throwError(() => new Error('Too many requests. Try again later.'));
        default:
          return throwError(() => error);
      }
    }),
  );
};
