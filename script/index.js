const bookList = document.querySelector(".book-list");
const addBtn = document.getElementById("add-btn");
const inputName = document.getElementById("name-input");
const inputAuthor = document.getElementById("author-input");

const storedBooks = JSON.parse(localStorage.getItem("books"));
const books = storedBooks || [];

function displayBooks() {
     bookList.innerHTML = "";

     books.forEach((item,index) => {
     let li = document.createElement("li");
     li.classList.add("show-text");
     li.innerHTML = `
     <h2 class="text">${item.name} - ${item.author}</h2>
     <button class="delete-btn" data-index="${index}">Delete</button>
     `;
     bookList.append(li);
     });
     const deleteBtn = document.querySelectorAll(".delete-btn");
     deleteBtn.forEach((button) => {
          button.addEventListener("click", deleteHandler);
      });
}

function deleteHandler(e) {
     const index = e.target.dataset.index;
     books.splice(index, 1);
     localStorage.setItem("books", JSON.stringify(books));
     displayBooks();
 }

function showHandler(e) {
     e.preventDefault();

     let name = inputName.value;
     let author = inputAuthor.value;

     if (name === "" || author === ""){
     alert("Enter valid values");
     return;
     }

     let book = { name, author };
     books.push(book);

     localStorage.setItem("books", JSON.stringify(books));
     displayBooks();
     inputName.value = "";
    inputAuthor.value = "";
}

addBtn.addEventListener("click", showHandler);