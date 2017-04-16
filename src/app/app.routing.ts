import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'add-accounts', component: AboutComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'reviews', component: AboutComponent},
  { path: 'reports', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
