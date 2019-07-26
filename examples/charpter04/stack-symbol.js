const Stack = require("../../src/js/data-structures/stack-symbol");

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.peek());
console.log(stack);

let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log("size:", objectSymbols.length);
console.log("obj", objectSymbols);
console.log("push", stack[objectSymbols[0]].push(10));

stack[objectSymbols[0]][0] = "joao";
console.log(stack[objectSymbols[0]]);
