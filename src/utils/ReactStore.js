import React, {useReducer, useContext} from 'react';

export default class ReactStore {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(reducer, initialState, onStateChange) {
    const Context = React.createContext();

    const Provider = (params) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      this.state = state;
      this.dispatch = dispatch;
      if (onStateChange) {
        onStateChange(state);
      }
      return <Context.Provider {...params} value={{state, dispatch}} />;
    };

    this.Context = Context;
    this.Provider = Provider;
    this.Consumer = Context.Consumer;
    this.useStore = () => useContext(Context);
  }
}
