import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { IsAdminGuard } from './is-admin.guard';
import { IsCustomerGuard } from './is-customer.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'add-order',
    component: AddOrderComponent,
    canActivate: [IsCustomerGuard],
  },
  {
    path: 'order-details',
    component: OrderDetailComponent,
    canActivate: [IsAdminGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
