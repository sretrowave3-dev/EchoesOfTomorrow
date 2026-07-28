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