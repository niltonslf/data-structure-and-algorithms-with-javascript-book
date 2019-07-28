const items = new WeakMap()

class Stack {
  constructor() {
    items.set(this, [])
  }

  push(element) {
    const stack = items.get(this)
    stack.push(element)
  }

  pop() {
    if (this.isEmpty()) return undefined

    const stack = items.get(this)
    return stack.pop()
  }

  peek() {
    if (this.isEmpty()) return undefined

    const stack = items.get(this)
    return stack[stack.length - 1]
  }

  clear() {
    while (this.peek()) {
      let removed = this.pop()
      console.log('Item removido da pilha:', removed)
    }
  }

  isEmpty() {
    const stack = items.get(this)
    return stack.length === 0
  }

  size() {
    const stack = items.get(this)
    return stack.length
  }

  toString() {
    // TODO:
  }
}

module.exports = Stack
