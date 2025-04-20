import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducers, productsListReducers } from './reducers/productsReducers';

const reducers = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
