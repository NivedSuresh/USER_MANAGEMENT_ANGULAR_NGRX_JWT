import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {onLogout} from "../../sharable/store/user/User.action";
// import {isAuthenticated} from "../../sharable/Auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HEADERComponent {

  constructor(
    protected authService :AuthService,
    private router :Router,
    private store :Store
  ) {}

  login() {
    this.router.navigate(["/login"]);
  }
  logout() {
    this.authService.clearStorage();
    this.store.dispatch(onLogout());
    this.router.navigate(["/login"]);
  }
}
