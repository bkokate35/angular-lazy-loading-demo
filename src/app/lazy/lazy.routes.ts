import { Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

export const LAZY_ROUTES: Routes = [
  {
    path: '',
    component: LazyComponent
  },
  {
    path: 'dynamic',
    loadComponent: () => import('./dynamic/dynamic.component').then(m => m.DynamicComponent)
  }
];