import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollViewService {
  private sectionSubject = new BehaviorSubject<string>('');
  private observer!: IntersectionObserver | undefined;
  currentSection$ = this.sectionSubject.asObservable();

  setSection(id: string) {
    this.sectionSubject.next(id);
  }

  initializeObserver() {
    if (this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );
  }

  observeElement(element: HTMLElement) {
    if (!this.observer) this.initializeObserver();

    this.observer!.unobserve(element);
    this.observer!.observe(element);
  }

  disconnectObserver() {
    if (!this.observer) return;

    this.observer.disconnect();
    this.observer = undefined;
  }
}
