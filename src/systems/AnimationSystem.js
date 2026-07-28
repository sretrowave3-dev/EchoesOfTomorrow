<<<<<<< HEAD
import { System } from '../System.js';
import { EntitySignature } from '../EntitySignature.js';

export class AnimationSystem extends System {
  constructor() {
    super();
    this.priority = 300;
    this._requiredSig = new EntitySignature();
    this._meshId = -1;
  }

  initialize(ecs) {
    this._meshId = ecs.getTypeId('Mesh');
    this._requiredSig.add(this._meshId);
  }

  requiredSignature() {
    return this._requiredSig;
  }

  update(delta, entityView, ecs) {
    const meshStore = ecs.getStore('Mesh');
    for (const eid of entityView) {
      const mesh = meshStore.get(eid);
      if (mesh) {
        // TODO: Update animation state based on movement, combat, etc.
      }
    }
  }
=======
import { System } from '../System.js';
import { EntitySignature } from '../EntitySignature.js';

export class AnimationSystem extends System {
  constructor() {
    super();
    this.priority = 300;
    this._requiredSig = new EntitySignature();
    this._meshId = -1;
  }

  initialize(ecs) {
    this._meshId = ecs.getTypeId('Mesh');
    this._requiredSig.add(this._meshId);
  }

  requiredSignature() {
    return this._requiredSig;
  }

  update(delta, entityIds, ecs) {
    const meshStore = ecs.getStore('Mesh');
    for (const eid of entityIds) {
      const mesh = meshStore.get(eid);
      if (mesh) {
        // TODO: Update animation state based on movement, combat, etc.
      }
    }
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}