import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(state = false, action){
    switch(action.type){
        case types.USER_LOGGED_IN:
            return action.login;
        default:
            return state;
    }
}