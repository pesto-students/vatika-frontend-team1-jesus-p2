import { ActionTypes } from "../constants/ActionTypes";

const initialCart = {
  cart: [],
};

export const cartReducer = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.name !== payload.name),
      };
    case ActionTypes.INCC_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.name === payload.name ? (c.qty = c.qty + 1) : c.qty
        ),
      };
    case ActionTypes.DESC_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.name === payload.name ? (c.qty = c.qty - 1) : c.qty
        ),
      };
    default:
      return state;
  }
};
