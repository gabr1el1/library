const addBookForm = document.querySelector("#add-book-form")
const addBookBtn = document.querySelector("#add-book-button");
const bookList = document.querySelector("#book-list")

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numPagesInput = document.querySelector("#num-pages");
const editorialInput = document.querySelector("#editorial");
const allInputs = document.querySelectorAll("#add-book-form input");

//------------------------------------------------
addBookForm.addEventListener('submit',addBookToLibrary);
//-------------------------------------------

let myLibrary = [];

function Book(title, author, numPages, editorial){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.editorial = editorial;
}
function addBookToLibrary(event){
    event.preventDefault();

    const newBook = new Book(titleInput.value,authorInput.value
    , numPagesInput.value, editorialInput.value);
    myLibrary.push(newBook);
    displayBooks();
    cleanInputs(allInputs);
}

function cleanInputs(inputs){
    Array.from(inputs).forEach(input=>{
        input.value = "";
    });
}
function displayBooks(){
    let htmlString = "";
    myLibrary.forEach(function(book, index){
        htmlString+=
        `<li>
            <p class="title">Title: ${book.title}</p>
            <p class="author">Author: ${book.author}</p>
            <p class="num-pages">Number of pages: ${book.numPages}</p>
            <p class="editorial">Editorial: ${book.editorial}</p>
            <button class="remove-btn" data-index=${index}>Remove</button>
        </li>`;
    });
    bookList.innerHTML = htmlString;
    const removeButtons = Array.from(document.querySelectorAll('.remove-btn'));
    removeButtons.forEach(button=>{
        button.addEventListener('click',removeBook);
    });
    
}

function removeBook(){
    myLibrary.splice(this.dataset.index,1);
    displayBooks();
}

displayBooks();