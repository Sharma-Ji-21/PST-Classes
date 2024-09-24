// Problem 1: Function Expression
// Write a function expression called calculateArea that takes two parameters: 
// length and width. It should return the area of a rectangle. Test the function
// with different values.
// Example:
const calculateArea = function(length, width) {
    // Your code here
    return length*width
};
console.log(calculateArea(5, 10)); // Expected output: 50
console.log(calculateArea(3, 7)); // Expected output: 21



// Problem 2: Arrow Function
// Write an arrow function called calculatePerimeter that takes two parameters,
// length and width, and returns the perimeter of a rectangle.
// Example:
const calculatePerimeter = (length, width) => {
// Your code here
return (length+width)*2;
}
console.log(calculatePerimeter(5, 10)); // Expected output: 30



// Problem 3: Arrow Function and this Context
// Create an object person with a property name and a method greet that uses an
// arrow function. The arrow function should return a greeting using the name 
// property of the object.
// Example:
const person = {
name: 'John',
greet: () => {
// Your code here
return `Hello, ${person.name}!`
}
};
console.log(person.greet()); // Expected output: "Hello, John!"



// Problem 4: Arrow Function for Array Manipulation
// Write an arrow function filterEvenNumbers that takes an array of numbers and 
// returns a new array containing only the even numbers.
// Example:
const filterEvenNumbers = (arr) => {
    let evenArray=[];
    for (let index=0;index<arr.length;index++){
        if (arr[index]%2==0){
            evenArray.push(arr[index])
        }
    }
    return evenArray;
// Your code here
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]



// Problem 5: Default Parameters in Functions
// Write a function greet that accepts two parameters: name and greeting. The 
// greeting parameter should have a default value of "Hello". If no greeting is 
// provided, the function should return "Hello, [name]".
// Example:
function greet(name, greeting = "Hello") {
// Your code here
return `${greeting}, ${name}`;
}
console.log(greet("Alice")); // Expected output: "Hello, Alice"
console.log(greet("Bob", "Hi there")); // Expected output: "Hi there, Bob"



// Problem 6: Function vs Arrow Function with this
// Write two methods inside an object car. One method should be a regular 
// function, and the other should be an arrow function. The regular function 
// should correctly access the object?s model property using this, while the arrow 
// function should demonstrate the inability to use this.
const car={
    model:'Tesla',
    regularFunction:function(){
        console.log(this.model);
    },
    arrowFunction:()=>{
        console.log(this.model);
    }
}
car.regularFunction(); // Expected output: Tesla
car.arrowFunction(); // Expected output: undefined