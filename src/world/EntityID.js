export class EntityID {
  constructor(id, generation = 0) {
    this.id = id;
    this.generation = generation;
    Object.freeze(this);
  }

  equals(other) {
    return other instanceof EntityID && this.id === other.id && this.generation === other.generation;
  }

  toString() {
    return `EntityID(${this.id}:${this.generation})`;
  }
}