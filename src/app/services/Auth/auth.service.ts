import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {UserService} from "../user.service";

@Injectable({
  providedIn : "root"
})
export class AuthService{

  constructor(
    private http : HttpClient
  ) {}
  public setTokenAndRole(token :string, role :string){
    localStorage.setItem("JWT", token);
    localStorage.setItem("role", role);
  }
  get getToken() :string | null{
    return localStorage.getItem("JWT");
  }
  get getRole() :string | null{
    return localStorage.getItem("role");
  }

  get isAuthenticated() :boolean{
    return !!localStorage.getItem("JWT");
  }

  get isAdmin(): Promise<boolean> {
    return firstValueFrom(this.http.get<boolean>("http://localhost:8080/admin"));
  }

  public clearStorage(){
    localStorage.clear();
  }

  public logout(){
    console.log("Logout triggered");
    return this.http.get("http://localhost:8080/logout");
  }

}
