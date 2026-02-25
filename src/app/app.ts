import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared-component/header/header';
import { Footer } from './shared-component/footer/footer';
import { MaterialModules } from '../modules/module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MaterialModules],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Test');
}
