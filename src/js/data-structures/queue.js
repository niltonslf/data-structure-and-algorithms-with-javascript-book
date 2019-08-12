class Queue {
  constructor() {
    this._count = 0
    this._lowestCount = 0
    this._items = {}
  }

  /**
   * Adiciona elemento na fila
   * @param {*} element
   */
  enqueue(element) {
    this._items[this._count] = element
    this._count++
  }

  /**
   * Remove elemento da fila
   * @returns {*} retorna elemento removido
   */
  dequeue() {
    if (this.isEmpty()) return undefined
    const result = this._items[this._lowestCount]
    this._lowestCount++
    return result
  }

  /**
   * Retorna o primeiro item da fila
   */
  peek() {
    if (this.isEmpty()) return undefined
    return this._items[this._lowestCount]
  }

  /**
   * @returns {int} retorna tamanho da fila
   */
  size() {
    return this._count - this._lowestCount
  }

  /**
   * Veriica se a fila está vazia
   * @returns {boolean} retorna true se a fila estiver vazia e false se não
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * Limpa a fila
   */
  clear() {
    this._items = {}
    this._count = 0
    this._lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) return ''
    let objString = `${this._items[this._lowestCount]}`
    for (let i = this._lowestCount + 1; i < this._count(); i++) {
      objString += `${objString}, ${this._items[i]}`
    }

    return objString
  }
}

module.exports = Queue
