import React from 'react';
import {Animated, StyleSheet, Image, Easing} from 'react-native';
import {rem} from 'rn-units';
import source from './archer.png';

export default class Character extends React.PureComponent {
  offset = new Animated.ValueXY({x: 0, y: 0});

  rotation = new Animated.Value(0);

  position;

  angle;

  animation;

  constructor(props) {
    super(props);
    this.offset.addListener((value) => {
      this.position = value;
    });
    this.rotation.addListener((value) => {
      this.angle = value;
    });
  }

  componentWillUnmount() {
    this.offset.removeAllListeners();
    this.rotation.removeAllListeners();
  }

  setPosition = (position) => {
    this.offset.setOffset(position);
  };

  setRotation = (rotation) => {
    this.rotation.setValue = rotation;
  };

  move = (point, duration) => {
    this.stop();
    return new Promise((resolve) => {
      this.animation = new Animated.timing(this.offset, {
        toValue: {
          x: point.x,
          y: point.y,
        },
        easing: Easing.linear,
        duration,
        useNativeDriver: true,
      });

      this.animation.start(() => resolve());
    });
  };

  rotate = (angle, duration) => {
    this.stop();
    return new Promise((resolve) => {
      this.animation = new Animated.timing(this.rotation, {
        toValue: angle,
        easing: Easing.linear,
        duration,
        useNativeDriver: true,
      });

      this.animation.start(() => resolve());
    });
  };

  stop = () => {
    this.animation?.stop();
  };

  follow = (path, speed = 1) => {
    this.stop();
    return new Promise((resolve) => {
      const animations = [];

      path.forEach((point, index) => {
        const distance = 1000;

        let angle = 0;
        const nextPoint = path[index + 1];
        if (nextPoint) {
          const dX = nextPoint.x - point.x;
          const dY = nextPoint.y - point.y;
          const radian = Math.atan2(dY, dX);
          const degree = radian * 180 / Math.PI;
          angle = degree - 90;
        }

        let rotation = new Animated.timing(this.rotation, {
          toValue: angle,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        });
        animations.push(rotation);

        const movement = new Animated.timing(this.offset, {
          toValue: point,
          duration: distance / speed,
          easing: Easing.linear,
          useNativeDriver: true,
        });
        animations.push(movement);
      });

      this.animation = Animated.sequence(animations);
      this.animation.start(() => resolve());
    });
  };

  render() {
    const angle = this.rotation.interpolate({
      inputRange: [-360, 360],
      outputRange: ['-360deg', '360deg'],
    });

    const transform = [
      ...this.offset.getTranslateTransform(),
      {rotate: angle},
    ];

    return (
      <Animated.View style={[styles.wrapper, {transform}]}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </Animated.View>
    );
  }
};

const size = rem(100);

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  image: {
    width: size,
    height: size,
  },
});
