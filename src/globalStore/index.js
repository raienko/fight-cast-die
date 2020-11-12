import ReactStoreWithHydration from 'src/utils/ReactStoreWithHydration';
import reducer, {initialState} from './reducer';

const GlobalStore = new ReactStoreWithHydration('global', reducer, initialState);
export default GlobalStore;
