import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared-component/header/header';
import { Footer } from './shared-component/footer/footer';
import { MaterialModules } from '../modules/module';
import { Sidebar } from './shared-component/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MaterialModules, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  scrollTop = 0;
  hideNav = false;
  private scrollThreshold: number = 100;

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

    console.log(this.hideNav);
  }
}
