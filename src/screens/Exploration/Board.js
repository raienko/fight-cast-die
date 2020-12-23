import React from 'react';
import {Image} from 'react-native';
import {cellSize} from 'src/constants';
import PropTypes from 'prop-types';

export default class Board extends React.Component {
  static propTypes = {
    tilemap: PropTypes.array,
    background: PropTypes.any,
  };

  static defaultProps = {
    tilemap: undefined,
    background: undefined,
  };

  shouldComponentUpdate(nextProps) {
    const {tilemap, background} = this.props;
    const currentTilemap = JSON.stringify(tilemap);
    const nextTilemap = JSON.stringify(nextProps.tilemap);

    const tilemapChanged = currentTilemap !== nextTilemap;
    const backgroundChanged = background !== nextProps.background;

    return tilemapChanged || backgroundChanged;
  }

  render() {
    const {tilemap, background} = this.props;

    if (!tilemap || !tilemap.length) {
      return null;
    }

    const width = tilemap[0].length * cellSize;
    const height = tilemap.length * cellSize;

    return <Image source={background} style={{width, height}} />;
  }
}
