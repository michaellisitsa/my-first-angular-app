import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaigaUiRootComponent } from './taiga-ui-root/taiga-ui-root.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'taiga-ui',
    component: TaigaUiRootComponent,
    title: 'Taiga UI',
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
