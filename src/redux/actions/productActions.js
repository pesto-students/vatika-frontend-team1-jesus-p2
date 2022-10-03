import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (plant) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: plant,
  };
};

export const removeFromCart = (plant) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: plant,
  };
};

export const inccQuantity = (plant) => {
  return {
    type: ActionTypes.INCC_QUANTITY,
    payload: plant,
  };
};

export const descQuantity = (plant) => {
  return {
    type: ActionTypes.DESC_QUANTITY,
    payload: plant,
  };
};

export const filterBySearch = (value) => {
  return {
    type: ActionTypes.FILTER_BY_SEARCH,
    payload: value,
  };
};

export const sortByPrice = (value) => {
  return {
    type: ActionTypes.SORT_BY_PRICE,
    payload: value,
  };
};



export const clearFilter = () => {
  return {
    type: ActionTypes.CLEAR_FILTER,
  };
};

export const filterByGarden = (value) => {
  return {
    type: ActionTypes.FILTER_BY_GARDEN,
    payload: value,
  };
};
export const filterByInterior = (value) => {
  return {
    type: ActionTypes.FILTER_BY_INTERIOR,
    payload: value,
  };
};
export const filterByOffice = (value) => {
  return {
    type: ActionTypes.FILTER_BY_OFFICE,
    payload: value,
  };
};


export const setAddress = (address) => {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: address,
  };
};

export const cartTotal = (total) => {
  return {
    type: ActionTypes.CART_TOTAL,
    payload: total,
  };
};
