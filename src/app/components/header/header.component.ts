import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";
import {Router} from "@angular/router";
// import {isAuthenticated} from "../../sharable/Auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HEADERComponent {

  constructor(
    protected authService :AuthService,
    private router :Router
  ) {}

  login() {
    this.router.navigate(["/login"]);
  }
  logout() {
    this.authService.clearStorage();
    this.router.navigate(["/login"]);
  }
}
