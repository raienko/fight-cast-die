import React, {useState, useEffect} from 'react';
import Button from 'src/components/Button';
import Loading from './Loading';
import Level from './Level';
import Viewport from './Viewport';
import CurrentPlayer from './CurrentPlayer';
import Terrain from './Terrain';
import Mobs from './Mobs';
import Players from './Players';
import GridHighlight from './GridHighlight';
import globalStore from 'src/globalStore';
import * as globalActions from 'src/globalStore/actions';

export default () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [character, setCharacter] = useState(null);
  const [level, setLevel] = useState([]);
  const { state } = globalStore.useStore();
  console.log({ state });
  return null;

  // return (
  //   <Viewport>
  //     <Loading>
  //       <Level>
  //         <Terrain />
  //         <GridHighlight />
  //         <Mobs />
  //         <Players />
  //         <Controller />
  //         <CurrentPlayer />
  //       </Level>
  //     </Loading>
  //   </Viewport>
  // );
};
