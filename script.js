const myLibrary = [];

function Book(tittle, author, bookCover, read) {
    this.id = crypto.randomUUID(),
    this.tittle = tittle,
    this.author = author,
    this.bookCover = bookCover,
    this.read = read
}

function addBookToLibrary(tittleInput, authorInput, bookCoverInput, readInput) {
    let newBook = new Book(tittleInput, authorInput, bookCoverInput, readInput);
    myLibrary.push(newBook)
}

console.log(myLibrary)