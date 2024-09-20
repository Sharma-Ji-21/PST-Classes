// Question 1: 
// Write a factory function in JavaScript that creates a person object with name and age properties.
// And then print them on console by function calling.

function createPerson(name, age) {
    return{
        name:name,
        age:age,
    }
}
function printPersonDetails(person){
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
};

const person1 = createPerson("Om Sharma", 17)
printPersonDetails(person1);

// Question 2: Create a function called printPersonInfo that takes a person object as an argument and
// prints its details (name and age) on the console. Create a person object and use the printPersonInfo
// function to display its information.

function printPersonInfo(name1, age1){
    this.name1=name1;
    this.age1=age1;
}
const person2 = new printPersonInfo("Jiya",16);
console.log(person2);

// Question 3: Create a constructor function called Book that takes title and author as parameters and
// assigns them as properties to the book object. Then, create two book objects using the Book constructor
// and display their details on the console.

function Book(title, author){
    this.title=title;
    this.author=author;
}
const book1=new Book("The Catcher in the Rye", "J.D. Salinger");
const book2=new Book("1984", "George Orwell");
console.log("Book 1:");
console.log(book1);
console.log("Book 2:");
console.log(book2);