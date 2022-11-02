import { ActionTypes } from "../constants/ActionTypes";

const initState = {
  userAddress: {},
  userId: localStorage.getItem("userId"),
};

export const userDetailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_ADDRESS:
      return { ...state, userAddress: payload };
    case ActionTypes.USER_ID:
      return { ...state, userId: payload };
    default:
      return state;
  }
};
