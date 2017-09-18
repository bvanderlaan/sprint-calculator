import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dark',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
  ];

export const routing = RouterModule.forRoot(routes);