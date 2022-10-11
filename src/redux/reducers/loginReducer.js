import { ActionTypes } from "../constants/ActionTypes";

const initialLogIn={
    isLogin:false
}

export const loginReducer = (state =initialLogIn, { type, payload }) => {
    switch (type) {
      case ActionTypes.USER_LOGIN:
        return { ...state,isLogin:!state.isLogin };
    
      default:
        return state;
    }
  };