import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserStateModel} from "./User.state";

const getUserState = createFeatureSelector<UserStateModel>('userReducer');

export const getUsersList = createSelector(getUserState, (state)=>{
  return state.listOfUsers;
})

export const getUser = createSelector(getUserState, (state)=>{
  return state.user;
})
