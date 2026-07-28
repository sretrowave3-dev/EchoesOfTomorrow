<<<<<<< HEAD
import { Service } from '../framework/services/Service.js';
import { World } from './World.js';

export class WorldManager extends Service {
  constructor(framework) {
    super('world', framework);
    this.world = null;
  }

  async initialize() {
    this.world = new World(this.framework.clock, this.framework.eventBus);
  }

  update(delta) {
    if (this.world) {
      this.world.update(delta);
    }
  }

  async shutdown() {
    this.world = null;
  }
=======
import { Service } from '../framework/services/Service.js';
import { World } from './World.js';

export class WorldManager extends Service {
  constructor(framework) {
    super('world', framework);
    this.world = null;
  }

  async initialize() {
    this.world = new World(this.framework.clock, this.framework.eventBus);
  }

  update(delta) {
    if (this.world) {
      this.world.update(delta);
    }
  }

  async shutdown() {
    this.world = null;
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}