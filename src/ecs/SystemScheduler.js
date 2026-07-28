export class SystemScheduler {
  constructor(ecsManager) {
    this.ecs = ecsManager;
    this.systems = [];
  }

  registerSystem(system) {
    this.systems.push(system);
    this.systems.sort((a, b) => a.priority - b.priority);
    system.initialize(this.ecs);
  }

  update(delta) {
    for (const system of this.systems) {
      if (!system.isEnabled()) continue;
      const view = this.ecs.view(system.requiredSignature());
      system.update(delta, view, this.ecs);
    }
  }

  removeSystem(system) {
    const idx = this.systems.indexOf(system);
    if (idx !== -1) {
      this.systems.splice(idx, 1);
      system.shutdown();
    }
  }

  shutdown() {
    for (const system of this.systems) {
      system.shutdown();
    }
    this.systems.length = 0;
  }
}