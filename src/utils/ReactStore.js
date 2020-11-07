import React, {useReducer, useEffect, useContext} from 'react';

export default (reducer, initialState) => {
  const store = {
    state: null,
    dispatch: () => {},
    Context: null,
    Provider: () => {},
    Consumer: () => {},
    useStore: () => {},
  };

  const Context = React.createContext();
  const Provider = (params) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    store.state = state;
    store.dispatch = dispatch;

    return <Context.Provider {...params} value={{state, dispatch}} />;
  };

  store.Context = Context;
  store.Provider = Provider;
  store.Consumer = Context.Consumer;
  store.useStore = () => useContext(Context);

  return store;
};
