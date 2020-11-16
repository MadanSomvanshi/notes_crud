import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducers,
  applyMiddleware(...middlewares),
);
export default store;
