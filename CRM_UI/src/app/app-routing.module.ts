import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCommunicationDashboardComponent } from './client-communication-dashboard/client-communication-dashboard.component';
import { ClientLeadSearchComponent } from './client-lead/client-lead-search/client-lead-search.component';
import { ClientLeadAddEditComponent } from './client-lead/client-lead-add-edit/client-lead-add-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TaskAddEditComponent } from './task/task-add-edit/task-add-edit.component';
import { TaskSearchComponent } from './task/task-search/task-search.component';
import { ProjectAddEditComponent } from './project/project-add-edit/project-add-edit.component';
import { ProjectSearchComponent } from './project/project-search/project-search.component';
import { ClientAddEditComponent } from './client/client-add-edit/client-add-edit.component';
import { ClientSearchComponent } from './client/client-search/client-search.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: 'clientLead/create', component: ClientLeadAddEditComponent },
  { path: 'clientLead/search', component: ClientLeadSearchComponent },
  { path: 'dashboard/clientCommunication', component: ClientCommunicationDashboardComponent },
  { path: 'task/create', component: TaskAddEditComponent },
  { path: 'task/search', component: TaskSearchComponent },
  { path: 'project/create', component: ProjectAddEditComponent },
  { path: 'project/edit/:id', component: ProjectAddEditComponent },
  { path: 'project/search', component: ProjectSearchComponent},
  { path: 'client/create', component: ClientAddEditComponent},
  { path: 'client/search', component: ClientSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
