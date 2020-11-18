import {wait} from 'rn-units';
import Logger from 'rn-units/components/Logger';
import globalStore from 'src/globalStore';
import types from './types';

export const authWithPhoneNumber = async (phoneNumber, code) => {
  Logger.out('Auth with phone number');
  await wait(2000);
  const token = 'fake_mobile_token';
  Logger.in('Authorized!');
  return globalStore.dispatch({
    type: types.AUTHORIZE,
    payload: {
      token,
    },
  });
};

export const fetchUserProfile = async () => {
  Logger.out('Fetch user profile');
  await wait(2000);
  Logger.in('User profile fetched');
  return globalStore.dispatch({
    type: types.FETCH_PROFILE,
    payload: {
      profile: {
        name: 'John Sparrow',
        birthday: '2010123',
        premium: false,
        characters: [12, 13, 14, 15],
        character: null,
      },
    },
  });
};

export const fetchCharacter = async () => {
  return globalStore.dispatch({
    type: types.FETCH_CHARACTER,
    payload: {
      character: {
        name: 'CharName',
        class: 'knight',
        level: 10,
        equipment: [],
        inventory: [],
        skills: [],
        stats: {},
      },
    },
  });
};

export const logout = async () => {
  Logger.warn('Logout');
  await wait(2000);
  return globalStore.dispatch({type: types.LOGOUT});
};
