const Queue = require('../../src/js/data-structures/queue')

const queue = new Queue()

queue.enqueue('Carlos')
queue.enqueue('joana')
queue.enqueue('Maria')

console.log('Peek', queue.peek())
queue.dequeue()
console.log('Peek', queue.peek())
console.log('Size', queue.size())
queue.clear()
console.log('Size', queue.size())
console.log('IsEmpty?', queue.isEmpty())
