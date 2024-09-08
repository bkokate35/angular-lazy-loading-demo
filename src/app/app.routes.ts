import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.routes').then(m => m.LAZY_ROUTES)
  }
];