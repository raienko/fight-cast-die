import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {cellSize} from 'src/constants';

const Terrain = ({level}) => {
  if (!level) {
    return null;
  }

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

Terrain.propTypes = {
  level: PropTypes.object.isRequired,
};

Terrain.defaultProps = {
  level: null,
};

export default Terrain;
