import {throwError} from 'rn-units';
import ReactStore from './ReactStore';
import ScopedStorage from './ScopedStorage';

const storage = new ScopedStorage('hydrated');

export const actions = {
  rehydrate: 'rehydrate',
  reset: 'reset',
};

const rehydratable = (defaultReducer, initialState) => (state, action) => {
  switch (action.type) {
    case actions.rehydrate:
      return {
        ...action.payload.state,
        rehydrated: true,
      };
    case actions.reset:
      return {
        ...initialState,
      };
    default:
      return defaultReducer(state, action);
  }
};

export default class ReactStorePersist extends ReactStore {
  constructor(id, storageSetter, storageGetter, reducer, initialState) {
    if (!id || !reducer) {
      throwError("ReactStorePersist constructor requires 'id' and 'reducer')");
    }
    const persist = (state) => storage.setItem(id, state);
    const rehydrate = async (state, dispatch) => {
      const storedState = await storage.getItem(id);
      return dispatch({
        type: actions.rehydrate,
        payload: {
          state: storedState || state,
        },
      });
    };
    const rehydratableReducer = rehydratable(reducer, initialState);
    super(rehydratableReducer, initialState, rehydrate, persist);
  }
}
