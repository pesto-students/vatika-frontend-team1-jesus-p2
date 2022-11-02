import { ActionTypes } from "../constants/ActionTypes";

const initialLogIn={
    isLogin:localStorage.getItem("token")!==null?true:false
}

export const loginReducer = (state =initialLogIn, { type, payload }) => {
    switch (type) {
      case ActionTypes.USER_LOGIN:
        return { ...state,isLogin:payload };
    
      default:
        return state;
    }
  };