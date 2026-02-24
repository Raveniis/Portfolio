import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { About } from './components/about/about';

export const routes: Routes = [
    {
        path: "",
        component: Landing
    },
    {
        path:"about",
        component: About
    }
];
