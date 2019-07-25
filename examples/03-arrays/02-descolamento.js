
Array.prototype.insertFirstPosition = function(value){
    
    // Descola todos os itens uma posição para frente
    for (let i = this.length; i > 0; i--) { this[i] = this[ i - 1] }

    // Adiciona item na primeira posição
    this[0] = value
}

const arr = [0,1,2,3,4,5,6]
arr.insertFirstPosition(-1)
arr.unshift(-2)

console.log(arr)
