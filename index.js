const myLibrary = [];
const content = document.querySelector(".content");
const contentOptions = document.querySelector(".content-options");
const form = document.querySelector(".form");

var contentPage = document.getElementById("page").textContent;
var formVisible = false;

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function showForm() {
  if (formVisible == false) {
    form.style.pointerEvents = "auto";
    form.style.opacity = "1";
    formVisible = true;
  } else if (formVisible == true) {
    form.style.pointerEvents = "none";
    form.style.opacity = "0";
    formVisible = false;
  }
}

function addBookToLibrary() {
  console.log(document.getElementById("Name").value)
  console.log(document.getElementById("Author").value)
  console.log(document.getElementById("Pages").value)
  
  if (formVisible == true && document.getElementById("Name").value != "" && document.getElementById('Author').value != '' && document.getElementById('Pages').value != '') {
    const formName = document.getElementById("Name");
    const formAuthor = document.getElementById("Author");
    const formPages = document.getElementById("Pages");
    const formStatus = "Not Read";

    const book = new Book(
      formName.value,
      formAuthor.value,
      formPages.value,
      formStatus
    );
    console.log(document.getElementById("Name").value)
    console.log(document.getElementById("Author").value)
    console.log(document.getElementById("Pages").value)
    myLibrary.push(book);
    console.log(myLibrary.length)

    formName.value = "";
    formAuthor.value = "";
    formPages.value = "";
    start();
  }
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

function showBooks() {
  content.innerHTML = "";
  for (index = contentPage * 4 - 4; index < contentPage * 4; index++) {
    createCard(myLibrary[index]);
  }
}

function nextPage() {
  if (contentPage * 4 < myLibrary.length) contentPage++;
  document.getElementById("page").textContent = contentPage;
  showBooks();
}

function prevPage() {
  if (contentPage == 1) {
  } else {
    contentPage--;
    document.getElementById("page").textContent = contentPage;
    showBooks();
  }
}

function start() {
  if (myLibrary.length == 0) {
    contentOptions.style.pointerEvents = "none";
    contentOptions.style.opacity = "0";
    form.style.pointerEvents = "none";
    form.style.opacity = "0";
  } else if(myLibrary.length > 4){
    showBooks();
    contentOptions.style.pointerEvents = "auto";
    contentOptions.style.opacity = "1";
  } else {
    showBooks();
  }
}

start();
