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

  constructor({create}) {
    /**
     * Holds the create method from construction
     * @type {function}
     */
    this.createObj = create;
    
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
   * Run the creation method defined in manager options when insantiated.
   * @param {string} name Name to register the results under.
   * @param  {...any} args Any paramaters to be passed onto the creation
   * method defined in manager options. 
   */
  create(name, ...args) {
    let item;
    if (_.isFunction(this.createObj)) {
      item = this.createObj(args);
    } else {
      item = args;
    }
    this.register(name, item)
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
