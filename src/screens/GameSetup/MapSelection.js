import React from 'react';
import {StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';

export default function MapSelection() {
  return (
    <Touchable style={styles.wrapper}>
      <Text text="map selection" />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
  },
});
