import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashComponent} from './dash/dash.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAccordion,
  MatProgressBar,
  MatExpansionModule,
  MatFormFieldModule, MatDatepickerModule, DateAdapter, MatNativeDateModule, MatInputModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {PanelsComponent} from './panels/panels.component';
import {HomeComponent} from './home/home.component';
import {ExecutorComponent} from './executor/executor.component';
import {UploadModule} from './upload/upload.module';
import {DealerComponent} from './dealer/dealer.component';
import {ClientComponent} from './client/client.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import { TablComponent } from './tabl/tabl.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    PanelsComponent,
    HomeComponent,
    ExecutorComponent,
    DealerComponent,
    ClientComponent,
    TablComponent,
    ContactComponent,
    SupportComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    SearchCustomersComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    UploadModule,
    FontAwesomeModule,
    FormsModule,
    MatCheckboxModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
