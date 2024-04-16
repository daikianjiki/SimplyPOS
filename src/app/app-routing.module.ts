import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'employee', component: EmployeePageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'transaction', component: TransactionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
