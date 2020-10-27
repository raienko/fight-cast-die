import React, {useEffect} from 'react';
import {wait, seconds} from 'rn-units';
import {useLoading} from './Loading';
import {useLevel} from './Level';
import {useCharacter} from './Character';
import {useViewport} from './Viewport';
import {cellSize} from '../../constants';

const Controller = () => {
  const {hideLoading} = useLoading();
  const {changeLevel} = useLevel();
  const {character} = useCharacter();
  const {moveCamera, toggleScroll} = useViewport();

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    changeLevel(character.area);
    await wait(seconds(4));
    hideLoading();
    await wait(seconds(2));
    moveCamera(character.x * cellSize, character.y * cellSize);
    toggleScroll(true);
  };

  return null;
};

export default Controller;
