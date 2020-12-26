import logger from 'redux-logger';
import thunk from 'redux-thunk';
import localization from 'localization';

const rehydrationHandler = () => next => action => {
  if (action.type === 'persist/REHYDRATE') {
    const language = action.payload?.settings?.language;
    if (language) {
      localization.changeLanguage(language);
    }
  }
  return next(action);
};

const middlewares = [thunk, rehydrationHandler];

if (global.__DEV__) {
  middlewares.push(logger);
}

export default middlewares;
