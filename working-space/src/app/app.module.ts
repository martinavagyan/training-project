import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestsService } from './api-requests.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ApiRequestsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
