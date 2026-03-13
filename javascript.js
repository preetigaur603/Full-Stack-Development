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
