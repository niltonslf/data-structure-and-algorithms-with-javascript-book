class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];
    return removedItem;
  }

  clear() {
    this.items = {};
    this.clear = 0;
  }

  isEmpty() {
    return this.count == 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

module.exports = Stack;
