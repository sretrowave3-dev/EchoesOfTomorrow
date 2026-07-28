export class EntityHandle {
  /**
   * @param {import('./EntityID.js').EntityID} entityId
   * @param {function(import('./EntityID.js').EntityID): import('./Entity.js').Entity|null} getEntityFn
   */
  constructor(entityId, getEntityFn) {
    this._entityId = entityId;
    this._getEntity = getEntityFn;
  }

  get id() { return this._entityId; }

  isValid() {
    const entity = this._getEntity(this._entityId);
    return entity !== null && entity.generation === this._entityId.generation;
  }

  get() {
    const entity = this._getEntity(this._entityId);
    return entity && entity.generation === this._entityId.generation ? entity : null;
  }
}