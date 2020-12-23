import {Animated, Easing} from 'react-native';
import {cellSize} from 'src/constants';
import {getCoordinates, getDistance} from 'src/utils/helpers';

export default class AnimatedPosition {
  _animation;

  _offset;

  x;

  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;

    this._offset = new Animated.ValueXY({
      x: x * cellSize,
      y: y * cellSize,
    });

    this._offset.addListener(({x, y}) => {
      this.x = Math.floor(x / cellSize);
      this.y = Math.floor(y / cellSize);
    });
  }

  stop = () => {
    if (this._animation) {
      this._animation.stop();
    }
  };

  move = async (path, speed = 1) => {
    this.stop();

    const animations = path.map((point, index) => {
      const currentX = index ? path[index - 1].x : this.x;
      const currentY = index ? path[index - 1].y : this.y;
      const distance = getDistance(currentX, currentY, point.x, point.y);
      const duration = distance * cellSize * 10 * speed;
      return Animated.timing(this._offset, {
        toValue: getCoordinates(point.x, point.y),
        easing: Easing.linear,
        duration,
        useNativeDriver: true,
      });
    });

    this._animation = Animated.sequence(animations);

    return new Promise((resolve) => this._animation.start(resolve));
  };

  get offset() {
    return this._offset.getTranslateTransform();
  }

  get coords() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
