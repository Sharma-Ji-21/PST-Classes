/*
Object & Array
Objct:- in real life, object are things like car, house......

object properties:
name, age, gender, color, ....And much more.... (Feature of a Particular thing):

car.name, car.model, car.weight, car.color, ....and much more....


object functionality / method::
drive(), stop(), accelerate(), brake() (Behavior of a Particular thing)

car.drive() -> car starts moving
car.stop() -> car stops moving
car.accelerate() -> car speeds up
car.brake() -> car slows down

object Definition:
to define object in js we uses object literal syantax
*/
const person={
    name: "Anshuman", // this is one of the properties of the person
    age: 18, 
    gender: "Female",
    color: "Black",
};
//every key in object as a string
const person78={
    "name": "soumya", // this is one of the properties of the person
    "age": 19, 
    "gender": "male",
    "color": "white",
};
const person2={}; // This is the other method of defining
    person2.name= "Yug"; 
    person2.age= 17;
    person2.gender= "Male";  // this is one of the properties of the person2
    person2.color= "Black";

const car1={
    name: "Toyota", // this is one of the properties of the car1
    model: "Corolla",
    weight: 1200,
    color: "Grey",
};
car1.isElectric= true;

console.log(person.name, person2.name, car1, person78);

//Accessing Object method:
console.log(person.name+" is having "+car1.name+" "+car1.model+ " which is "+car1.color+" in color"+" And Yes "+person2.name+" is "+ person2.color+" in color");
console.log("is the car electric "+car1.isElectric);

/*
Array:
Array is a collection of element and the element which are stored must be of same data type like if we are storing age then the values stored must be numbers only.

insted of doing the declaring let variable for each new car we define an array
let car1 = Saab;
let car2 = Volvo;
let car3 = BMW;
Instead of doing this define array of cars.

=> const cars = ["Saab", Nissan"Volvo", "BMW"];

Indexing:
Indexing starts from 0 in array like if we are storing data from 1 to 10 like(1,2,3....,10) no if I call the digit having index 0 it will print 1 or I call 9 then it will print 10.

General formate of access to array items
arrayName[index]

Example: 
*/
let Array=[2,3,4,5,6,7,8];
Array[2]=88; // Changing Array Element
console.log(Array); // output-> [ 2, 3, 88, 5, 6, 7, 8 ]
console.log(Array[2]); // output-> 88
console.log(Array.length); // output->7car

// Accessing Array
let LOL=Array[3];
console.log(LOL); // output-> 5

//another way of creating array
const numbers =[];
numbers[0]=1;
numbers[1]=2;
numbers[2]=3;
console.log(numbers); // output->[ 1, 2, 3 ]
// Push Use:-
numbers.push(4,5);
console.log(numbers); // output->[ 1, 2, 3, 4, 5 ]
// Pop Use:-
let a= numbers.pop();  // anything we write in b/w the () nothong matters for Pop
console.log("the element which is poped is "+ a);   //**DOUBT** **DOUBT** **DOUBT** **DOUBT**
console.log(numbers); // output->[ 1, 2, 3, 4 ]
// Fill Use:-
numbers.fill(8,1,3); // from 1 to 3 (not including 3) all elements will be replaced with 3
console.log(numbers); // output->[ 1, 8, 8, 4 ]


/* Array Methods:
    1. Length:
    It returns the total number of elements in an array.
    Ex:- console.log(numbers.length); // output-> 3

    2. Push:
    It adds one or more elements to the end of an array and returns the new length of the array.
    Ex:- numbers.push(4,5); console.log(numbers); // output->[ 1, 2, 3, 4, 5 ]

    3. Pop:
    It removes the last element from an array and returns that element.
    Ex:- let a= numbers.pop();  // anything we write in b/w the () nothong matters for Pop
    console.log("the element which is poped is "+ a);
    console.log(numbers); // output->[ 1, 2, 3, 4 ]

    4. Fill:
    It fills all the elements in an array from a start index to an end index with a static value.
    Ex:- numbers.fill(8,1,3); // from 1 to 3 (not including 3) all elements will be replaced with 3
    console.log(numbers); // output->[ 1, 8, 8, 4 ]

    DIFF B/W [] AND . when calling property:
    -every key in object is a string
    - if we have a key value with empty spaces inside and we want to cal that property then we use [] otherwise . is enough
    };
    //what are the rule to define key in object
    //what are the specific reasons to use object or array
*/