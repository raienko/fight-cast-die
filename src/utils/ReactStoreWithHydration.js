import ReactStore from './ReactStore';
import LocalStorage from './LocalStorage';

const storage = new LocalStorage('__cached_stores/');

const actions = {
  rehydrate: '_rehydrate',
};

const withRehydration = (defaultReducer) => (state, action) => {
  if (action.type === actions.rehydrate) {
    return {
      ...action.payload.state,
      __rehydrated: true,
    };
  }
  return defaultReducer(state, action);
};

const hydrate = (key) => (state) => storage.setItem(key, state);

export default class ReactStoreWithHydration {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(key, reducer, initialState) {
    const rehyratableReducer = withRehydration(reducer);
    const {
      Context,
      Provider,
      Consumer,
      useStore,
      state,
      dispatch,
    } = new ReactStore(rehyratableReducer, initialState, hydrate(key));

    this.Context = Context;
    this.Provider = Provider;
    this.Consumer = Consumer;
    this.useStore = useStore;
    this.state = state;
    this.dispatch = dispatch;
    this.isRehydrated = () => !!state.__rehydrated;
    this.rehydrate = async () => {
      const cachedState = await storage.getItem(key);
      return dispatch({
        type: actions.rehydrate,
        payload: {
          state: cachedState || initialState,
        },
      });
    };
  }
}
