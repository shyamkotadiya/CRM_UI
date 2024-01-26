import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientCommunicationDashboardComponent } from './client-communication-dashboard/client-communication-dashboard.component';
import { ClientLeadAddEditComponent } from './client-lead/client-lead-add-edit/client-lead-add-edit.component';
import { ClientLeadSearchComponent } from './client-lead/client-lead-search/client-lead-search.component';
import { ClientLead } from './common/beanClass';
import { CommonElementComponent } from './common/common-element/common-element.component';
import { CommonGridComponent } from './common/common-grid/common-grid.component';
import { ValidatorsDirective } from './common/validators.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NevBarComponent } from './nev-bar/nev-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCommunicationDashboardComponent,
    ClientLeadAddEditComponent,
    NevBarComponent,
    LoginComponent,
    CommonElementComponent,
    HomeComponent,
    ValidatorsDirective,
    ClientLeadSearchComponent,
    CommonGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule
  ],
  providers: [CommonElementComponent, ClientLead],
  bootstrap: [AppComponent]
})
export class AppModule { }
