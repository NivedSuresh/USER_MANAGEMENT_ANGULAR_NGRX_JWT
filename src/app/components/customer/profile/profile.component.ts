import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/Auth/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {getUser} from "../../../sharable/store/user/User.selectors";
import {getActiveUser, getActiveUserSuccess, uploadPicture} from "../../../sharable/store/user/User.action";
import {User} from "../../../sharable/models/User.model";
import {showAlert} from "../../../sharable/store/common/App.Action";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  // styleUrl: './profile.component.css'
})
export class PROFILEComponent implements OnInit{

  selectedFile! :File | null;
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

  onChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadUserImage() {
    if(!this.selectedFile) {
      this.store.dispatch(showAlert({message : "Select an Image.",resultType : "failure"}));
      return;
    }
    const formData :FormData = new FormData();
    formData.append("file", this.selectedFile);
    this.store.dispatch(uploadPicture({formData : formData}));
    this.selectedFile = null;
  }
}
