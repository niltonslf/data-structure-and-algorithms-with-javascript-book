const StackArray = require("../../src/js/data-structures/stack-array");

const stack = new StackArray();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
console.log(stack.peek());
console.log(stack.size());
