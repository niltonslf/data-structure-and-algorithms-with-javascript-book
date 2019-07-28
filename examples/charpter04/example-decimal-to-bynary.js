const Stack = require('../../src/js/data-structures/stack-weakmap')

function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem,
    binaryString = ''

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}
