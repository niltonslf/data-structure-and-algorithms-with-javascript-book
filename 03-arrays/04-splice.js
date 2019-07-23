/**
 *   pos         Posição que deseja remover ou adicionar elemento
 *   amount       1 para adicionar novos elementos 0 para remover elemento
 *   ...elems    Elementos a serem adicionados
 */
Array.prototype.removeOrAdd = function(pos, amount, ...elems) {
  let result = [];
  if (amount > 0) {
    const finalIndex = pos + (amount - 1); // calcula a posição final dos elementos a serem removidos.
    // verica se o índices  está entre o inicial e o final a ser removido, retornando um array com os valores que não devem ser removidos
    result = this.filter((val, index) => index < pos || index > finalIndex);
  }
  // se foram passados elementos a ser adicionadp
  if (elems.length > 0) {
    // Chama função que adiciona itens na posição e retorna o array já reordenado
    result = result.addMiddle(pos, ...elems);
  }
  return result; // array com o resultado
};

Array.prototype.addMiddle = function(pos, ...elems) {
  let arr = this;
  // armazena itens do array apartir da posição onde será adicionado os novos itens
  const toReindex = arr.filter((val, i) => i >= pos);
  // inicia o indíce na posição recebida
  let index = pos;
  // Percorre todo o array de elementos, adicionando um novo item no array apartir da posição fornecida.
  elems.forEach(val => {
    arr[index] = val;
    index++;
  });
  // percerre o array com os elementos salvos acima, adicionado-os seguindo a  sequência do array.
  toReindex.forEach(val => {
    arr[index] = val;
    index++;
  });
  // retorna o array com o s novos dados e já reordenado
  return arr;
};

/* DEBUG */
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array inicial", myArr);
console.log("Resultado:", myArr.removeOrAdd(3, 2, 10, 11));
