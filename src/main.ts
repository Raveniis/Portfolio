import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config';
import { environment } from './environments/environment';
import { App } from './app/app';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  console.log = () => {};
  console.error = () => {};
  console.info = () => {};
  console.warn = () => {};
  enableProdMode();
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
