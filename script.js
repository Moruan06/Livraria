let myLibrary = [];
const container = document.querySelector("main");
const dialog = document.querySelector("#formBox");
const bookForm = document.querySelector("#newBookForm");

container.addEventListener('click', (event) =>{
  if(event.target.matches(".readBtn")){
    const card = event.target.closest(".card");
    const bookId = card.dataset.id;

    const bookToUpdate = myLibrary.find(book => book.id === bookId)

    bookToUpdate.toggleStatus();
    displayBook(myLibrary)
  }

  if(event.target.matches(".deleteBtn")){
    const card = event.target.closest(".card");
    const bookId = card.dataset.id;

    myLibrary = myLibrary.filter(book => book.id !== bookId);
    displayBook(myLibrary);
  }
})

document.getElementById("addBookBtn").addEventListener("click", (event) => {
  event.preventDefault();
  dialog.showModal();
});

document.getElementById("cancelBtn").addEventListener("click", (event) => {
  event.preventDefault();
  bookForm.reset();
  dialog.close()
});

bookForm.addEventListener("submit", (event) => {
  const data = new FormData(bookForm);
  const titleInputForm = data.get("title")
  const authorInputForm = data.get("author")
  const imageInputForm = data.get("image")
  const readInputForm = data.get("read")
  addBookToLibrary(
    titleInputForm,
    authorInputForm,
    imageInputForm,
    readInputForm
  );
  bookForm.reset();
  displayBook(myLibrary);
});
class Book{
  constructor(title, author, bookCover, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.bookCover = bookCover;
    this.read = read;
  }

  toggleStatus(){
    this.read = !this.read;
  }
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