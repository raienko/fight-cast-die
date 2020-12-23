import logger from 'redux-logger';
import thunk from 'redux-thunk';
import localization from 'localization';

const rehydrationHandler = () => next => action => {
  if (action.type === 'persist/REHYDRATE') {
    localization.changeLanguage(action.payload.settings.language);
  }
  return next(action);
};

const middlewares = [thunk, rehydrationHandler];

if (global.__DEV__) {
  middlewares.push(logger);
}

export default middlewares;
