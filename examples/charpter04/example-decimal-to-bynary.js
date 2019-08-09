const Stack = require('../../src/js/data-structures/stack-weakmap')

function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem,
    binaryString = ''
  while (number > 0) {
    rem = number % 2
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

/**
 * Testing
 */

// console.log(decimalToBinary(203))

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVXZ'
  let number = decNumber
  let rem,
    baseString = ''

  if (!(base >= 2 && base <= 36)) return ''

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) baseString += digits[remStack.pop()]

  return baseString
}

console.log(baseConverter(100, 8))
