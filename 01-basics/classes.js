
class Book {
    /**
     * Creates an instance of Book.
    * @param {*} title
    * @param {*} pages
    * @param {*} isbn
    */
    constructor(title, pages, isbn){
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
}



class ITBook extends Book{
    /**
     *Creates an instance of ITBook.
     * @param {*} title
     * @param {*} pages
     * @param {*} isbn
     * @param {*} tecnology
     * @memberof ITBook
     */
    constructor(title, pages, isbn, tecnology) {
        super(title, pages, isbn)
        this.tecnology = tecnology
    }

    printTecnology(){
        console.log(this.tecnology);
    }
}


let myBook = new ITBook('Javascript', 406,'123456', 'Web development')

myBook.printTecnology()