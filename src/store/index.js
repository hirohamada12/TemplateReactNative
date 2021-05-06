import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


import errorReducer from './common/reducers/ErrorReducer';
import statusReducer from './common/reducers/StatusReducer';
import productReducer from './common/reducers/DemoReducer';

const logger = createLogger();
export const rootReducer = combineReducers({productReducer, errorReducer, statusReducer});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);
