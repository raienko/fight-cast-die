import {cellSize} from 'src/constants';

export const getCoordinates = (x, y) => ({
  x: x * cellSize,
  y: y * cellSize,
});

export const getCenteringTransform = (childSize, parentSize) => [
  {translateX: -(parentSize / 2 + childSize / 2)},
  {translateY: -(parentSize / 2 + childSize / 2)},
];

export const getDistance = (x1, y1, x2, y2) => Math.sqrt(
  Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2)
);