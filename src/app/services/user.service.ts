import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Principal, User} from "../sharable/models/User.model";
import {LoginRequest} from "../sharable/models/Payloads.models";

@Injectable({providedIn : "root"})
export class UserService {

  private readonly adminModule :string = "http://localhost:8080/admin";
  private readonly commonModule :string = "http://localhost:8080";
  constructor(
    private http :HttpClient,
  ) { }

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.adminModule.concat("/get_all_users"));
  }

  public deleteById(id :string) :Observable<User[]>{
    return this.http.delete<User[]>(this.adminModule.concat(`/delete/${id}`));
  }


  public addUser(user :User) :Observable<User[]>{
    return this.http.post<User[]>(this.commonModule.concat('/add_user'), user);
  }

  getUser(id: string) :Observable<any> {
    return this.http.get(this.commonModule.concat(`/get_user/${id}`));
  }

  updateUser(user :User):Observable<User[]> {
    return this.http.put<User[]>(this.adminModule.concat("/add_user"), user);
  }


  loginUser(loginRequest: LoginRequest) :Observable<Principal> {
    return this.http.post<Principal>(this.commonModule.concat("/login"), loginRequest);
  }

  getActiveUser() :Observable<User> {
    return this.http.get<User>(this.commonModule.concat("/get_principal"));
  }
}
