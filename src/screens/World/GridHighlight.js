import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {cellSize} from 'src/constants';
import Text from 'src/components/Text';
import {useLevel} from './Level';

const GridHighlight = () => {
  const {level} = useLevel();
  const [hasGrid] = useState(global.__DEV__ && false);
  const [hasColors] = useState(true);
  const [hasBorders] = useState(true);
  const [hasIds] = useState(true);

  if (!level || !hasGrid) {
    return null;
  }

  const grid = [];
  level.tilemap.forEach((row, y) => row.forEach((tile, x) => {
    const id = `${x}/${y}`;
    const position = {
      left: x * cellSize,
      top: y * cellSize,
    };

    grid.push(
      <View
        key={id}
        style={[
          styles.cell,
          position,
          hasBorders && styles.borders,
          hasColors && (tile ? styles.blocked : styles.free),
        ]}
        pointerEvents="none"
      >
        {
          hasIds && <Text value={id} style={styles.id} />
        }
      </View>
    );
  }));

  return grid;
};

export default GridHighlight;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cell: {
    width: cellSize,
    height: cellSize,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borders: {
    borderWidth: 1,
  },
  free: {
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
  },
  blocked: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  id: {
    fontSize: 10,
    fontWeight: 'bold',
  }
});
