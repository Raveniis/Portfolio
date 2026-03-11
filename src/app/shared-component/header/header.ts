import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import navigationLinks from '../../data/navigationLinks';
import { ScrollView } from '../../services/scroll-view.service';
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

  navigationLinks = navigationLinks;
  activeSection: string = '';
  subscription: Subscription | any;
  darkMode: boolean = true;
  activeIndicatorStyle = {
    left: 0,
    width: 0,
  };

  constructor(
    private scrollViewService: ScrollView,
    private cdr: ChangeDetectorRef,
    private appTheme: AppTheme,
  ) {}

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

    if (!activeElement) return;

    const containerXRelative = this.navigationContainer.nativeElement.getBoundingClientRect().left;
    const dimensions = activeElement.nativeElement.getBoundingClientRect();
    this.activeIndicatorStyle = {
      left: dimensions.left - containerXRelative,
      width: dimensions.width,
    };

    setTimeout(() => {
      this.cdr.detectChanges();
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

    const currentTheme = this.darkMode ? 'dark' : 'light';
    sessionStorage.setItem('theme', currentTheme);
    this.appTheme.setTheme(currentTheme);
  }
}
