import { ComponentStore } from './ComponentStore.js';
import { EntitySignature } from './EntitySignature.js';
import { Entity } from './Entity.js';
import { EntityView } from './EntityView.js';

export class ECSManager {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this._componentTypeIds = new Map();
    this._stores = [];
    this._entities = new Map();

    this._onEntityCreated = this._onEntityCreated.bind(this);
    this._onEntityDestroyed = this._onEntityDestroyed.bind(this);
  }

  registerComponent(name, componentClass) {
    if (this._componentTypeIds.has(name)) {
      throw new Error(`Component type "${name}" already registered.`);
    }
    const id = this._stores.length;
    this._componentTypeIds.set(name, id);
    this._stores.push(new ComponentStore(componentClass));
    return id;
  }

  getStore(nameOrId) {
    if (typeof nameOrId === 'string') {
      const id = this._componentTypeIds.get(nameOrId);
      if (id === undefined) throw new Error(`Unknown component type "${nameOrId}".`);
      return this._stores[id];
    }
    return this._stores[nameOrId];
  }

  getTypeId(name) {
    return this._componentTypeIds.get(name);
  }

  addComponent(entityId, componentName, componentInstance) {
    const typeId = this._componentTypeIds.get(componentName);
    if (typeId === undefined) throw new Error(`Component type "${componentName}" not registered.`);
    const store = this._stores[typeId];
    const component = store.add(entityId, componentInstance);

    let entity = this._entities.get(entityId);
    if (!entity) {
      entity = new Entity({ id: entityId, generation: 0 }, new EntitySignature());
      this._entities.set(entityId, entity);
    }
    entity.signature.add(typeId);

    return component;
  }

  removeComponent(entityId, componentName) {
    const typeId = this._componentTypeIds.get(componentName);
    if (typeId === undefined) return;
    const store = this._stores[typeId];
    store.remove(entityId);

    const entity = this._entities.get(entityId);
    if (entity) {
      entity.signature.remove(typeId);
    }
  }

  getComponent(entityId, componentName) {
    const store = this.getStore(componentName);
    return store.get(entityId);
  }

  hasComponent(entityId, componentName) {
    const store = this.getStore(componentName);
    return store.has(entityId);
  }

  view(requiredSignature) {
    return new EntityView(this, requiredSignature);
  }

  _iterateMatching(requiredSignature) {
    const entities = this._entities;
    const signature = requiredSignature;
    return (function* () {
      for (const [entityIdNum, entity] of entities) {
        if (entity.flags.active && entity.signature.matches(signature)) {
          yield entityIdNum;
        }
      }
    })();
  }

  _onEntityCreated(event) {
    const worldId = event.payload.entityId;
    const numericId = worldId.id;
    if (!this._entities.has(numericId)) {
      this._entities.set(numericId, new Entity(worldId, new EntitySignature()));
    }
  }

  _onEntityDestroyed(event) {
    const worldId = event.payload.entityId;
    const numericId = worldId.id;
    const entity = this._entities.get(numericId);
    if (entity) {
      for (let typeId = 0; typeId < this._stores.length; typeId++) {
        if (entity.signature.has(typeId)) {
          this._stores[typeId].remove(numericId);
        }
      }
      this._entities.delete(numericId);
    }
  }

  setupEventListeners() {
    this.eventBus.subscribe('entity:created', this._onEntityCreated);
    this.eventBus.subscribe('entity:destroyed', this._onEntityDestroyed);
  }

  dispose() {
    this.eventBus.unsubscribe('entity:created', this._onEntityCreated);
    this.eventBus.unsubscribe('entity:destroyed', this._onEntityDestroyed);
  }
}