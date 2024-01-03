import {Inject, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LOGINComponent} from "./components/login/login.component";
import {PROFILEComponent} from "./components/customer/profile/profile.component";
import {USERLISTComponent} from "./components/Admin/user-list/user-list.component";
import {AdminAuthGuard, CustomerAuthGuard} from "./_auth/auth.guard";

const routes: Routes = [
  {path : "", component : PROFILEComponent, canActivate : [CustomerAuthGuard]},
  {path : "login", component : LOGINComponent},
  {path : "profile" , component : PROFILEComponent, canActivate : [CustomerAuthGuard]},
  {path : "admin", component :USERLISTComponent, canActivate : [AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
