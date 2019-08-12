class Deque {
  constructor() {
    this._count = 0
    this._lowestCount = 0
    this._items = {}
  }

  addFront(elem) {
    if (this.isEmpty()) {
      this.addBack(elem)
    } else if (this._lowestCount > 0) {
      this._lowestCount--
      this._items[this._lowestCount] = elem
    } else {
      // movimentar todo item uma casa a frente
      for (let i = this._count; i > 0; i--) {
        const temp = this._items[i - 1]
        this._items[i] = temp
      }
      this._count++ // Conserta indíce count
      this._lowestCount = 0
      this._items[0] = elem
    }
  }

  addBack(elem) {
    this._items[this._count] = elem
    this._count++
  }

  removeFront() {
    if (this.isEmpty()) return undefined

    const elem = this._items[this._lowestCount]
    delete this._items[this._lowestCount]
    this._lowestCount++
    return elem
  }

  removeBack() {
    if (this.isEmpty()) return undefined

    const elem = this._items[this._count - 1]
    delete this._items[this._count - 1]
    this._count--
    return elem
  }

  /**
   * Exibe o primeiro item do Deque sem fazer a
   * remoção do elemento
   */
  peekFront() {
    if (this.isEmpty()) return undefined
    return this._items[this._lowestCount]
  }

  /**
   * Exibe o último item do Deque sem fazer a
   * remoção do elemento
   */
  peekBack() {
    if (this.isEmpty()) return undefined
    return this._items[this._count - 1]
  }

  /**
   * @returns {Boolean} retorna true para Deque vazio, caso contrário retorna false
   */
  isEmpty() {
    return this._lowestCount - this._count === 0
  }

  /**
   * @returns {Int} Retorna o tamanho do Deque
   */
  size() {
    return Math.floor(this._count - this._lowestCount)
  }

  /**
   * Limpa o Deque
   */
  clear() {
    this._count = 0
    this._lowestCount = 0
    this._items = {}
  }

  /**
   * @returns {String} retorna todos os items do Deque
   */
  toString() {}
}
