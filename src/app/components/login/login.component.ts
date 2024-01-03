import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {ADDUSERComponent} from "../Admin/add-user/add-user.component";
import {loginUser} from "../../sharable/store/user/User.action";
import {LoginRequest} from "../../sharable/models/Payloads.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LOGINComponent implements OnInit{

  loginForm = this.builder.group({
    email : this.builder.control("", Validators.compose([Validators.required, Validators.email])),
    password :this.builder.control("",Validators.compose([Validators.required, Validators.minLength(4)])),
  })

  constructor(

    private builder :FormBuilder,
    private dialog :MatDialog,
    private store :Store,

  ){}

  ngOnInit(): void {

  }

  submitLoginForm() {
    if(this.loginForm.valid){
      const loginRequest :LoginRequest = {
        email : <string> this.loginForm.value.email,
        password : <string> this.loginForm.value.password
      }
      this.store.dispatch(loginUser({loginRequest : loginRequest}));
    }
  }

  signup() {
    this.dialog.open(ADDUSERComponent, {
      enterAnimationDuration : '400ms',
      exitAnimationDuration : '400ms',
      width : '50%',
      data : {
        code : "",
        title : "Sign Up",
      }
    })
  }

}
