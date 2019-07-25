const Stack = require("../../src/js/data-structures/stack");

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);

console.log("Stack: ", stack.isEmpty());

console.log("Stack: ", stack.toString());
