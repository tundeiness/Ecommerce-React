import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main';

const initialState = {};
export default createStore(rootReducer, initialState, applyMiddleware(thunk));
