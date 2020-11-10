import React, {useReducer, useContext, useEffect, useRef} from 'react';

export default class ReactStore {
  Context = null;
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = (failedAction) => console.log(`Failed to dispatch: ${failedAction.type}`);

  constructor(reducer, initialState) {
    const Context = React.createContext();
    this.Context = Context;

    const Provider = ({onDidMount, onStateChange, ...rest}) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      this.state = state;
      this.dispatch = (action) => dispatch(action);

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

    this.Provider = Provider;
    this.Consumer = Context.Consumer;
    this.useStore = () => useContext(Context);
  }
}
