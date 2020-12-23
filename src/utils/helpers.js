import {Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {cellSize} from 'src/constants';

export const getCoordinates = (x, y) => ({
  x: x * cellSize,
  y: y * cellSize,
});

export const getCenteringTransform = (childSize, parentSize) => [
  {translateX: -(parentSize / 2 + childSize / 2)},
  {translateY: -(parentSize / 2 + childSize / 2)},
];

export const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

export const share = (message) => Share.share({message});

export const copy = async (text) => Clipboard.setString(text);

export const paste = async () => Clipboard.getString();
