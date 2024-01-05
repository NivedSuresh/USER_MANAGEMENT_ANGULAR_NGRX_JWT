import {createAction, props} from "@ngrx/store";
import {Principal, User} from "../../models/User.model";
import {LoginRequest} from "../../models/Payloads.models";

export const LOAD_USER = "[user, get] load user";
export const LOAD_USER_FAILURE = "[user, get] load user failure";
export  const LOAD_USER_SUCCESS = "[user, get] load user success"
export const LOAD_ALL_USERS_FAILURE = "[admin, get] load all users failure";
export const LOAD_ALL_USERS_SUCCESS = "[admin, get] load all users success";
export const LOAD_ALL_USERS = "[admin, get] load all users";
export const ADD_USER = "[post] add user";
export const ADD_USER_SUCCESS = "[post] add user failure";
export const ADD_USER_FAILURE = "[post] add user success";

export const UPDATE_USER = "[put] update user";
export const UPDATE_USER_SUCCESS = "[put] update user failure";
export const UPDATE_USER_FAILURE = "[put] update user success";

export const DELETE_USER = "[delete] user";
export const DELETE_USER_SUCCESS = "[delete] user success";

export const LOGIN_USER_AND_ADMIN = "[auth] user and admin login";
export const LOGIN_USER_AND_ADMIN_SUCCESS = "[auth] user and admin login success";

export const OPEN_POPUP = "open popup";


export const GET_ACTIVE_USER = "[get, user] get active user";
export const GET_ACTIVE_USER_SUCCESS = "[get, user] get active user success";

export const UPLOAD_PICTURE = "[post, user] upload image"
export const UPLOAD_PICTURE_SUCCESS = "[post, user] upload image success"

export const LOGOUT = "logout";
export const LOGOUT_SUCCESS = "logout success";

export const loadUser = createAction(
  LOAD_USER,
  props<{ id: string }>()
);
export const loadUserFailure = createAction(
  LOAD_USER_FAILURE,
  props<{err : string}>())
;
export const loadUserSuccess = createAction(
  LOAD_USER_SUCCESS,
  props<{user : User}>()
);

export const loadAllUsers = createAction(LOAD_ALL_USERS);
export const loadAllUsersSuccess = createAction(
  LOAD_ALL_USERS_SUCCESS,
  props<{list : User[]}>()
);
export const loadAllUsersFailure = createAction(
  LOAD_ALL_USERS_FAILURE,
  props<{err : string}>()
);


export const addUser = createAction(
  ADD_USER,
  props<{input : User}>()
);
export const addUserFailure = createAction(
  ADD_USER_FAILURE,
  props<{err : string}>()
);
export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ input : User[]}>()
);


export const updateUser= createAction(UPDATE_USER,props<{input:User}>())
export const updateUserSuccess= createAction(UPDATE_USER_SUCCESS,props<{list:User[]}>())

export const updateUserFailure = createAction(
  UPDATE_USER_FAILURE,
  props<{err : string}>()
);

export const openPopUP = createAction(OPEN_POPUP);

export const deleteUser = createAction(
  DELETE_USER,
  props<{user : User}>()
);
export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{list : User[]}>()
);

export const loginUser = createAction(
  LOGIN_USER_AND_ADMIN,
  props<{loginRequest : LoginRequest}>()
);
export const loginUserSuccess = createAction(
  LOGIN_USER_AND_ADMIN_SUCCESS,
  props<{principal : Principal}>()
);

export const getActiveUser = createAction(GET_ACTIVE_USER);
export const getActiveUserSuccess = createAction(
  GET_ACTIVE_USER_SUCCESS,
  props<{user : User}>()
);

export const uploadPicture = createAction(
  UPLOAD_PICTURE,
  props<{formData : FormData}>()
);
export const uploadPictureSuccess = createAction(
  UPLOAD_PICTURE_SUCCESS,
  props<{user : User}>()
);

export const onLogout = createAction( LOGOUT );
export const onLogoutSuccess = createAction(LOGOUT_SUCCESS);
