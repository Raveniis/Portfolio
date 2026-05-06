import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Utils } from '../utils/utils';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const utils = inject(Utils);

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

        case 422:
          console.log(error);
          utils.openAlert('Invalid Input!', error.error.message || 'Please double check the input fields.', 'error');
          return throwError(() => error);

        case 429:
          utils.openToastAlert(error.error.message || 'Too many request! Please try again later.', 'error');
          return throwError(() => new Error('Too many requests. Try again later.'));

        case 500:
          utils.openAlert('Server Error!', error.error.message || 'An error occurred on the server.', 'error');
          return throwError(() => error);

        default:
          return throwError(() => error);
      }
    }),
  );
};
