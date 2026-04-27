import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectOverview } from './project-overview/project-overview';
import { ScrollViewService } from '../../services/scroll-view.service';
import { ContactForm } from '../../shared-components/contact-form/contact-form';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ExperienceComponent, SkillsComponent, EducationComponent, ProjectOverview, ContactForm, MatDivider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChildren('tracker') sections!: QueryList<any>;
  private scrollService = inject(ScrollViewService);

  ngOnDestroy() {
    this.scrollService.disconnectObserver();
  }
}
