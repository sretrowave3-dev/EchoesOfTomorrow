<<<<<<< HEAD
import { SectorID } from '../SectorID.js';

export class Sector {
  /**
   * @param {SectorID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /** @type {import('../CellID.js').CellID[]} */
    this.cellIDs = [];
    /** @type {'loaded'|'unloaded'|'loading'|'unloading'} */
    this.state = 'unloaded';
  }
=======
import { SectorID } from '../SectorID.js';

export class Sector {
  /**
   * @param {SectorID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /** @type {import('../CellID.js').CellID[]} */
    this.cellIDs = [];
    /** @type {'loaded'|'unloaded'|'loading'|'unloading'} */
    this.state = 'unloaded';
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}