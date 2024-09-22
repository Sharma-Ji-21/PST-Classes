// You are developing a digital library system to manage books. Each book has a title, author, and year of
// publication. You want to create a library that can add books, list them, and clone books for editing
// without altering the original copy.
// Create a constructor function to create 'Book' objects with properties: 'title', 'author', and 'year'.
// Implement a function 'addBook' to add a book to the library (an array of books).
// Implement a function 'listBooks' that lists all books in the library, using a 'for...of' loop.
// Use the 'Object.assign()' method to create a clone of a book object, allowing changes to be made
// without affecting the original.
// Test the functions by adding at least 3 books, cloning one, and listing all books.
// Sample template:
// Constructor function to create 'Book' objects

function Book(title, author, year) {
    this.title=title;
    this.author=author;
    this.year=year;
}
const library = [];

function addBook(book) {
    library.push(book);
}

function listBooks() {
    for (let book of library)
        console.log(`book ${library.indexOf(book) + 1}: ${book.title}, by ${book.author}, published in ${book.year}`);
}
addBook(new Book("1984", "George Orwell", 1949));
addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

console.log("Listing original books: ");
listBooks()

let originalBook=library[1]
let cloneBook=Object.assign({}, originalBook);
cloneBook.title="The Lord of the Rings";
cloneBook.year=1937;
console.log("clone Book is here: ");
console.log(`${cloneBook.title}, by ${cloneBook.author}, published in ${cloneBook.year}`);


// Question 2: Shopping Cart
// You are building an online shopping cart where users can add, and view items. Each item has a name
// price, and quantity.
// 1. Create a factory function 'createItem' to generate an item with properties 'name', 'price', and
// 'quantity'.
// 2. Implement a 'cart' array to store items.
// 3. Implement 'addItem' to add items from the cart.
// 4. Use a 'for...in' loop to iterate over the properties of an item object and display them.
// 5. Implement a 'calculateTotal' function that uses a 'for...of' loop to calculate the total cost of
// items in the cart.


function createItem(name, price, quantity) {
    return { name:name, price:price, quantity:quantity};
}

const cart = [];

function addItem(item) {
    cart.push(item);
}

function listItems() {
    for (let i in cart){
        console.log(`Item details: \nname: ${cart[i].name}\nprice: ${cart[i].price}\nquantity: ${cart[i].quantity}`);
    }
}

function calculateTotal() {
    let total = 0;
    for(let cost of cart){
        total+=cost.price*cost.quantity;
    }
    return `Total Cost-> ${total}`;
}
addItem(createItem("Laptop", 1200, 1));
addItem(createItem("Phone", 800, 2));
listItems();
console.log(calculateTotal());