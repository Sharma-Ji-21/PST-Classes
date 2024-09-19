/* 
Functions:
-Function is the heart of JavaScript.
-Functions are reusable block of code that perform a specific task.
-We can define the fuction once and can call it multiple times.
-Fuction can be called by functionName();
-Inside a function if we call "let x = 44" then then the value x will be assigned through out the function and if we call "var x = 44" then the value of x will be assigned through out the code

Need of functions:-
-Code Reuasblity
-Organised Code
-Readability increases

Syntax:
function functionName(parameters) {
    // code to be executed
}
    Ex:-
*/
function greet(){  
    console.log("Hello Ramoliya");
    console.log("Hello Tarman");
    console.log("Before calling greet");
}
greet(); // without this the code doesn't work because we need to call greet().
console.log ("After calling greet");
/*
Control flow (code flow) example before and after calling greet().

creat one function and call it with different arguments:-
*/
function printName(name) {
    console.log("Hello " + name);
}
printName("OM SHARMA");
printName("YUG RAMOLIYA");
printName("Tarman")

// Multiple Values to a function
function addNum(Num1,Num2){
    console.log(Num1 + Num2);
}
addNum(2,5);
addNum(3,6);

// ex=>2
// function RunD(Run_D){
//     console.log("Run_D-> " + Run_D);
// }
// RunD("Yug");


// Returning a value from a function
function greeting(Name){
    console.log("Greeting " + Name);
    return "My Name is " + Name; 
// return can return only one value and the code written after return doesn't work
// break the fiunction evaluation
    console.log("After return statement");
}
greeting("Om Sharma");

// Template literal:
let firstName="Yug";
let lastName="Ramoliya";
let age=17;

console.log (`Hello, Myself ${firstName} ${lastName} & I'm ${age}.`);

// Question 1
function addNumbers(a,b){
    console.log("Here is the sum-> "+ (a+b))
}
addNumbers(2,3);

// Question 2
function multiplyNum(x,y,z){
    console.log("Here is the Multiplication-> "+ (x*y*z));
}
multiplyNum(2,3,4);

// Question 3
function Test(){
    const Marks1={
        Maths: 80,
        Science: 75,
        English: 90,
        Social: 85,
        Biology: 95,
    }
    const Marks2={
        Maths: 70,
        Science: 85,
        English: 95,
        Social: 80,
        Biology: 80,
    }
    let marksSecured = Marks1.Maths + Marks1.Science + Marks1.Biology + Marks1.English + Marks1.Social;
    let marksSecured2 = Marks2.Maths + Marks2.Science + Marks2.English + Marks2.Social+ Marks2.Biology;
    let totalMarks = 5;
    let avg = marksSecured / totalMarks;
    let avg2 = marksSecured2 / totalMarks;
    console.log("Here is the average-> "+ avg);
    console.log("Here is the average of second student-> "+ avg2);
}
Test();

// Question 4

function Details(){
    const Student={

        fullName:"Anshuman",
        gender:"Male",
        age:17,
        rollNo: 43,
        graduationYear: 2028,
        Marks: [100,98,99,94,100]
    };
    avgOfStudent=(Student.Marks[0]+Student.Marks[1]+Student.Marks[2]+Student.Marks[3]+Student.Marks[4])/5;
    let h=Math.floor(avgOfStudent) // math.floor is used to round off the values
    console.log("Name->"+ Student.fullName + "\tGender->"+ Student.gender + "\tAge->"+ Student.age + "\tRoll No->"+ Student.rollNo + "\tGraduation Year->"+ Student.graduationYear + "\tMarks->"+ Student.Marks) + " Here is the avg->" + avgOfStudent;
    
    console.log (avgOfStudent);
    console.log(h);

}
Details();

// Quesiton 5 automation cart
function Anything() {
    const Object={
        buyerName:"Yug",
        productName:["Milk","Biscuit","Curd","Almonds","Water"],
        productPrice:[80,30,45,120,20],
    }
    // Object.productName.push("Hariom");
    // Object.productPrice.push(150);
    
    let productInCart=Object.productPrice.length
    console.log(`${Object.buyerName} have purchased ${Object.productName[0]}->${Object.productPrice[0]},${Object.productName[1]}->${Object.productPrice[1]}, ${Object.productName[2]}->${Object.productPrice[2]}, ${Object.productName[3]}->${Object.productPrice[3]} and ${Object.productName[4]}->${Object.productPrice[4]}`)
    console.log(`Total amount spent by ${Object.buyerName} is ${Object.productPrice[0]+Object.productPrice[1]+Object.productPrice[2]+Object.productPrice[3]+Object.productPrice[4]}`)

    console.log(`${Object.productName[0]} -> ${Object.productPrice[0]}, ${Object.productName[3]} -> ${Object.productPrice[3]} u purchased 2 product out of ${productInCart}`)
    console.log(`${Object.productName[5]} -> ${Object.productPrice[5]} u purchased 1 product out of ${productInCart}`)
}
Anything();

// Imp question
/*
We can change the array length and the array data as well, for the next time whenever u call the array the array might be short as per the assigned array length and the data might get removed from the array
Short-> Data Removed;
Extended-> Empty item;
*/
let array=[1,2,3,4,5];
array.length=6;    // output-> [ 1, 2, 3, 4, 5, <1 empty item> 
console.log(array);

function sum(a,b){
    return a+b;
}
sum(2,3);

// create a function that takes stringNum as parameter and returns a number multiplied by 2:
function input(num){
    return num*2;
}
let result = input(2);
console.log(result);

// math floar (1.5=>2) this just round off the value to the nearest
// find a middle number from input string and print the output by multiplying by 2:
function operation(a){
    let len = a.length;
    let mid = Math.floor(len/2);
    let val = a[mid];
    return val*2;
}
let str = operation("547989");
console.log(str);

// write a js function which takes 4 parameters name, class, rollNo. and age and return an intro sentence:
function writeIntro(Name,Class,RollNum,age){
    return `My name is ${Name} and I'm ${age} years old. I am studying in ${Class} and my roll number is ${RollNum}.`;
}
console.log(writeIntro("Karan","Btech 1st Year",5,17));

function sumStr(a,b) { 
    a=(a-0);
    b=(b-0);
    c=a+b;
    return `${c}`;
  };
  sumStr(1,2); // to convert a string to a number then we must use a=(a-0); type of arthematic operation
  