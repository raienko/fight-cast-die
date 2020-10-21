import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {rem} from 'rn-units';

export default function Terrain({width = 900, height = 900, background = 'https://pbs.twimg.com/media/ED7rBizUYAERdGT.jpg'}) {
  const [touches, setTouches] = useState([]);
  const [size, setSize] = useState({ width: rem(width), height: rem(height) });

  const handlePress = (event) => {
    setTouches(touches.concat({
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    }));
  };

  return (
    <View style={styles.wrapper}>
      <Image
        style={size}
        resizeMode="cover"
        source={{ uri: background }}
      />
      <TouchableOpacity onPress={handlePress} style={styles.overlay} />
      {
        touches.map(touch => <View style={[styles.touch, { left: touch.x, top: touch.y }]} key={`${touch.x}/${touch.y}`} />)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
  },
  background: {
    width: rem(866),
    height: rem(966),
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  touch: {
    position: 'absolute',
    width: rem(50),
    height: rem(50),
    borderRadius: rem(25),
    borderWidth: 3,
    transform: [
      { translateX: -rem(25) },
      { translateY: -rem(25) },
    ],
  },
});
