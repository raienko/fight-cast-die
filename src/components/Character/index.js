import React from 'react';
import {Animated, StyleSheet, Image, Easing} from 'react-native';
import Icon from 'src/components/Icon';
import PropTypes from 'prop-types';
import {cellSize} from 'src/constants';
import Touchable from 'rn-units/components/Touchable';
import archer from './archer.png';

export default class Character extends React.PureComponent {
  _offset = new Animated.ValueXY({x: 0, y: 0});

  _rotation = new Animated.Value(0);

  _position;

  _angle;

  _animation;

  static propTypes = {
    source: PropTypes.any,
    scale: PropTypes.number,
    position: PropTypes.object,
  };

  static defaultProps = {
    source: archer,
    scale: 2,
    position: null,
  };

  state = {
    status: 'idle',
  };

  constructor(props) {
    super(props);
    this._offset.addListener((value) => {
      this._position = value;
    });
    this._rotation.addListener((value) => {
      this._angle = value;
    });

    const {scale, position} = this.props;
    this._size = {
      width: scale * cellSize,
      height: scale * cellSize,
    };

    if (position) {
      this.setPosition(position);
    }
  }

  componentWillUnmount() {
    this._offset.removeAllListeners();
    this._rotation.removeAllListeners();
  }

  setPosition = (position) => {
    this._offset.setOffset(position);
  };

  setRotation = (rotation) => {
    this._rotation.setValue = rotation;
  };

  setStatus = (status) => {
    this.setState({status});
  };

  move = (point, duration) => {
    this.stop();
    return new Promise((resolve) => {
      this._animation = new Animated.timing(this._offset, {
        toValue: {
          x: point.x,
          y: point.y,
        },
        easing: Easing.linear,
        duration,
        useNativeDriver: true,
      });

      this._animation.start(() => resolve());
    });
  };

  rotate = (angle, duration) => {
    this.stop();
    return new Promise((resolve) => {
      this._animation = new Animated.timing(this._rotation, {
        toValue: angle,
        easing: Easing.linear,
        duration,
        useNativeDriver: true,
      });

      this._animation.start(() => resolve());
    });
  };

  stop = () => {
    this._animation?.stop();
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

        let rotation = new Animated.timing(this._rotation, {
          toValue: angle,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        });
        animations.push(rotation);

        const movement = new Animated.timing(this._offset, {
          toValue: point,
          duration: distance / speed,
          easing: Easing.linear,
          useNativeDriver: true,
        });
        animations.push(movement);
      });

      this._animation = Animated.sequence(animations);
      this._animation.start(() => resolve());
    });
  };

  render() {
    const {source} = this.props;
    const {status} = this.state;

    const angle = this._rotation.interpolate({
      inputRange: [-360, 360],
      outputRange: ['-360deg', '360deg'],
    });

    return (
      <Animated.View style={[styles.wrapper, {transform: this._offset.getTranslateTransform()}]}>
        <Animated.View style={{transform: [{rotate: angle}]}}>
          <Touchable onPress={this.props.onPress}>
            <Image source={source} style={this._size} resizeMode="contain" />
          </Touchable>
        </Animated.View>
        {status === 'fighting' && <Icon style={styles.fighting} name="times" />}
        {status === 'quest' && <Icon style={styles.quest} name="question" />}
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  fighting: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 20,
    color: 'red',
  },
  quest: {
    position: 'absolute',
    top: -25,
    alignSelf: 'center',
    fontSize: 40,
    color: 'orange',
  },
});
