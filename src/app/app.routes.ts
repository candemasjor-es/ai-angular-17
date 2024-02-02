import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagesImganesComponent } from './pages/pages-imganes/pages-imganes.component';
import { Error404Component } from './pages/error-404/error-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'imagenes', component: PagesImganesComponent },
  { path: '**', component: Error404Component },
];
