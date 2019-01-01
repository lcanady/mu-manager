/** Class for managing objects. */
class Manager {
  constructor() {
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

}


module.exports = Manager;