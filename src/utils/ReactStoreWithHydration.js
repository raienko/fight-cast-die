import ReactStorePersist from 'rn-units/components/ReactStorePersist';
import storage from './storage';

export default (id, reducer, initialState) => {
  const key = `__cached_${id}`;
  return new ReactStorePersist(
    key,
    storage.setItem,
    storage.getItem,
    reducer,
    initialState,
  );
};
