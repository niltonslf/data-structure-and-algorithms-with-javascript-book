/**
 * Um algoritmo de complexidade O(n) terá sua complexidade aumentada a medida que n (entrada) for aumentando.
 */

function sequentialSearch(array, value) {
  let cost = 0
  for (let i = 0; i < array.length; i++) {
    cost++
    if (value === array[i]) {
      console.log(
        `Cost for sequencialSearch with input size ${array.length} is ${cost}`
      )
      return i
    }
  }

  console.log(
    `Cost for sequencialSearch with input size ${array.length} is ${cost}`
  )
  return -1
}

const arr = require("./data")

sequentialSearch(arr, 991452)
