import React, {useReducer, useContext, useEffect} from 'react';

export default class ReactStore {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(reducer, initialState) {
    const Context = React.createContext();

    const Provider = ({onDidMount, onStateChange, ...rest}) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      this.state = state;
      this.dispatch = dispatch;

      useEffect(() => {
        if (onDidMount) {
          onDidMount(state, dispatch);
        }
      }, []);

      useEffect(() => {
        if (onStateChange) {
          onStateChange(state, dispatch);
        }
      }, [state]);

      return <Context.Provider {...rest} value={{state, dispatch}} />;
    };

    this.Context = Context;
    this.Provider = Provider;
    this.Consumer = Context.Consumer;
    this.useStore = () => useContext(Context);
  }
}
