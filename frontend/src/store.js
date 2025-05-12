import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducers, productsListReducers } from './reducers/productsReducers';
import { userLoginReducers, userSingupReducers } from './reducers/userReducers';

const reducers = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSingupReducers
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
