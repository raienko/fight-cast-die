import {rem} from 'rn-units';

export default class Position {
  constructor(x, y) {
    this.x = rem(x);
    this.y = rem(y);
  }
}
