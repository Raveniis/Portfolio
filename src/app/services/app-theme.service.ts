import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';
@Injectable({
  providedIn: 'root',
})
export class AppTheme {
  private defaultTheme: Theme = 'dark';
  private savedTheme: Theme = (localStorage.getItem('theme') as 'light' | 'dark') || this.defaultTheme;

  private themeSubject = new BehaviorSubject<string>(this.savedTheme || '');
  currentTheme$ = this.themeSubject.asObservable();

  setTheme(isDarkMode: boolean) {
    const currentTheme = isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', currentTheme);
    this.themeSubject.next(currentTheme);
  }

  getSavedTheme() {
    return this.savedTheme || this.defaultTheme;
  }

  initializeCurrentTheme() {
    if (this.savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else if (this.savedTheme === 'light') {
      document.body.classList.remove('dark');
    }
  }
}
