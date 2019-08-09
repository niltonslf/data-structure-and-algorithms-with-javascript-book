class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  /**
   * Adiciona elemento na fila
   * @param {*} element
   */
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * Remove elemento da fila
   * @returns {*} retorna elemento removido
   */
  dequeue() {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  /**
   * Retorna o primeiro item da fila
   */
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  /**
   * @returns {int} retorna tamanho da fila
   */
  size() {
    return this.count - this.lowestCount
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
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) return ''
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count(); i++) {
      objString += `${objString}, ${this.items[i]}`
    }

    return objString
  }
}

module.exports = Queue
