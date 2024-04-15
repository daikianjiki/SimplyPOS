import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    DashboardPageComponent,
    TransactionPageComponent,
    InventoryPageComponent,
    EmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
