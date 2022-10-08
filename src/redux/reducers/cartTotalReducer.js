import { ActionTypes } from "../constants/ActionTypes";


export const cartTotalReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.CART_TOTAL:
        return { ...state, ...payload };
  
      default:
        return state;
    }
  };