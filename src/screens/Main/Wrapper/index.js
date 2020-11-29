import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from 'rn-units';
import Screen from 'src/components/Screen';
import background from './background.png';

export default function Wrapper({children}) {
  return (
    <Screen>
      <Image
        style={styles.background}
        resizeMode="repeat"
        source={background}
      />
      {children}
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenWidth,
    height: screenHeight,
  },
});
