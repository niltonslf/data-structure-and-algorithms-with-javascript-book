const Stack = require("../../src/js/data-structures/stack-weakmap");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("size", stack.size());

console.log("Pop:", stack.pop());

console.log("peek:", stack.peek());

console.log(stack.isEmpty());

stack.clear();

console.log(stack.isEmpty());
