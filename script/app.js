bookList = document.querySelector(".book-list");
addBtn = document.getElementById("add-btn");
inputName = document.getElementById("name-input");
inputAuthor = document.getElementById("author-input");
books = JSON.parse(localStorage.getItem("books")) || [];
displayBooks();
class Book {
     constructor() {
       
     }
   
     displayBooks() {
          bookList.innerHTML = "";
   
          books.forEach((item, index) => {
          let li = document.createElement("li");
          li.classList.add("show-text");
          li.innerHTML = `
               <h2 class="text">${item.name} - ${item.author}</h2>
               <button class="delete-btn" data-index="${index}">Delete</button>
          `;
          bookList.append(li);
          });
   
     const deleteBtn = document.querySelector(".delete-btn");
     deleteBtn.forEach((button) => {
         button.addEventListener("click", this.deleteHandler);
     });
     }
   
     deleteHandler(e) {
       const index = e.target.dataset.index;
       books.splice(index, 1);
       localStorage.setItem("books", JSON.stringify(this.books));
       this.displayBooks();
     }
   
     showHandler(e) {
       e.preventDefault();
   
       let name = inputName.value;
       let author = inputAuthor.value;
   
       if (name === "" || author === "") {
         alert("Enter valid values");
         return;
       }
   
       let book = { name, author };
       books.push(book);
   
       localStorage.setItem("books", JSON.stringify(this.books));
       this.displayBooks();
       inputName.value = "";
       inputAuthor.value = "";
     }
   }
const bookManager = new Book();
addBtn.addEventListener("click", showHandler);