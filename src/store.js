import { createStore, applyMiddleware, compose } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers/image';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
