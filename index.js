const _ = require('lodash');

/** Class for managing objects. */
class Manager {

  /**
   * Manager()
   * @param {object} options The container for construction parameters.
   * @param {function=} options.create An optional function run when
   * the create method is invoked.  Used for putting the manager into
   * object factory mode. The method is fed an array of argments from
   * the manager's create method. 
   */

  constructor() {
    /**
     * The key/value list of managed objects
     * @type {Map}
     */
    this.list = new Map();
  }

  /**
   * Register a new item with the manager
   * @param {string} name The name to associate the item with
   * @param {*} item The item to be managed.
  */
  register(name, item) {
    this.list.set(name, item);
    return item;
  }

  /**
   * Retrieve an item from the manager.
   * @param {string} name The name of the item to be retrieved.
   */
  get(name) {
    return this.list.get(name);
  }

  /**
   * Check to see if an object is being managed by the system.
   * @param {string} name 
   */
  has(name){
    return this.list.has(name);
  }

}

module.exports = Manager;
