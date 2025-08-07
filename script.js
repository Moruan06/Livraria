const myLibrary = [];
const container = document.querySelector("#container");

function Book(title, author, bookCover, read) {
  (this.id = crypto.randomUUID()),
    (this.title = title),
    (this.author = author),
    (this.bookCover = bookCover),
    (this.read = read);
}

function addBookToLibrary(titleInput, authorInput, bookCoverInput, readInput) {
  let newBook = new Book(titleInput, authorInput, bookCoverInput, readInput);
  myLibrary.push(newBook);
}

function addBookCard(arr) {
  const cardsHTML = arr
    .map((item) =>
        `<div class="card">
            <img src="${item.bookCover}" alt="Capa do livro">
            <p class="title"> ${item.title} </p>
            <p class="author"> by ${item.author} </p>
         </div>`
    )
    .join("");

  container.innerHTML += cardsHTML;
}

addBookCard(myLibrary);
