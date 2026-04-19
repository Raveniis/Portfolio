import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './shared-component/header/header';
import { Footer } from './shared-component/footer/footer';
import { MaterialModules } from '../modules/module';
import { Sidebar } from './shared-component/sidebar/sidebar';
import { Subscription, filter } from 'rxjs';
import { Router } from '@angular/router';
import { ScrollView } from './services/scroll-view.service';
import { environment } from '../environments/environment';
import { MaintenanceModal } from './utils-components/maintenance-modal/maintenance-modal';
import { MatDialog } from '@angular/material/dialog';
import { AppTheme } from './services/app-theme.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MaterialModules, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('drawerContent', { read: ElementRef }) container!: ElementRef;

  private router = inject(Router);
  private dialog = inject(MatDialog);
  private themeService = inject(AppTheme);

  scrollViewService = inject(ScrollView);
  scrollTop = 0;
  hideNav = false;
  private scrollThreshold: number = 100;
  private subscription!: Subscription;

  ngOnInit() {
    this.themeService.initializeCurrentTheme();
  }

  ngAfterViewInit() {
    if (environment.maintenance) {
      const isMaintenanceDialogShown = sessionStorage.getItem('isMaintenanceDialogShown');
      if (!isMaintenanceDialogShown || !(isMaintenanceDialogShown === 'true')) {
        this.dialog.open(MaintenanceModal, {
          data: {
            title: 'Under development',
            message: `This website is still under development. Items/information found inside are all subject to changes and improvements. I'm open to suggestions/feedbacks to
                    further improve this website through my contacts found in the footer`,
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

    if (currentScroll === 0) {
      this.hideNav = false;
      return;
    }

    if (Math.abs(currentScroll - this.scrollTop) < this.scrollThreshold) {
      return;
    }

    this.hideNav = this.scrollTop < currentScroll;
    this.scrollTop = currentScroll;
  }
}
