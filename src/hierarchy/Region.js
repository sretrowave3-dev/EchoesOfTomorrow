<<<<<<< HEAD
import { RegionID } from '../RegionID.js';

export class Region {
  /**
   * @param {RegionID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /** @type {import('../SectorID.js').SectorID[]} */
    this.sectorIDs = [];
  }
=======
import { RegionID } from '../RegionID.js';

export class Region {
  /**
   * @param {RegionID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /** @type {import('../SectorID.js').SectorID[]} */
    this.sectorIDs = [];
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}