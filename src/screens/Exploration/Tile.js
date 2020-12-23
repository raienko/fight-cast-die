import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Touchable from 'rn-units/components/Touchable';
import {cellSize} from 'src/constants';

const half = cellSize / 2;

export default function Tile({source, size = 1, onPress, disabled, position}) {
  const offset = {
    left: position.x * cellSize,
    top: position.y * cellSize,
  };

  const proportions = {
    width: cellSize * size,
    height: cellSize * size,
  };

  const translate = half - half * size;
  const transform = {
    transform: [{translateX: translate}, {translateY: translate}],
  };

  const Renderer = source?.w ? LottieView : Image;
  return (
    <Touchable
      style={[styles.wrapper, offset]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      delay={100}>
      <View style={transform}>
        <Renderer style={proportions} source={source} autoPlay autoSize />
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
  },
});
