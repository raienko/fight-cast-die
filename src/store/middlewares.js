import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (global.__DEV__) {
  middlewares.push(logger);
}

export default middlewares;
