# Mu-Manager
A simple object management system.

## Usage
Mu-Manager is an object management system. It can also act as an object factory as well when configured.

### Simple Example
In it's simplist use, Mu-Manager acts as a way to easily manage and call on objects, though it can handle other datatypes as well.

```JavaScript
const Manager = require('mu-manager');
const tasks = new Manager();

// register a new 'task'
tasks.register('first-task', {
  name: 'foobar',
  description: 'Do some console logging.',
  func: () => console.log('This is a task!')
});

// Later, we want to reference the task in our code and run our function.
console.log(tasks.get('first-task').name) // 'foobar'
tasks.get('first-task').func() // Logged to console: 'This is a task!'
```

### Object Factory Example
Say we have a pre-established class for a task.  Instead of feeding the manager an object literal, it can create a new instance of a class. When defining a new instance of mu-manager, pass in a create method, which is a function that accepts an array of arguments.

```JavaScript
const Manager = require('mu-manager');

// First we're going to create a simple class to work with.
/** Create a new Task */
class Task {
  constructor({name, description, func}){
    this.name = name;
    this.description = description;
    this.func = func;
  }

  /** Logs to the console */
  doSomething() {
    console.log('Did something!');
  }
}

// Next we create a new instanc of the mu-manager, defining the create
// method, using our `task` class.
tasks = new Manager({
  // The create method is passed an array of arguments.  I'm using
  // destructuring here to grab the first.
  create: [options={}] => new Task(options)
})

// Create our new object  This creates and stores a new 'todo' object under
// the task list.
tasks.create('first-task', {
  name: 'foobar',
  description: 'Do some console logging.',
  func: () => console.log('This is a task!')
});

// Later, we want to reference the task in our code and run our function.
console.log(tasks.get('first-task').name) // 'foobar'
tasks.get('first-task').func() // Logged to console: 'This is a task!'

// But we can also call methods attached to the object.
tasks.get('first-task').doSomething() // Logged to console: 'Did Something!'

```