import {createReducer, on} from "@ngrx/store";
import {UserState} from "./User.state";
import {
  addUserSuccess, deleteUserSuccess, getActiveUserSuccess,
  loadAllUsersFailure,
  loadAllUsersSuccess,
  loadUserSuccess,
  openPopUP,
  updateUserSuccess
} from "./User.action";
import {showAlert} from "../common/App.Action";
import {User} from "../../models/User.model";


const _userReducer = createReducer(UserState,
  on(loadAllUsersSuccess, (state, action)=>{
    return { ...state,  listOfUsers : action.list, err: '' }
  }),
  on(loadAllUsersFailure, (state, action)=>{
    return { ...state, listOfUsers : [], err: action.err }
  }),
  on(addUserSuccess, (state, action)=>{
    return { ...state, listOfUsers : action.input, err: '' }
  }),
  on(updateUserSuccess,(state,action)=>{
    console.log(action.list.length, "from reducer");
    return{
      ...state,
      listOfUsers : [...action.list],
      err : ''
    }
  }),
  on(deleteUserSuccess,(state,action)=>{
    console.log(action.list.length, "from reducer");
    return{
      ...state,
      listOfUsers : [...action.list],
      err : ''
    }
  }),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(getActiveUserSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(openPopUP, (state, action) => {
    return {
      ...state,
      user : {
        id : "",
        username : "",
        email : "",
        role : "",
        phoneNumber : "",
        picture : "",
        password : "",
        confirmPassword : ""
      }
    }
  })


)

export const UserReducer = (state :any, action :any) =>{
  return _userReducer(state, action);
}
