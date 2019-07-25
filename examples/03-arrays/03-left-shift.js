// Remover primeiro elemento de um array

/*
*   FORMA DO LIVRO
*/

// Corrige o ídice dos elementos
Array.prototype.reindex = function (arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != undefined) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Remove elemento da primeira posição de um array
Array.prototype.removeFirstPos = function() {
    for(let i = 0; i < this.length; i++){
        this[i] = this[i + 1]
    }
    return this.reindex(this)
}
// Testando
// const arr = [1,2,3,4,5,6]
// console.log(arr.removeFirstPos())
// [ 2, 3, 4, 5, 6 ]


/**
 * SEGUNDA FORMA
 */

 Array.prototype.reindex2 = function () {
    return this.filter(val => val)
 }

 Array.prototype.removeFirstPos2 = function() {
    this.forEach((val, i) => this[i] = this[i + 1] )
    return this.reindex2()
 }

const arrTest = [1,2,3,4,5,6]
console.log(arrTest.removeFirstPos2());
// output: [ 2, 3, 4, 5, 6 ]
 