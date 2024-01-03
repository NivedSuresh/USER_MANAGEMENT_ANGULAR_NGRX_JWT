import {User} from "../../models/User.model";

export interface UserStateModel {
  listOfUsers :User[];
  user :User;
  err :string;
}

export const UserState :UserStateModel = {
  listOfUsers : [],

  user : {
    id : "",
    username : "",
    email : "",
    role : "",
    phoneNumber : "",
    picture : "",
    password : "",
    confirmPassword : ""
  },

  err : ""
}

