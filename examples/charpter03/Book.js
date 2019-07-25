class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log("ISBN:\t", this.isbn);
  }
}

module.exports = Book;
