import React from 'react';
import {Image} from 'react-native';
import {cellSize} from 'src/constants';
import {useLevel} from './Level';

const Terrain = () => {
  const {level} = useLevel();

  const width = level.tilemap[0].length * cellSize;
  const height = level.tilemap.length * cellSize;
  const size = {width, height};
  return (
    <Image
      style={size}
      source={level.background}
      resizeMode="stretch"
    />
  );
};

export default Terrain;
