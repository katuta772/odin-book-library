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
  if (!formVisible) {
    form.style.display = "flex";
    formVisible = true;
  } else {
    form.style.display = "none";
    formVisible = false;
  }
}

function addBookToLibrary() {
  if (
    formVisible == true &&
    document.getElementById("Name").value != "" &&
    document.getElementById("Author").value != "" &&
    document.getElementById("Pages").value != ""
  ) {
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
    myLibrary.push(book);
    alert('Book has been added to your library!');

    formName.value = "";
    formAuthor.value = "";
    formPages.value = "";
    start();
  }
}

function createCard(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = index;

  const cardName = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardPages = document.createElement("div");
  const cardStatus = document.createElement("div");
  const cardDelete = document.createElement('button');

  cardStatus.addEventListener("click", setStatus);
  cardDelete.addEventListener('click', deleteBook);

  cardName.textContent = book.name;
  cardName.id = "name";
  cardAuthor.textContent = book.author;
  cardAuthor.id = "author";
  cardPages.textContent = book.pages + " pages";
  cardPages.id = "pages";
  cardStatus.textContent = book.status;
  cardStatus.id = "status";
  cardDelete.textContent = 'Remove'
  cardDelete.id = "delete";

  card.appendChild(cardName);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardStatus);
  card.appendChild(cardDelete);

  content.appendChild(card);
}

function showBooks() {
  content.innerHTML = "";

  for (index = contentPage * 4 - 4; index < contentPage * 4; index++) {
    createCard(myLibrary[index], index);
  }
}

function deleteBook() {
  const position = this.parentElement.id;
  for(index = 0; index < myLibrary.length; index++){
    if(index == position){
      myLibrary.splice(index,1);
    }
  }
  alert('Book has been removed from your library!');
  start();
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

function setStatus() {
  const divElement = this.parentElement;
  console.log(divElement.id)
  
  for (let index = 0; index < myLibrary.length; index++) {
    if (divElement.id == index && myLibrary[index].status == "Not Read") {
      myLibrary[index].status = "Read";
    } else if(divElement.id == index && myLibrary[index].status == "Read"){
      myLibrary[index].status = "Not Read";
    }
  }
  showBooks();
}

function start() {
  if (myLibrary.length == 0) {
    contentOptions.style.display = 'none';
    form.style.display = 'none'
    showBooks();
  } else if (myLibrary.length > 4) {
    showBooks();
    contentOptions.style.display = 'flex';
    form.style.display = 'flex';
  } else {
    showBooks();
  }
}

start();
