import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEventFormComponent } from './modals/add-event-form/add-event-form.component';
import { LoginFormComponent } from './modals/login-form/login-form.component';
import { EditEventFormComponent } from './modals/edit-event-form/edit-event-form.component';
import { DeleteEventFormComponent } from './modals/delete-event-form/delete-event-form.component';
import { ParticipateFormComponent } from './modals/participate-form/participate-form.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { InterfaceComponent } from './interface/interface.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEventFormComponent,
    LoginFormComponent,
    EditEventFormComponent,
    DeleteEventFormComponent,
    ParticipateFormComponent,
    FooterComponent,
    NavbarComponent,
    UserInterfaceComponent,
    InterfaceComponent,
    AdminInterfaceComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
