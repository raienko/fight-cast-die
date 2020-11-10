import React from 'react';
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

export default class ReactStoreWithHydration extends ReactStore {
  id;

  constructor(id, reducer, initialState) {
    const rehydratableReducer = rehydratable(reducer, initialState);
    super(rehydratableReducer, initialState);
    this.id = id;
  }

  rehydrate = async (initialState, dispatch) => {
    const storedState = await storage.getItem(this.id);
    return dispatch({
      type: actions.rehydrate,
      payload: {
        state: storedState || initialState,
      },
    });
  };

  hydrate = (state) => {
    return storage.setItem(this.id, state);
  };

  reset = () => {
    return this.dispatch({type: actions.reset});
  };

  RehydratableProvider = (props) => {
    return this.Provider({
      ...props,
      onDidMount: this.rehydrate,
      onStateChange: this.hydrate,
    });
  };
}
