import React, {useReducer, useContext, useEffect} from 'react';
import * as actions from './actions';
import reducer, {initialState} from './reducer';
import buffer from './buffer';

export const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  buffer.dispatch = dispatch;

  useEffect(() => {
    actions.restore();
  }, []);

  if (state.ready) {
    actions.save(state);
  }

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
