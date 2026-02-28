import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Project } from './components/project/project';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projects',
    component: Project
  },
  {
    path: '**',
    redirectTo: '',
  }
];
