import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import navigationLinks from '../../data/navigationLinks';
import { ScrollView } from '../../services/scroll-view.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MaterialModules, CommonModule],
  templateUrl: './header.html',
})
export class Header {
  @Output() onToggleSidenav = new EventEmitter<void>();
  @ViewChild('navigation') navigationContainer!: ElementRef;
  @ViewChildren('links') navigationElements!: QueryList<ElementRef>;

  navigationLinks = navigationLinks;
  activeSection: string = '';
  subscription: Subscription | any;
  darkMode: boolean = true;
  navigationRelativeXPosition: number = 0;
  activeIndicatorStyle = {
    left: '0px',
    width: '0px',
  };

  constructor(private scrollViewService: ScrollView) {}

  ngAfterViewInit() {
    this.subscription = this.scrollViewService.currentSection$.subscribe((currentSection) => {
      console.log('Current section:', currentSection);
      this.activeSection = currentSection;
      this.highlightActiveLink();
    });

    this.navigationRelativeXPosition = this.navigationContainer.nativeElement.getBoundingClientRect().left;
    this.highlightActiveLink();
  }

  private highlightActiveLink() {
    this.navigationElements.forEach((element) => {
      const linkId = element.nativeElement.id;

      if (linkId !== this.activeSection) return;

      const dimensions = element.nativeElement.getBoundingClientRect();

      this.activeIndicatorStyle = {
        left: `${dimensions.left - this.navigationRelativeXPosition}px`,
        width: `${dimensions.width}px`,
      };

      console.log(this.activeIndicatorStyle);
    });
  }

  ngOnInit() {
    const savedTheme = sessionStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
      this.darkMode = false;
      document.body.classList.remove('dark');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    sessionStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }
}
