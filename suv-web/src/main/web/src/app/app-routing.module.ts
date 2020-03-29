import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { HomeComponent } from './home/home.component';
import { ExecutorComponent } from './executor/executor.component';
import { DashComponent } from './dash/dash.component';
import { UploadComponent } from './upload/upload.component';
import { ContactComponent } from "./contact/contact.component";
import { SupportComponent } from "./support/support.component";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'executor', component: ExecutorComponent },
  { path: 'dash', component: DashComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'support', component: SupportComponent},
  { path: 'customer', component: CustomerListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
