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

const withRehydration = (id, Provider) => (params) => {
  const rehydrate = async (initialState, dispatch) => {
    const storedState = await storage.getItem(id);
    return dispatch({
      type: actions.rehydrate,
      payload: {
        state: storedState || initialState,
      },
    });
  };

  const hydrate = (state) => storage.setItem(id, state);

  return (
    <Provider
      {...params}
      onDidMount={rehydrate}
      onStateChange={hydrate}
    />
  );
};

export default class ReactStoreWithHydration {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(id, reducer, initialState) {
    const rehydratableReducer = rehydratable(reducer);
    const store = new ReactStore(rehydratableReducer, initialState);
    this.Context = store.Context;
    this.Provider = withRehydration(id, store.Provider);
    this.Consumer = store.Consumer;
    this.useStore = store.useStore;
    this.state = store.state;
    this.dispatch = store.dispatch;
  }
}
