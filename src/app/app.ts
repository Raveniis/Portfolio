import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './shared-components/header/header';
import { Footer } from './shared-components/footer/footer';
import { MaterialModules } from '../modules/module';
import { Sidebar } from './shared-components/sidebar/sidebar';
import { Subscription, filter } from 'rxjs';
import { Router } from '@angular/router';
import { ScrollViewService } from './services/scroll-view.service';
import { environment } from '../environments/environment';
import { MaintenanceModal } from './modals/maintenance-modal/maintenance-modal';
import { MatDialog } from '@angular/material/dialog';
import { AppTheme } from './services/app-theme.service';
import { ScrollToTopFAB } from './shared-components/scroll-to-top-fab/scroll-to-top-fab';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MaterialModules, Sidebar, ScrollToTopFAB],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('drawerContent', { read: ElementRef }) container!: ElementRef;

  private router = inject(Router);
  private dialog = inject(MatDialog);
  private themeService = inject(AppTheme);
  private scrollViewService = inject(ScrollViewService);

  private scrollThreshold: number = 100;
  private scrollToTopFABLevel: number = 500;
  private subscription!: Subscription;

  scrollTop: number = 0;
  hideNav: boolean = false;
  hideScrollToTopFAB: boolean = true;

  ngOnInit() {
    this.themeService.initializeCurrentTheme();
  }

  ngAfterViewInit() {
    if (environment.maintenance) {
      const isMaintenanceDialogShown = sessionStorage.getItem('isMaintenanceDialogShown');
      if (!isMaintenanceDialogShown || !(isMaintenanceDialogShown === 'true')) {
        this.dialog.open(MaintenanceModal, {
          data: {
            title: 'Under development!',
            message: `This website is still currently under development. Items and information found in the website are subject to changes without prior notice. If you have any inquiries, suggestions or feedback, please feel free to contact me!`,
          },
        });

        sessionStorage.setItem('isMaintenanceDialogShown', 'true');
      }
    }

    this.subscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (!tree.fragment) {
        this.container.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
        this.scrollViewService.setSection('');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onScroll(event: any) {
    const currentScroll = event.target.scrollTop;
    console.log(currentScroll);

    if (currentScroll < this.scrollToTopFABLevel) this.hideScrollToTopFAB = true;

    if (currentScroll === 0) {
      this.hideNav = false;
      return;
    }

    if (Math.abs(currentScroll - this.scrollTop) < this.scrollThreshold) {
      return;
    }

    const hasScrolledDown = this.scrollTop < currentScroll;

    if (currentScroll > this.scrollToTopFABLevel) {
      this.hideScrollToTopFAB = hasScrolledDown;
    }

    this.hideNav = hasScrolledDown;

    this.scrollTop = currentScroll;
  }

  scrollToTop() {
    this.container.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
