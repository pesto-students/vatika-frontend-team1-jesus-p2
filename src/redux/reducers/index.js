import {combineReducers} from 'redux';
import {productReducer, selectProductReducer ,filterProductReducer} from './productReducer';

export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
    filter:filterProductReducer,
})

export default reducers;