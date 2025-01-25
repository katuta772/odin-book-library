const myLibrary = [];
const content = document.querySelector(".content");

var contentPage = document.getElementById("page").textContent;

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(name, author, pages, status) {
  const book = new Book(name, author, pages, status);
  myLibrary.push(book);
}

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardName = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardPages = document.createElement("div");
  const cardStatus = document.createElement("div");

  cardName.textContent = book.name;
  cardName.id = "name";
  cardAuthor.textContent = book.author;
  cardAuthor.id = "author";
  cardPages.textContent = book.pages + " pages";
  cardPages.id = "pages";
  cardStatus.textContent = book.status;
  cardStatus.id = "status";

  card.appendChild(cardName);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardStatus);

  content.appendChild(card);
}

function nextPage() {
  if (contentPage * 4 < myLibrary.length) contentPage++;
  document.getElementById("page").textContent = contentPage;
  content.innerHTML = '';
  showBooks();
}

function prevPage() {
  if (contentPage == 1) {
  } else {
    contentPage--;
    document.getElementById("page").textContent = contentPage;
    content.innerHTML = '';
    showBooks();
  }
}

function showBooks() {
    for(index = (contentPage * 4 - 4); index <(contentPage * 4); index++){
        createCard(myLibrary[index])
    }
}

// Test examples
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit4", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit5", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit6", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit7", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary("The Hobbit8", "J.R.R. Tolkien", 295, "Not Read");

showBooks();