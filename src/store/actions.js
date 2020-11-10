import store from 'src/store';
import * as types from './types';

export const authWithPhoneNumber = (phoneNumber, code) => {
  const token = 'fake_token';
  console.log({ store });
  return store.dispatch({
    type: types.AUTHORIZE,
    payload: {
      token,
    },
  });
};

export const logout = () => {
  return store.dispatch({type: types.LOGOUT});
};
