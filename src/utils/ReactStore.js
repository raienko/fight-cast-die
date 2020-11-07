import React, {useReducer, useEffect, useContext} from 'react';

export default class ReactStore {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(reducer, initialState) {
    const Context = React.createContext();

    const Provider = (params) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      this.state = state;
      this.dispatch = dispatch;
      return <Context.Provider {...params} value={{state, dispatch}} />;
    };

    this.Context = Context;
    this.Provider = Provider;
    this.Consumer = Context.Consumer;
    this.useStore = () => useContext(Context);
  }
}
