/**
 * Um algoritmo de complexidade O(n²) é um algotmo onde sua complexidade é o quadradado da entrada, ou seja, para uma entrada n=2
 * sua complexidade será 2 * 2, então será 4.
 */

function bubbleSort(array) {
  const { length } = array
  let cost = 0

  for (let i = 0; i < length; i++) {
    cost++
    for (let j = 0; j < length - 1; j++) {
      cost++
      const current = array[j]
      const next = array[j + 1]
      if (current > next) {
        /* old way
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        */
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]] // es2015
      }
    }
  }
  console.log(`Cost for bubblesort with input size ${length} is ${cost}`)
  return array
}

const arr = [70, 2, 6, 80, 12, 52, 9, 60, 1]

console.log("sorted", bubbleSort(arr))
