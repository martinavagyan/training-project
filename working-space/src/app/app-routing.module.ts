import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent}            from  './components/home-page/home-page.component';
import {AdminFieldComponent}          from  './components/admin-field/admin-field.component';
import {AdminUserListComponent}            from  './components/admin-user-list/admin-user-list.component';
import {VisitListComponent}           from  './components/visit-list/visit-list.component';
import {UserRegisterFormComponent}    from  './components/user-register-form/user-register-form.component';

const routes: Routes = [
  {path  : '', redirectTo: 'app-home-page', pathMatch: 'full'}, 
  {path : 'app-home-page', component: HomePageComponent},
  {path  : 'app-admin-field', component: AdminFieldComponent, 
    children  : [
      {path: '', redirectTo: 'app-user-register-form', pathMatch: 'full' },
      {path  : 'app-admin-field/app-admin-user-list', component: AdminUserListComponent},
      {path  : 'app-admin-field/app-visit-list', component: VisitListComponent},       
      {path  : 'app-admin-field/app-user-register-form', component : UserRegisterFormComponent},
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }