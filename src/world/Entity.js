import { EntityID } from './EntityID.js';
import { Transform } from './Transform.js';

export class Entity {
  /**
   * @param {EntityID} id
   * @param {string|null} [cellId]
   */
  constructor(id, cellId = null) {
    this.id = id;
    this.generation = id.generation;
    this.transform = new Transform();
    this.cellId = cellId;
    this.state = 'created';
    this.handle = null; // set by EntityManager
  }

  setState(state) {
    this.state = state;
  }
}