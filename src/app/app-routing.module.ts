import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventFormComponent } from './modals/add-event-form/add-event-form.component';
import { EditEventFormComponent } from './modals/edit-event-form/edit-event-form.component';
import { ParticipateFormComponent } from './modals/participate-form/participate-form.component';
import { DeleteEventFormComponent } from './modals/delete-event-form/delete-event-form.component';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './modals/login-form/login-form.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { InterfaceComponent } from './interface/interface.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { EventDetailsComponent } from './event-details/event-details.component';


const routes: Routes = [
  { path: 'interface', component: InterfaceComponent},
  { path: 'add', component: AddEventFormComponent},
  { path: 'edit', component: EditEventFormComponent},
  { path: 'participer', component: ParticipateFormComponent},
  { path: 'delete', component: DeleteEventFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'admin', component: AdminInterfaceComponent},
  { path: 'details', component: EventDetailsComponent},
  { path: '', component: UserInterfaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
