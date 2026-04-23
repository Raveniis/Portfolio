import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import navigationLinks from '../../data/navigationLinks.data';
import { ScrollViewService } from '../../services/scroll-view.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppTheme } from '../../services/app-theme.service';

@Component({
  selector: 'app-header',
  imports: [MaterialModules, CommonModule],
  templateUrl: './header.html',
})
export class Header {
  @Input() hideNavBar!: boolean;
  @Output() onToggleSidenav = new EventEmitter<void>();
  @ViewChild('navigation') navigationContainer!: ElementRef;
  @ViewChildren('links') navigationElements!: QueryList<ElementRef>;

  private themeService = inject(AppTheme);
  private scrollViewService = inject(ScrollViewService);
  private cdr = inject(ChangeDetectorRef);

  navigationLinks = navigationLinks;
  activeSection: string = '';
  subscription: Subscription | any;
  darkMode: boolean = true;
  activeIndicatorStyle = {
    left: 0,
    width: 0,
  };

  constructor() {
    this.darkMode = this.themeService.getSavedTheme() ? this.themeService.getSavedTheme() === 'dark' : false;
  }

  ngAfterViewInit() {
    this.subscription = this.scrollViewService.currentSection$.subscribe((currentSection) => {
      this.activeSection = currentSection;
      if (!currentSection) {
        this.highlightActiveLink();
        this.activeIndicatorStyle = { ...this.activeIndicatorStyle, width: 0 };
        return;
      }
      this.highlightActiveLink();
    });

    this.highlightActiveLink();
  }

  private highlightActiveLink() {
    const activeElement = this.navigationElements.find((el) => el.nativeElement.dataset.id === this.activeSection);

    if (!activeElement) {
      this.activeIndicatorStyle = {
        ...this.activeIndicatorStyle,
        width: 0,
      };
    } else {
      const containerXRelative = this.navigationContainer.nativeElement.getBoundingClientRect().left;
      const dimensions = activeElement.nativeElement.getBoundingClientRect();
      this.activeIndicatorStyle = {
        left: dimensions.left - containerXRelative,
        width: dimensions.width,
      };
    }

    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.themeService.setTheme(this.darkMode);
  }
}
