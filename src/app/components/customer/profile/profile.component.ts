import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/Auth/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {getUser} from "../../../sharable/store/user/User.selectors";
import {getActiveUser, getActiveUserSuccess} from "../../../sharable/store/user/User.action";
import {User} from "../../../sharable/models/User.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  // styleUrl: './profile.component.css'
})
export class PROFILEComponent implements OnInit{

  user! :User;
  constructor(
    private authService :AuthService,
    private router :Router,
    private store :Store
    ) {
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) this.router.navigate(["/login"]);
    this.store.dispatch(getActiveUser());
    this.store.select(getUser).subscribe((data)=>{
      this.user = data;
    })
  }

  uploadUserImage() {

  }

  onChange($event: Event) {

  }
}
