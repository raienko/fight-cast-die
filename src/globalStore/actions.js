import globalStore from 'src/globalStore';
import types from './types';

export const authWithPhoneNumber = (phoneNumber, code) => {
  const token = 'fake_mobile_token';
  return globalStore.dispatch({
    type: types.AUTHORIZE,
    payload: {
      token,
    },
  });
};

export const logout = () => {
  return globalStore.dispatch({type: types.LOGOUT});
};
