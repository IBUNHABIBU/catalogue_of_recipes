import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

export const middlewares = [thunk];

export const myStore = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

const store = myStore(reducers);

export default store;
