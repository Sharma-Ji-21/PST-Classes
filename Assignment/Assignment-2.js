/*1. Swapping Variables using a Third Variable
- Declare a variable x and assign it the value of 10.
- Declare another variable y and assign it the value of 20.
- Now, swap the values of x and y using a third variable and print the results.
*/
let x=10;
let y=20;
let z;
z=x;
x=y;
y=z;
console.log("After swapping: x = " + x + ", y = " + y); // output=> After swapping: x = 20, y = 10

/*2. Logging Multiple Variables
- Declare three variables: a, b, and c.
- Assign appropriate values to each and log them to the console.
*/
let a=10
let b=20
let c=30;
console.log("Values of a, b, and c: a -> " + a + ", b -> " + b + ", c -> " + c); // output=> Values of a, b, and c: a -> 10, b -> 20, c -> 30

/*
3. Create three variables using proper naming conventions: one for storing a person's name, one for storing a person's age, and one for storing whether the person is a student or not.
*/
let personName="Om Sharma";
let personAge=17;
let personIsStudent=true;
console.log("Name->"+ personName + "\tage->"+ personAge + "\tstudent present->"+ personIsStudent); //output=>    Name->Om Sharma age->17 student present->true

/*
4.Declare a variable myFavoriteColor and set it to your favorite color.
Change its value to another color and print both the original and new values.
*/
let myFavColour="Green";
console.log("My favorite color initially is: " + myFavColour); // output=> My favorite color initially is: Green
myFavColour="Blue";
console.log("After changing my favorite color, it becomes: " + myFavColour); // output=> After changing my favorite color to blue, it becomes: Blue