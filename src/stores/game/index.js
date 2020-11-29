import ReactStoreWithHydration from 'src/utils/ReactStoreWithHydration';
import reducer, {initialState} from './reducer';

export default new ReactStoreWithHydration('game', reducer, initialState);
