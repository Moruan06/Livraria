let myLibrary = [];
const container = document.querySelector("main");
const formBox = document.querySelector("#formBox");
const bookForm = document.querySelector("#newBookForm");

container.addEventListener('click', (event) =>{
  if(event.target.matches(".readBtn")){
    console.log("butao clicado")
    const card = event.target.closest(".card");
    const bookId = card.dataset.id;

    const bookToUpdate = myLibrary.find(book => book.id === bookId)

    bookToUpdate.toogleStatus();
    displayBook(myLibrary)
  }

  if(event.target.matches(".deleteBtn")){
    const card = event.target.closest(".card");
    const bookId = card.dataset.id;

    myLibrary = myLibrary.filter(book => book.id !== bookId);
    displayBook(myLibrary);
  }
})

document.getElementById("addBookBtn").addEventListener("click", (e) => {
  e.preventDefault();
  formBox.classList.remove("hidden");
  console.log("Button clicked");
});

document.getElementById("cancelBtn").addEventListener("click", (event) => {
  event.preventDefault();
  bookForm.reset();
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
  this.toogleStatus = () => this.read = !this.read;
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
            <div class="cardButtons">
              <button class="readBtn">${
                item.read
                  ? "<i class='bi bi-eye' style='color: green' title='read'></i>"
                  : "<i class='bi bi-eye-slash' style='color: darkgoldenrod' title='not read yet'></i>"
              }</button>
              <button class="deleteBtn" title='delete'><i class="bi bi-trash3"></i></button>
            </div>
         </div>`
    )
    .join("");
  container.innerHTML = "";
  container.innerHTML = cardsHTML;
}