import React, {useEffect} from 'react';
import {wait, seconds} from 'rn-units';
import {useLoading} from './Loading';
import {useLevel} from './Level';
import {useViewport} from './Viewport';

const Controller = () => {
  const {hideLoading} = useLoading();
  const {changeLevel} = useLevel();
  // const {character} = useCharacter();
  const {moveCamera, toggleScroll} = useViewport();

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    changeLevel('forest_0');
    await wait(seconds(4));
    hideLoading();
    await wait(seconds(2));
    toggleScroll(true);
  };

  return null;
};

export default Controller;
