import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Level from './Level';
import Viewport from './Viewport';
import CurrentPlayer from './CurrentPlayer';
import Controller from './Controller';
import Terrain from './Terrain';
import Mobs from './Mobs';
import Players from './Players';
import GridHighlight from './GridHighlight';
import globalStore from 'src/store';
import * as globalActions from 'src/store/actions';

export default () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [character, setCharacter] = useState(null);
  const [level, setLevel] = useState([]);
  const store = globalStore.useStore();
  console.log({ state: store.state });
  useEffect(() => {
    if (store.state.rehydrated && !store.state.token) {
      console.log('Auth!');
      globalActions.authWithPhoneNumber();
    }
  }, [store]);
  // const start = async () => {
  //   const currentCharacter = await fetchCurrentCharacter();
  //   if (!currentCharacter) {
  //     throw new Error()
  //   }
  //   const currentLevel = await fetchCurrentLevel(currentCharacter.level);
  //   setCharacter(currentCharacter);
  //   setLevel(currentLevel);
  //   await eventBus.enterRoom(currentCharacter.room);
  //   setLoading(false);
  // };
  //
  // const stop = () => {
  //   console.warn('STOP');
  // };
  //
  // useEffect(() => {
  //   start().catch(err => {
  //     console.log({
  //       message: err.message,
  //       code: err.code,
  //       data: err.data,
  //     });
  //     setError(err.code || err.message)
  //   });
  //   return stop;
  // }, []);

  // if (error) {
  //   return (
  //     <ErrorScreen
  //       error={error}
  //       onRefresh={start}
  //     />
  //   );
  // }

  return null;

  return (
    <Viewport>
      <Loading>
        <Level>
          <Terrain />
          <GridHighlight />
          <Mobs />
          <Players />
          <Controller />
          <CurrentPlayer />
        </Level>
      </Loading>
    </Viewport>
  );
};
