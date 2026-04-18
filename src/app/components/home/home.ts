import { Component, QueryList, ViewChildren } from '@angular/core';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectOverview } from './project-overview/project-overview';
import { ScrollView } from '../../services/scroll-view.service';
import { ContactForm } from '../../utils-components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Skills, EducationComponent, ProjectOverview, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChildren('tracker') sections!: QueryList<any>;
  private observer!: IntersectionObserver;

  constructor(private scrollViewService: ScrollView) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setCurrentView(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    this.sections.forEach((section) => {
      const element = section.trackElement;
      this.observer.observe(element);
    });
  }

  private setCurrentView(id: string) {
    this.scrollViewService.setSection(id);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
