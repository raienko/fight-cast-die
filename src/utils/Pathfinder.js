import Pathfinding from 'pathfinding';

const defaultAlgorithm = 'AStarFinder';
const defaultOptions = {
  allowDiagonal: true,
  dontCrossCorners: true,
};

export default class Pathfinder {
  _grid;

  _finder;

  setup = (tilemap, algorithm = defaultAlgorithm, options = defaultOptions) => {
    this._grid = new Pathfinding.Grid(tilemap);
    this._finder = new Pathfinding[algorithm](options);
  };

  findPath = (x1, y1, x2, y2) => {
    if (!this._grid || !this._finder) {
      throw new Error('Please setup first');
    }
    const grid = this._grid.clone();
    return this._finder
      .findPath(x1, y1, x2, y2, grid)
      .map(([x, y]) => ({x, y}));
  };
}
