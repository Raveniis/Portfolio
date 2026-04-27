import { MediaMatcher } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  private media = inject(MediaMatcher);
  private mobileScreenWidth: number = 640;
  private mobile = new BehaviorSubject<boolean>(this.media.matchMedia(`(max-width: ${this.mobileScreenWidth}px)`).matches);
  isMobile$ = this.mobile.asObservable();

  private readonly _mobileQuery: MediaQueryList = this.media.matchMedia(`(max-width: ${this.mobileScreenWidth}px)`);
  private readonly _mobileQueryListener: () => void;

  constructor() {
    this._mobileQueryListener = () => this.mobile.next(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  isMobile(): boolean {
    return this.mobile.getValue();
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
