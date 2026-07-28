<<<<<<< HEAD
import { CellID } from '../CellID.js';

export class Cell {
  /**
   * @param {CellID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /**
     * Entity numeric IDs (not full EntityID objects) for lightweight storage.
     * @type {number[]}
     */
    this.entityIDs = [];
  }

  /**
   * @param {number} entityIdNum
   */
  addEntity(entityIdNum) {
    if (!this.entityIDs.includes(entityIdNum)) {
      this.entityIDs.push(entityIdNum);
    }
  }

  /**
   * @param {number} entityIdNum
   */
  removeEntity(entityIdNum) {
    this.entityIDs = this.entityIDs.filter(id => id !== entityIdNum);
  }
=======
import { CellID } from '../CellID.js';

export class Cell {
  /**
   * @param {CellID} id
   */
  constructor(id) {
    /** @readonly */
    this.id = id;
    /**
     * Entity numeric IDs (not full EntityID objects) for lightweight storage.
     * @type {number[]}
     */
    this.entityIDs = [];
  }

  /**
   * @param {number} entityIdNum
   */
  addEntity(entityIdNum) {
    if (!this.entityIDs.includes(entityIdNum)) {
      this.entityIDs.push(entityIdNum);
    }
  }

  /**
   * @param {number} entityIdNum
   */
  removeEntity(entityIdNum) {
    this.entityIDs = this.entityIDs.filter(id => id !== entityIdNum);
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}