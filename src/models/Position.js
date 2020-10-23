import {cellSize} from 'src/constants';

export default class Position {
  constructor(x, y) {
    this.x = x * cellSize;
    this.y = y * cellSize;
  }
}
