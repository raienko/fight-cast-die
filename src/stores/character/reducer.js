import types from './types';

export const initialState = {
  characters: [],
  character: null,
  quests: null,
  friends: null,
};

export default (state, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
      };
    case types.CREATE_CHARACTER:
      return {
        ...state,
        characters: action.payload.characters,
        character: action.payload.character,
      };
    case types.FETCH_CHARACTER:
      return {
        ...state,
        character: action.payload.character,
      };
    case types.UPDATE_CHARACTER:
      return {
        ...state,
        character: {
          ...state.character,
          ...action.payload.changes,
        },
      };
    case types.SWITCH_CHARACTER:
      return {
        ...state,
        character: null,
      };
    case types.RESET:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
