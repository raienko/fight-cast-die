import {wait} from 'rn-units';
import Logger from 'rn-units/components/Logger';
import store from './index';
import types from './types';

const requestDelay = 1000;

export const createGame = async (config) => {
  Logger.out('Creating game');
  await wait(requestDelay);
  Logger.in('Game created!');
  return store.dispatch({
    type: types.CREATE_GAME,
    payload: {
      game: {
        id: 'asdfasdfar',
        map: 'jebus_cup',
        players: [],
        params: {},
        ...config,
      },
    },
  });
};

export const leaveGame = async () => {
  Logger.out('Leaving game');
  await wait(requestDelay);
  Logger.in('Left game!');
  return store.dispatch({
    type: types.LEAVE_GAME,
  });
};
