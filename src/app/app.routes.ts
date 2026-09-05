import { Routes } from '@angular/router';
import { ViewLanding } from './views/view-landing/view-landing';

export const routes: Routes = [
  { path: '', component: ViewLanding },
  { path: 'landing', component: ViewLanding },
  { path: '**', component: ViewLanding },
];
