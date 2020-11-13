import types from './types';

export const initialState = {
  token: null,
  profile: null,
};

export default (state, action) => {
  switch (action.type) {
    case types.AUTHORIZE:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
