<<<<<<< HEAD
// src/framework/core/FrameScheduler.js

export class FrameScheduler {
  constructor() {
    /** @type {Array<{ name: string, executeFn: ?(delta: number) => void, services: import('../services/Service.js').Service[] }>} */
    this._phases = [];
  }

  /**
   * Register a new phase with an optional generic callback.
   * @param {string} name
   * @param {?(delta: number) => void} [executeFn]
   * @throws {Error} if a phase with the same name already exists.
   */
  addPhase(name, executeFn = null) {
    if (this._phases.some(p => p.name === name)) {
      throw new Error(`Phase "${name}" already exists.`);
    }
    this._phases.push({ name, executeFn, services: [] });
  }

  /**
   * Add a service to a phase. If the phase does not exist, it is created.
   * @param {string} phaseName
   * @param {import('../services/Service.js').Service} service
   * @throws {Error} if the service is already registered to the phase.
   */
  addServiceToPhase(phaseName, service) {
    let phase = this._phases.find(p => p.name === phaseName);
    if (!phase) {
      phase = { name: phaseName, executeFn: null, services: [] };
      this._phases.push(phase);
    }
    if (phase.services.includes(service)) {
      throw new Error(
        `Service "${service.name}" already registered to phase "${phaseName}".`
      );
    }
    phase.services.push(service);
  }

  /** Remove a phase by name. */
  removePhase(name) {
    this._phases = this._phases.filter(p => p.name !== name);
  }

  /** Execute all phases in order. Called once per frame. */
  run(deltaTime) {
    for (const phase of this._phases) {
      if (phase.executeFn) {
        phase.executeFn(deltaTime);
      }
      for (const service of phase.services) {
        service.update(deltaTime);
      }
    }
  }
}
=======
/**
 * Represents a single update phase (e.g., 'input', 'rendering').
 * Holds an ordered list of services that participate in this phase.
 */
class FramePhase {
  constructor(name) {
    this.name = name;
    this.services = [];
  }

  addService(service) {
    this.services.push(service);
  }

  execute(delta) {
    for (const service of this.services) {
      service.update(delta);
    }
  }
}

/**
 * Manages a sequence of FramePhases, executed in order each frame.
 */
export class FrameScheduler {
  constructor() {
    /** @type {Map<string, FramePhase>} */
    this.phases = new Map();
    this.phaseOrder = [];   // insertion order
  }

  /**
   * Create a new phase (if not already existing) and return it.
   * @param {string} name
   * @returns {FramePhase}
   */
  addPhase(name) {
    if (this.phases.has(name)) {
      return this.phases.get(name);
    }
    const phase = new FramePhase(name);
    this.phases.set(name, phase);
    this.phaseOrder.push(name);
    return phase;
  }

  /**
   * Assign a service to a specific phase.
   * @param {string} phaseName
   * @param {import('../services/Service.js').Service} service
   */
  addServiceToPhase(phaseName, service) {
    const phase = this.addPhase(phaseName);
    phase.addService(service);
  }

  /**
   * Execute all phases in order.
   * @param {number} deltaTime
   */
  run(deltaTime) {
    for (const name of this.phaseOrder) {
      this.phases.get(name).execute(deltaTime);
    }
  }
}
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
