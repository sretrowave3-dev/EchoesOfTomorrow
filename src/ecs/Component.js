<<<<<<< HEAD
/**
 * Base class for all components.
 * Subclasses must set a static `typeId` property (assigned by ECSManager).
 */
export class Component {
  /**
   * Optional reset method, called when a component is removed or pooled.
   */
  reset() {
    // override in subclass if needed
  }
=======
/**
 * Base class for all components.
 * Subclasses must set a static `typeId` property (assigned by ECSManager).
 */
export class Component {
  /**
   * Optional reset method, called when a component is removed or pooled.
   */
  reset() {
    // override in subclass if needed
  }
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
}