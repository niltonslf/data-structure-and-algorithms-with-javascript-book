const Book = require("./Book");

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log("Technology:\t", this.technology);
  }
}

module.exports = ITBook;
