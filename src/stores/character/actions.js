import {wait} from 'rn-units';
import Logger from 'rn-units/components/Logger';
import globalStore from 'src/stores/global/index';
import types from './types';

export const fetchMyCharacters = async () => {
  return globalStore.dispatch({
    type: types.FETCH_MY_CHARACTERS,
    payload: {
      characters: [],
    },
  });
};

export const fetchCharacter = async (id) => {
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

export const createCharacter = async (character) => {
  Logger.out('Create character');
  await wait(2000);
  const id = Date.now();
  const characters = [...globalStore.state?.profile?.characters].concat(id);
  Logger.in('Character created');
  return globalStore.dispatch({
    type: types.UPDATE_PROFILE,
    payload: {
      characters,
    },
  });
};

export const updateCharacter = async (id, changes) => {
  Logger.out('Update character');
  await wait(2000);
  Logger.in('Character updated');
  return globalStore.dispatch({
    type: types.UPDATE_CHARACTER,
    payload: {
      changes,
    },
  });
};

export const selectCharacter = async (id) => {
  Logger.out('Select character');
  await wait(2000);
  Logger.in('Character selected');
  return globalStore.dispatch({
    type: types.UPDATE_PROFILE,
    payload: {
      character: id,
    },
  });
};

export const removeCharacter = async (id) => {
  Logger.out('Remove character');
  await wait(2000);
  Logger.in('Character removed');
  return globalStore.dispatch({
    type: types.REMOVE_CHARACTER,
    payload: {
      id,
    },
  });
};

export const reset = async () => {
  Logger.warn('Reset');
  await wait(2000);
  return globalStore.dispatch({type: types.RESET});
};
