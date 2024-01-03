import {Inject, Injectable} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { mergeMap, } from "rxjs";

import {
  addUser,
  addUserFailure,
  addUserSuccess,
  deleteUser, getActiveUser, getActiveUserSuccess,
  LOAD_USER,
  loadAllUsers,
  loadAllUsersFailure,
  loadAllUsersSuccess,
  loadUser,
  loadUserFailure,
  loadUserSuccess,
  loginUser,
  loginUserSuccess,
  updateUser,
  updateUserFailure,
  updateUserSuccess
} from "./User.action";

import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {showAlert} from "../common/App.Action";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/Auth/auth.service";

@Injectable({ providedIn : "root" })
export class UserEffects{
  constructor(
    private userService :UserService,
    @Inject(AuthService) private authService :AuthService,
    private actions$ :Actions,
    private router :Router
  ) {}


  _loadUsers= createEffect(()=>
    this.actions$.pipe(
      ofType(loadAllUsers),
      exhaustMap((action)=>{
        return this.userService.getAllUsers().pipe(
          map((data)=>{
            console.log(data, "from user effects");
            return loadAllUsersSuccess({list:data})
          }),
          catchError((_error)=>of(loadAllUsersFailure({err:_error.message})))
  )})))


  _addUser = createEffect(() =>
      this.actions$.pipe(
        ofType(addUser),
        switchMap((action) =>
          this.userService.addUser(action.input).pipe(
            switchMap((data) => {
              console.log(data, "from user effects showAlert should be triggered");
              return of(showAlert({message : "Successfully added new User.", resultType : "OK"}), addUserSuccess({ input : data }))
            }),
            catchError((error) => {
              console.error("error from user effects");
              return of(addUserFailure({err : error.message}), showAlert({message : "Failed to create User. "+error.message, resultType : "failure"}));
  })))));

  _loadUser= createEffect(()=>
    this.actions$.pipe(
      ofType(loadUser),
      exhaustMap((action)=>{
        return this.userService.getUser(action.id).pipe(
          map((data)=>{
            console.log(data, "from user effects");
            return loadUserSuccess({user : data})
          }),
          catchError((_error)=>of(loadUserFailure({err:"Failed to fetch data. "+_error.message}))));
  })));

  _updateUser=createEffect(()=>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap((action)=>{
        return this.userService.updateUser(action.input).pipe(
          switchMap((data)=>{
            return of(
              updateUserSuccess({list : data}),
              showAlert({message:`Successfully updated ${action.input.username}!`, resultType:'OK'}))
          }),
          catchError((_error)=>of(showAlert({message:`Failed to update user, ${_error.message}`, resultType:'failure'})))
  )})))

  _deleteUser=createEffect(()=>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap((action)=>{
        return this.userService.deleteById(<string>action.user.id).pipe(
          switchMap((data)=>{
            return of(
              updateUserSuccess({list : data}),
              showAlert({message:`Successfully deleted ${action.user.username}!`, resultType:'OK'}))
          }),
          catchError((_error)=>of(showAlert({message:`Failed to delete user, ${_error.message}`, resultType:'failure'})))
  )})))

  _loginUser=createEffect(()=>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action)=>{
        return this.userService.loginUser(action.loginRequest).pipe(
          switchMap((data)=>{

            this.authService.setTokenAndRole(data.jwt, data.role);
            console.log(data, "JWT received from api");
            console.log(this.authService.getToken, "token from auth service");

            if(data.role === "CUSTOMER")
              this.router.navigate(["profile"]);
            else if(data.role === "ADMIN")
              this.router.navigate(["admin"]);

            return of(
              loginUserSuccess({principal : data}),
              showAlert({message:`Successfully logged in!`, resultType:'OK'}));
          }),
          catchError((_error)=>of(showAlert({message:`Unable tp perform login, ${_error.message}`, resultType:'failure'})))
  )})))

  _getActiveUser= createEffect(()=>
    this.actions$.pipe(
      ofType(getActiveUser),
      exhaustMap((action)=>{
        return this.userService.getActiveUser().pipe(
          map((data)=>{
            return getActiveUserSuccess({user:data});
          }),
          catchError((error)=> of(showAlert({message : "Unable to fetch User data", resultType : "failure"})))
        )
      })
    )
  )

}
