/*
const Book = require("./Book.js");

const myBook = new Book("Title", 256, 3293);
// Posso reescrever propriedades
myBook.isbn = 000;
// Como também métodos
myBook.printIsbn = function() {
  console.log("rewrited");
};

myBook.printIsbn();

*/

const ITBook = require("./ITBook");

const myITBook = new ITBook(
  "Data sctructure with js",
  406,
  "978-85-7522-693-3",
  "Javascript"
);

myITBook.printIsbn();
myITBook.printTechnology();
