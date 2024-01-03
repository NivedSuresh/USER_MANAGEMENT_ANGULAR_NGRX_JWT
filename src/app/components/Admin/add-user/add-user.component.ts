import {AfterViewInit, Component, Inject, Injectable, OnInit} from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from "@ngrx/store";
import {User} from "../../../sharable/models/User.model";
import {addUser, loadAllUsers, updateUser} from "../../../sharable/store/user/User.action";
import {getUser} from "../../../sharable/store/user/User.selectors";
import {Observable} from "rxjs";
import {showAlert} from "../../../sharable/store/common/App.Action";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MaterialModule , CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class ADDUSERComponent implements OnInit{

  userForm = this.builder.group({
    id : undefined,
    username : this.builder.control("", Validators.required),
    email : this.builder.control("", Validators.compose([Validators.required, Validators.email])),
    phoneNumber : this.builder.control("", Validators.required),
    password :this.builder.control("",Validators.compose([Validators.required, Validators.minLength(4)])),
    confirmPassword : this.builder.control("", Validators.compose([Validators.required, Validators.minLength(4)])),
  })

   usecase! :string;

  constructor(

    private builder :FormBuilder,
    private dialogRef :MatDialogRef<ADDUSERComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData :any,
    private store :Store,

  ){}


  ngOnInit(): void {
    this.usecase = this.dialogData.title;

    this.store.select(getUser).subscribe((user)=>{
      this.userForm.setValue({
        id: user.id,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: "",
        confirmPassword: ""
      })
    })
  }

  addUser() :void {
    if(this.userForm.valid){
      if(this.userForm.value.confirmPassword !== this.userForm.value.password){
        this.store.dispatch(
          showAlert({message : "Unable to save as password's doesn't match", resultType : "failure"})
        );
        return;
      }
      const user :User =  {
        id : this.userForm.value.id ? this.userForm.value.id as string : undefined,
        username : <string> this.userForm.value.username,
        email : <string> this.userForm.value.email,
        phoneNumber : <string> this.userForm.value.phoneNumber,
        picture : undefined,
        role : "CUSTOMER",
        password : <string> this.userForm.value.password,
        confirmPassword : <string> this.userForm.value.confirmPassword
      }

      if(user.id) {
        console.log("Update User triggered");
        this.store.dispatch(updateUser({input : user}));
      }
      else this.store.dispatch(addUser({input : user}))

      this.onCancel();
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
