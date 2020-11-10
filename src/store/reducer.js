import * as types from './types';

export const initialState = {
  token: null,
  ready: false,
};

export default (state, action) => {
  switch (action.type) {
    case types.AUTHORIZE:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
