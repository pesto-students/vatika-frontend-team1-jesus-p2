import { ActionTypes } from "../constants/ActionTypes";

const initialAddress = {
  allAddress: [],
};

export const addressReducer = (state = initialAddress, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADDRESS:
      return { ...state, allAddress: payload };
    default:
      return state;
  }
};
