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

  constructor(id, reducer, initialState) {
    const rehydratableReducer = rehydratable(reducer);
    super(rehydratableReducer, initialState);
    this.id = id;
  }

  async rehydrate(initialState, dispatch) {
    const storedState = await storage.getItem(this.id);
    return dispatch({
      type: actions.rehydrate,
      payload: {
        state: storedState || initialState,
      },
    });
  }

  hydrate(state) {
    return storage.setItem(this.id, state);
  }

  Provider1 = (params) => {
    return this.Provider({
      ...params,
      onDidMount: this.rehydrate,
      onStateChange: this.hydrate,
    });
  };
}
