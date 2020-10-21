import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {rem} from 'rn-units';

export default ({children}) => {
  const offset = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const move = (x, y) => {
    Animated.timing(offset, {
      toValue: {
        x: rem(x),
        y: rem(y),
      },
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const position = {
    transform: offset.getTranslateTransform(),
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.container, position]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});
