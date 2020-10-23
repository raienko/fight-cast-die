import React from 'react';
import {View, Image} from 'react-native';
import {cellSize} from 'src/constants';
import {useLevel} from './Level';

const Terrain = () => {
  const {level} = useLevel();

  const width = level.tilemap[0].length * cellSize;
  const height = level.tilemap.length * cellSize;
  const size = {width, height};

  const tiles = [];
  level.tilemap.forEach((row, y) => {
    row.forEach((tile, x) => {
      tiles.push(<View key={`${x}_${y}`} style={{width: cellSize, height: cellSize, position: 'absolute', left: x * cellSize, top: y * cellSize, backgroundColor: tile ? 'red' : 'green', opacity: 0.4}} />)
    });
  })
  return (
    <>
    <Image
      style={size}
      source={level.background}
      resizeMode="stretch"
    />
      {
        tiles
      }
    </>
  );
};

export default Terrain;
