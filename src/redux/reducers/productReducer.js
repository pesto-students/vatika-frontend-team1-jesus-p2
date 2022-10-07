import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: [],
  cart: [],
};

const initialAddress = {
  allAddress: [],
};

const initialFilter = {
  searchQuery: "",
  toggle: true,
  byGarden: false,
  byInterior: false,
  byOffice: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
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

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const filterProductReducer = (
  state = initialFilter,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SORT_BY_PRICE:
      return { ...state, sort: payload };
    case ActionTypes.FILTER_BY_SEARCH:
      return { ...state, searchQuery: payload };
    case ActionTypes.FILTER_BY_GARDEN:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: !state.byGarden,
        byInterior: false,
        byOffice: false,
      };
    case ActionTypes.FILTER_BY_INTERIOR:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: false,
        byInterior: !state.byInterior,
        byOffice: false,
      };
    case ActionTypes.FILTER_BY_OFFICE:
      return {
        ...state,
        category: payload,
        toggle: !state.toggle,
        byGarden: false,
        byInterior: false,
        byOffice: !state.byOffice,
      };
    case ActionTypes.CLEAR_FILTER: {
      return {
        searchQuery: "",
        toggle: true,
        byGarden: false,
        byInterior: false,
        byOffice: false,
      };
    }
    default:
      return state;
  }
};

export const totalCartReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.CART_TOTAL:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const addressReducer = (state = initialAddress, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADDRESS:
      return { ...state, allAddress: payload };
    default:
      return state;
  }
};
