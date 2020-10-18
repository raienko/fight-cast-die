import Position from './Position';

export default class Player {
  constructor(id, name, position) {
    this.id = id;
    this.name = name;
    this.position = new Position(position.x, position.y);
  }
}
