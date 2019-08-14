const Deque = require('../../src/js/data-structures/deque')

const deque = new Deque()
deque.addFront('Nilton')
deque.addFront('João')
deque.addFront('Maria')

console.log('Front:', deque.peekFront())
console.log('size:', deque.size())

console.log('Back', deque.peekBack())
console.log('IsEmpty', deque.isEmpty())

console.log('String:', deque.toString())
console.log('IsEmpty', deque.isEmpty())
