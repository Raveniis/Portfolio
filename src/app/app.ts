import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './shared-component/header/header';
import { Footer } from './shared-component/footer/footer';
import { MaterialModules } from '../modules/module';
import { Sidebar } from './shared-component/sidebar/sidebar';
import { Subscription, filter } from 'rxjs';
import { Router } from '@angular/router';
import { ScrollView } from './services/scroll-view.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MaterialModules, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('drawerContent', { read: ElementRef }) container!: ElementRef;
  router = inject(Router);
  scrollViewService = inject(ScrollView);
  scrollTop = 0;
  hideNav = false;
  private scrollThreshold: number = 100;
  private subscription!: Subscription;

  ngAfterViewInit() {
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
