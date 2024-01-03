import {Injectable} from "@angular/core";

@Injectable({
  providedIn : "root"
})
export class AuthService{
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

  get isAdmin() :boolean{
    return !!localStorage.getItem("JWT") && <string>localStorage.getItem("role") === 'ADMIN';
  }

  public clearStorage(){
    localStorage.clear();
  }

}
