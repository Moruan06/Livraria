const myLibrary = [];
const container = document.querySelector("main");
const formBox = document.querySelector("#formBox");
const bookForm = document.querySelector("#newBookForm");

document.getElementById("addBookBtn").addEventListener('click', (e) =>{
  e.preventDefault();
  formBox.classList.remove("hidden");
  console.log("Button clicked");
})

document.getElementById("cancelBtn").addEventListener('click', (event) => {
  event.preventDefault();
  formBox.classList.add("hidden");
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInputForm = document.querySelector("#title").value;
  const authorInputForm = document.querySelector("#author").value;
  const imageInputForm = document.querySelector("#image").value;
  const readInputForm = document.querySelector("#read").checked;
  addBookToLibrary(
    titleInputForm,
    authorInputForm,
    imageInputForm,
    readInputForm
  );
  bookForm.reset();
  displayBook(myLibrary);
  formBox.classList.add("hidden");
});

function Book(title, author, bookCover, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.bookCover = bookCover;
  this.read = read;
}

function addBookToLibrary(titleInput, authorInput, bookCoverInput, readInput) {
  let newBook = new Book(titleInput, authorInput, bookCoverInput, readInput);
  myLibrary.push(newBook);
}

function displayBook(arr) {
  const cardsHTML = arr
    .map(
      (item) =>
        `<div class="card" data-id="${item.id}">
            <img src="${item.bookCover}" alt="Capa do livro">
            <p class="title"> ${item.title} </p>
            <p class="author"> by ${item.author} </p>
         </div>`
    )
    .join("");

  container.innerHTML = cardsHTML;
}