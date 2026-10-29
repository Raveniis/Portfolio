import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectOverview } from './project-overview/project-overview';
import { ScrollViewService } from '../../services/scroll-view.service';
import { ContactForm } from '../../shared-components/contact-form/contact-form';
import { MatDivider } from '@angular/material/divider';
import { PixelSnowComponent } from './background/pixel-snow.component';
import { Utils } from '../../utils/utils';
import type { PixelSnowVariant } from './background/pixel-snow.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ExperienceComponent, SkillsComponent, EducationComponent, ProjectOverview, ContactForm, MatDivider, PixelSnowComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChildren('tracker') sections!: QueryList<any>;
  private scrollService = inject(ScrollViewService);
  private isWinterSeason = inject(Utils).isWinterSeason();

  backgroundParticles: PixelSnowVariant = this.isWinterSeason ? 'snowflake' : 'round';

  ngOnDestroy() {
    this.scrollService.disconnectObserver();
  }
}
