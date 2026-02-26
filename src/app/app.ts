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
  protected readonly title = signal('Test');
}
