# MuManager
A simple object management system
### Example
```JavaScript
const Manager = require('mumanager');
const tasks = new Manager();

// register a new 'task'
tasks.register('first-task', {
  name: 'foobar',
  func: () => console.log('This is a task!')
});

// Later, we want to reference the task in our code and run our function.
console.log(tasks.get('first-task').name) // 'foobar'
tasks.get('first-task').func() // Logged to console: 'This is a task!'
```
