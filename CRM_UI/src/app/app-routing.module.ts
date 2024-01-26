import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCommunicationDashboardComponent } from './client-communication-dashboard/client-communication-dashboard.component';
import { ClientLeadSearchComponent } from './client-lead/client-lead-search/client-lead-search.component';
import { ClientLeadAddEditComponent } from './client-lead/client-lead-add-edit/client-lead-add-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:'cc/dashboard',component:ClientCommunicationDashboardComponent},
  {path:'clientLead/create',component:ClientLeadAddEditComponent},
  {path:'clientLead/search',component:ClientLeadSearchComponent},
  {path:'dashboard/clientCommunication',component:ClientCommunicationDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
