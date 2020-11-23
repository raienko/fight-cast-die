import {wait} from 'rn-units';
import Logger from 'rn-units/components/Logger';
import globalStore from 'src/stores/global/index';
import types from './types';

const requestDelay = 1000;

export const authWithPhoneNumber = async (phoneNumber, code) => {
  Logger.out('Auth with phone number');
  await wait(requestDelay);
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
  await wait(requestDelay);
  Logger.in('User profile fetched');
  return globalStore.dispatch({
    type: types.FETCH_PROFILE,
    payload: {
      profile: {
        name: 'John Sparrow',
        birthday: '2010123',
        premium: false,
      },
    },
  });
};

export const updateUserProfile = async (changes) => {
  Logger.out('Updating user profile');
  await wait(requestDelay);
  Logger.in('User profile updated');
  return globalStore.dispatch({
    type: types.FETCH_PROFILE,
    payload: {
      changes,
    },
  });
};

export const fetchSettings = async () => {
  Logger.out('Fetch settings');
  await wait(requestDelay);
  Logger.in('Settings fetched');
  return globalStore.dispatch({
    type: types.FETCH_PROFILE,
    payload: {
      settings: {
        volume: false,
        music: false,
        vibration: false,
        notifications: false,
        language: 'en',
      },
    },
  });
};

export const updateSettings = async (changes) => {
  Logger.out('Updating settings');
  await wait(requestDelay);
  Logger.in('Settings updated');
  return globalStore.dispatch({
    type: types.FETCH_PROFILE,
    payload: {
      changes,
    },
  });
};

export const logout = async () => {
  Logger.warn('Logout');
  await wait(requestDelay);
  return globalStore.dispatch({type: types.LOGOUT});
};
