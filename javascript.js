<<<<<<< HEAD
const bookForm = document.getElementById("BookForm");
const bookList = document.getElementById("book-list");
const submitBtn = document.getElementById("submit-btn");

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const pub_date = document.getElementById("pub_date");
const genre = document.getElementById("genre");

let books = [];
let editingIndex = -1;

bookForm.addEventListener("submit", function(e) {
e.preventDefault();

const data = {
title: title.value,
author: author.value,
isbn: isbn.value,
publication_date: pub_date.value,
genre: genre.value
};

if(editingIndex === -1){
books.push(data);
}else{
books[editingIndex] = data;
editingIndex = -1;
submitBtn.textContent = "Add Book";
}

bookForm.reset();
renderBooks();
});

function renderBooks(){
bookList.innerHTML = "";

books.forEach((b,i)=>{
bookList.innerHTML += `
<tr class="border">
<td class="p-2">${b.title}</td>
<td>${b.author}</td>
<td>${b.isbn}</td>
<td>${b.publication_date}</td>
<td>${b.genre}</td>
<td>
<button onclick="editBook(${i})" class="text-green-600 mr-2">Edit</button>
<button onclick="deleteBook(${i})" class="text-red-600">Delete</button>
</td>
</tr>
`;
});
}

function editBook(i){
const b = books[i];

title.value = b.title;
author.value = b.author;
isbn.value = b.isbn;
pub_date.value = b.publication_date;
genre.value = b.genre;

editingIndex = i;
submitBtn.textContent = "Update Book";
}

function deleteBook(i){
books.splice(i,1);
renderBooks();
}
=======
let books = [];
let editIndex = -1;

function validateForm() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();
  const publication_date = document.getElementById("publication_date").value;
  const genre = document.getElementById("genre").value;
  const price = document.getElementById("price").value;

  if (title === "") {
    alert("Title is required");
    return false;
  }

  if (author === "") {
    alert("Author is required");
    return false;
  }

  if (isbn === "") {
    alert("ISBN is required");
    return false;
  }

  if (isbn.length !== 10 && isbn.length !== 13) {
    alert("ISBN must contain 10 or 13 digits");
    return false;
  }

  if (isNaN(isbn)) {
    alert("ISBN must be numeric");
    return false;
  }

  if (publication_date === "") {
    alert("Publication Date is required");
    return false;
  }

  const today = new Date();
  const selectedDate = new Date(publication_date);

  if (selectedDate > today) {
    alert("Publication Date cannot be in the future");
    return false;
  }

  if (genre === "genre") {
    alert("Please select a genre");
    return false;
  }

  if (price === "" || price <= 0) {
    alert("Price must be greater than 0");
    return false;
  }

  return true;
}

function addBook() {
  if (!validateForm()) {
    return;
  }

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();
  const publication_date = document.getElementById("publication_date").value;
  const genre = document.getElementById("genre").value;
  const price = document.getElementById("price").value;

  const book = {
    title,
    author,
    isbn,
    publication_date,
    genre,
    price,
  };

  if (editIndex === -1) {
    books.push(book);
  } else {
    books[editIndex] = book;
    editIndex = -1;
  }

  displayBooks();
  clearForm();
}

function displayBooks() {
  const tbody = document.getElementById("Book_Table");

  tbody.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    const age = calculateBookAge(book.publication_date);
    const category = getGenreCategory(book.genre);

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>${book.publication_date}</td>
      <td>${age} Years</td>
      <td>${book.genre}</td>
      <td>${category}</td>
      <td>${book.price}</td>
      <td>
        <button type="button" onclick="updateBook(${index})">
          Edit
        </button>

        <button type="button" onclick="deleteBook(${index})">
          Delete
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function updateBook(index) {
  editIndex = index;

  const book = books[index];

  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("isbn").value = book.isbn;
  document.getElementById("publication_date").value =
    book.publication_date;
  document.getElementById("genre").value = book.genre;
  document.getElementById("price").value = book.price;
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
  document.getElementById("publication_date").value = "";
  document.getElementById("genre").value = "genre";
  document.getElementById("price").value = "";
}

function calculateBookAge(publication_date) {
  const currentYear = new Date().getFullYear();
  const publicationYear = new Date(publication_date).getFullYear();

  return currentYear - publicationYear;
}

function getGenreCategory(genre) {
  if (genre === "Programming" || genre === "Technology") {
    return "Technical";
  }

  if (genre === "History") {
    return "Historical";
  }

  if (genre === "Science") {
    return "Educational";
  }

  return "Other";
}
>>>>>>> a7044bc (Implemented Book Management System with CRUD operations, validation, age calculation and genre categorization)
