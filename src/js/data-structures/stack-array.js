class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Adiciona elemento no topo da pilha
   * @param {*} element
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * Remove elemento do topo da pila
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Retorn o topo da pilha
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Retorn true se a pilha estiver vazia e false caso não esteja
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * Limpa a pilha
   */
  clear() {
    this.items = [];
  }

  /**
   * Retorna o tamanho da pilha
   */
  size() {
    return this.items.length;
  }
}

module.exports = Stack;
