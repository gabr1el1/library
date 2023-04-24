class Book{
    constructor(title, author, eitorial, numPages, read){
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.numPages = numPages;
        this.read = read;
    }
}
const myLibrary = (function(){
    //variables
    myBooks = [];
    //DOM
    const addBookBtn = document.querySelector(".add-book-confirm");
    //binding
    addBookBtn.addEventListener("click",function(){
        const titleInput = document.querySelector("#title");
        const authorInput = document.querySelector("#author");
        const editorialInput = document.querySelector("#editorial");
        const numPagesInput = document.querySelector("#num-pages");
        const readCheck = document.querySelector("#read-book");
        addBookToLibrary(titleInput.value, authorInput.value, 
        editorialInput.value,numPagesInput.value,readCheck.checked);
    });
    function addBookToLibrary(title, author, editorial, numPages, read){
        const newBook = new Book(title,author,editorial,numPages,read);
        myBooks.push(newBook);
        displayBooks();
    }
    function displayBooks(){
        const bookList = document.querySelector(".book-list");
        let htmlString="";
        myBooks.forEach((book,index)=>{
            htmlString+=
            `<div class="card">
            <div class="card-content">
                <p><span class="title-info">Title: </span><span>${book.title}</span></p>
                <p><span class="title-info">Author: </span><span>${book.author}</span></p>
                <p><span class="title-info">Editorial: </span><span>${book.editorial}</span></p>
                <p><span class="title-info">Number of pages: </span><span>${book.numPages}</span></p>
                
            </div>
            <div class="card-options">
            `
            if(book.read){
                htmlString+=
                `
                    <label for="${index}">Read</label>
                    <input class="read-check" data-index="${index}" type="checkbox" checked>
                    <button class="remove-button" data-index=${index}>Remove</button>
                </div>`
                
            }else{
                htmlString+=
                `
                    <label for="${index}">Read</label>
                    <input class="read-check" data-index="${index}" type="checkbox">
                    <button class="remove-button" data-index=${index}>Remove</button>
                </div>`
            }
            htmlString+=`</div>`  
        });
        bookList.innerHTML = htmlString;
        Array.from(document.querySelectorAll(".read-check")).forEach(checkbox=>{
            checkbox.addEventListener("click",changeReadStatus);
        });
        Array.from(document.querySelectorAll(".remove-button")).forEach(button=>{
            button.addEventListener("click",removeBook);
        });
    }
    function removeBook(){
        myBooks.splice(this.dataset.index,1);
        displayBooks();
    }
    
    function changeReadStatus(){
        myBooks[this.dataset.index].read = this.checked;
    }
})();




