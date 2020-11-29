import types from './types';

export const initialState = {
  id: 0,
  name: '',
  level: '',
  players: [],
  state: null,
};

export default (state, action) => {
  switch (action.type) {
    case types.CREATE: {
      return {
        ...state,
        ...action.payload.game,
      };
    }
    case types.LOAD: {
      return {
        ...state,
        ...action.payload.game,
      };
    }
    case types.UPDATE: {
      return {
        ...state,
        ...action.payload.updates,
      };
    }
    case types.REMOVE: {
      return {
        ...initialState,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
