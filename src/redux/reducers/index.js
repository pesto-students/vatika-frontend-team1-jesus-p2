import { combineReducers } from "redux";
import { allProductReducer, selectProductReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { filterProductReducer } from "./filterReducer";
import { addressReducer } from "./addressReducer";
import { cartTotalReducer } from "./cartTotalReducer";
import {loginReducer} from "./loginReducer";

export const reducers = combineReducers({
  login:loginReducer,
  allProducts: allProductReducer,
  product: selectProductReducer,
  cart: cartReducer,
  filter: filterProductReducer,
  address: addressReducer,
  cartTotal: cartTotalReducer,
});

export default reducers;
