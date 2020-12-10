import types from './types';

export const initialState = {
  game: null,
};

export default (state, action) => {
  switch (action.type) {
    case types.CREATE_GAME: {
      return {
        ...state,
        game: action.payload.game,
      };
    }
    case types.LEAVE_GAME: {
      return {
        ...state,
        game: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
