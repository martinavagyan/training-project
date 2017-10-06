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
import { VisitListComponent } from './components/visit-list/visit-list.component';
import { WebApiComponent } from './components/web-api/web-api.component';
import { WebCamComponent } from 'ack-angular-webcam';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    UserListComponent,
    VisitListComponent,
    WebApiComponent,
    WebCamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
