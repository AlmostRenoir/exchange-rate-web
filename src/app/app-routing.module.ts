import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fetch' },
  {
    path: 'fetch',
    loadChildren: () => import('./pages/currency-fetch/currency-fetch.module').then(m => m.CurrencyFetchModule),
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/requests-history/requests-history.module').then(m => m.RequestsHistoryModule),
  },
  { path: '**', redirectTo: 'fetch' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
