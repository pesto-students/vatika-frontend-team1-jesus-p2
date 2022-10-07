import { combineReducers } from "redux";
import {
  productReducer,
  selectProductReducer,
  filterProductReducer,
  addressReducer,
  totalCartReducer,
} from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
  filter: filterProductReducer,
  address: addressReducer,
  cartTotal: totalCartReducer,
});

export default reducers;
