const _items = Symbol("stackItems");

class Stack {
  constructor() {
    this[_items] = [];
  }

  /**
   * Adiciona elemento no topo da pilha
   * @param {*} element
   */
  push(element) {
    this[_items].push(element);
  }

  /**
   * Remove elemento do topo da pila
   */
  pop() {
    return this[_items].pop();
  }

  /**
   * Retorn o topo da pilha
   */
  peek() {
    return this[_items][this[_items].length - 1];
  }

  /**
   * Retorn true se a pilha estiver vazia e false caso não esteja
   */
  isEmpty() {
    return this[_items].length == 0;
  }

  /**
   * Limpa a pilha
   */
  clear() {
    this[_items] = [];
  }

  /**
   * Retorna o tamanho da pilha
   */
  size() {
    return this[_items].length;
  }
}

module.exports = Stack;
