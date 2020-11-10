import React from 'react';
import ReactStore from './ReactStore';
import ScopedStorage from './ScopedStorage';

const storage = new ScopedStorage('hydrated');

export const actions = {
  rehydrate: 'rehydrate',
};

const rehydratable = (defaultReducer) => (state, action) => {
  if (action.type === actions.rehydrate) {
    return {
      ...action.payload.state,
      rehydrated: true,
    };
  }
  return defaultReducer(state, action);
};

export default class ReactStoreWithHydration extends ReactStore {
  id;

  constructor(id, reducer, ...rest) {
    const rehydratableReducer = rehydratable(reducer);
    super(rehydratableReducer, ...rest);
    this.id = id;
  }

  Provider1 = (params) => {
    const rehydrate = async (initialState, dispatch) => {
      const storedState = await storage.getItem(this.id);
      return dispatch({
        type: actions.rehydrate,
        payload: {
          state: storedState || initialState,
        },
      });
    };

    const hydrate = (state) => {
      return storage.setItem(this.id, state);
    };

    const {Provider} = this;
    return (
      <Provider {...params} onDidMount={rehydrate} onStateChange={hydrate} />
    );
  };
}
