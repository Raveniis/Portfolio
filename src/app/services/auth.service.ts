import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay, finalize } from 'rxjs';
import { Api } from '../utils/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  api = inject(Api);
  private refresh$: Observable<any> | null = null;

  refreshToken(): Observable<any> {
    if (!this.refresh$) {
      this.refresh$ = this.api.fetchData('POST', 'refresh').pipe(
        shareReplay(1),
        finalize(() => {
          this.refresh$ = null;
        }),
      );
    }

    return this.refresh$;
  }
}
