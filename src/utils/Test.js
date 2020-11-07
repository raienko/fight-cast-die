import ReactStore from './ReactStore';
export default new ReactStore((state, action) => {
  console.log('ACTIOOOON', action);
  return state;
}, {home: true})
