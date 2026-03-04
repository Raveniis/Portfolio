import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollView {
  private sectionSubject = new BehaviorSubject<string>('');
  currentSection$ = this.sectionSubject.asObservable();

  setSection(id: string) {
    this.sectionSubject.next(id);
  }
}
