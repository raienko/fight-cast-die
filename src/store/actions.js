import storage from 'src/utils/storage';
import {initialState} from './reducer';
import * as types from './types';
import buffer from './buffer';

export const authWithPhoneNumber = (phoneNumber, code) => {
  const token = 'fake_token';
  return buffer.dispatch({
    type: types.AUTHORIZE,
    payload: {token},
  });
};

export const logout = () => {
  return buffer.dispatch({type: types.LOGOUT});
};

export const save = async (state) => {
  return storage.setItem('store', state);
};

export const restore = async () => {
  const restoredState = await storage.getItem('store');
  return buffer.dispatch({
    type: types.REHYDRATE,
    payload: {
      state: restoredState || initialState,
    },
  });
};
