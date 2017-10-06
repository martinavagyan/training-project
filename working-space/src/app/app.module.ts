import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestsService } from './api-requests.service';
import { VisitListComponent } from './components/visit-list/visit-list.component';
import { DatePickerModule} from 'angular-io-datepicker'
import {MatAutocompleteModule} from '@angular/material';
import { AutocompleteHostComponent } from './components/autocomplete-host/autocomplete-host.component';



import { WebApiComponent } from './components/web-api/web-api.component';
import { WebCamComponent } from 'ack-angular-webcam';
import { HttpModule } from '@angular/http';
import { AdminFieldComponent } from './components/admin-field/admin-field.component';
import { UserRegisterFormComponent } from './components/user-register-form/user-register-form.component';

3

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    UserListComponent,
    VisitListComponent,
    AutocompleteHostComponent,
    WebApiComponent,
    WebCamComponent,
    UserRegisterFormComponent,
    AdminFieldComponent,
    AdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule,
    MatAutocompleteModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ApiRequestsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
