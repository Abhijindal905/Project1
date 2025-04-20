import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import {compositeWithDevTools} from 'redux-devtools-extension'