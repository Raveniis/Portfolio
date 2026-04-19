import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay, finalize, catchError, throwError } from 'rxjs';
import { Api } from '../utils/api';
import { Utils } from '../utils/utils';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(Api);
  private utils = inject(Utils);
  private refresh$: Observable<any> | null = null;

  refreshToken(): Observable<any> {
    if (!this.refresh$) {
      this.refresh$ = this.api.fetchData('POST', 'get-token').pipe(
        shareReplay(1),
        catchError((err) => {
          this.utils.openToastAlert('error', 'Unable to authenticate! Please try again later.');
          return throwError(() => err);
        }),
        finalize(() => {
          this.refresh$ = null;
        }),
      );
    }

    return this.refresh$;
  }
}
