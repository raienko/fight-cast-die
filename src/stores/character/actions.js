import {wait} from 'rn-units';
import Logger from 'rn-units/components/Logger';
import characterStore from 'src/stores/character';
import types from './types';

const requestDelay = 1000;

export const fetchMyCharacters = async () => {
  return characterStore.dispatch({
    type: types.FETCH_MY_CHARACTERS,
    payload: {
      characters: [],
    },
  });
};

export const fetchCharacter = async (id) => {
  return characterStore.dispatch({
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

export const getCharacters = async (ids) => {
  Logger.out('GET Characters');
  return ids.map((id) => ({
    name: 'Radom name',
    id,
    type: 'Random type',
    male: 'Random male',
  }));
};

export const createCharacter = async (character) => {
  Logger.out('Create character');
  await wait(requestDelay);
  const id = Date.now();
  const characters = [...characterStore.state?.characters].concat(id);
  Logger.in('Character created');
  return characterStore.dispatch({
    type: types.CREATE_CHARACTER,
    payload: {
      character,
      characters,
    },
  });
};

export const updateCharacter = async (id, changes) => {
  Logger.out('Update character');
  await wait(requestDelay);
  Logger.in('Character updated');
  return characterStore.dispatch({
    type: types.UPDATE_CHARACTER,
    payload: {
      changes,
    },
  });
};

export const selectCharacter = async (id) => {
  Logger.out('Select character');
  await wait(requestDelay);
  Logger.in('Character selected');
  return characterStore.dispatch({
    type: types.UPDATE_PROFILE,
    payload: {
      character: id,
    },
  });
};

export const switchCharacter = async () => {
  Logger.out('Switch character');
  await wait(requestDelay);
  Logger.in('Character switched');
  return characterStore.dispatch({
    type: types.SWITCH_CHARACTER,
  });
};

export const removeCharacter = async (id) => {
  Logger.out('Remove character');
  await wait(requestDelay);
  Logger.in('Character removed');
  return characterStore.dispatch({
    type: types.REMOVE_CHARACTER,
    payload: {
      id,
    },
  });
};

export const reset = async () => {
  Logger.warn('Reset');
  await wait(requestDelay);
  return characterStore.dispatch({type: types.RESET});
};
