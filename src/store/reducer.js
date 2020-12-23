import {combineReducers} from 'redux';
import auth from 'src/store/auth';
import settings from 'src/store/settings';

export default combineReducers({
  auth,
  settings,
});
