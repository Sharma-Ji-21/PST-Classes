//declairing variable
let a=10;
const b=20;
let c=30;
let sum=a+b+c;

// Function to calculate the sum
console.log(sum);
console.log(a+b+c);

//updation of the variable
a=12;
// b=12; // if I turn the comment off for this line the code will show error because b was declared as const in the begining
//now lets see if the answer changes
console.log(sum);
console.log(a+b+c);
// output -> 60 60 60 62   third 60 is because it get the the a input as 10 beacuse 'a' was declared as 12 after the sum.

const PI = 3.14;
console.log(PI);
// if I redeclare or assign the const value for particular variable like PI then it will be showing error as it was declared earlier.
// const cannot be reassigned & redeclared
// url must be stored in const 


/*DATA TYPE
 As the name data type itself says they store different types of data in it so that we can use that in our code
 
N - Number -> Represents all types of numbers (integers, floats, etc.).
N - Null -> Represents an intentional absence of any object or value, indicating that a particular memory box is empty.
B - Boolean -> Represents logical values: true or false.
B - BigInt -> Represents integers larger than Number.MAX_SAFE_INTEGER. It allows for arbitrary precision in numeric operations.
S - String -> Represents a sequence of characters enclosed in " ", ' ', or ` ` (template literals).
S - Symbol -> Represents a unique and immutable value, often used as a key for object properties.
U - Undefined -> Represents a variable that has been declared but not yet assigned a value.

 1.Number types:-
 this is only type to handel all kinds of numaric data, (handles floats and integers)
 2.Infinity types:-
 Javascript shows an Infinity for significant amounts lager than 15 no.*/
 let x=3/0;
 console.log(x);
/*
 3.Exponential:-
 this is used to represent very large or very small numbers with the use of exponential notation e.
 4.Operators:
- operator is a special character used to perform an operation on variables or values.
- operators are divided into two categories:
1. arithmetic operators: +, -, , /, %, *
2. assignment operators: =, +=, -=, ++, --, =, /=, *=, %=
3. comparison operators: ==, !=, ===, !==, >, <, >=, <=
4. logical operators: &&, ||,!, &amp;&amp;
5. bitwise operators: &, |, ^, ~, <<, >>, &amp;&amp;&amp;

operators are also used to create expressions, which are sequences of operators and operands.
- if we perform operation to numbers which is written in the formate of string the string will be converted into numbers converts.
- and if we try to perform and operation on string of word then it will show NaN.

 5.String types:-
 this is used to handle text data, (handles characters and sequences of characters) we can use ("",'',``) for string
*/
let name ="Om Sharma\t";
let word ='YOYO\t';
let locations =`Delhi`;
console.log(name+word+locations);
/* 6.Boolean types:-
 this is used to handle true or false values, (handles true and false)
 true and false are the only two values in boolean type.
 true is represented as 1 and false is represented as 0.
 if string is not defined or empty it will result 0.
*/
let result;
result = Boolean(0);
console.log(result); // false
result = Boolean(1); 
console.log(result); // true


//PRACTICE:
// CREATE INDIVIDUAL VARIABLE TO STORE THE FOLLOWING DETAILS OF A STUDENT: FULLNAME, AGE, ISPRESENT, SCORE, CITY
let FULLNAME="Om Sharma";
let AGE=17;
let ISPRESENT=true;
let SCORE=69;
let City="Delhi";
// concatination
console.log(FULLNAME,AGE,ISPRESENT,SCORE,City);
// execution always starts from left to right here is one ex:-
let q=2;
let r=43;
let k="YUG";
console.log(q+r+k); // output -> 45YUG

/* 7.Null & undefined types:-
 null and undefined are two distinct types in JavaScript, but they both represent the absence of a value.
 null: It is a keyword used to represent the absence of any object value.
 undefined: It is a variable that has been declared but has not been assigned a value.
 NaN (not a number):- Nan is a special value in java script that represents an invalid no.
 NaN->Not a Number;
 something which we can't express is NaN

# if we subtract, multiply, and divide numbers written in string like "123" then they become NUMBERS after calculation ex:-
 */
 let str1="123";
 let sdf="120";
 console.log(str1-sdf); // only for -, *, / 

/*Syntax->
Its a way to write introduction in particular programming language that follows same set of rules:-
*/
console.log(20);  // output 20
console.log("20"+5);  // output 205
console.log("20"-5);  // output 15
console.log("Hey"-5);  // output Nan
console.log(true+5);  // output 6
console.log(false+5);  // output 5

/* #Imp Doubt
bina bakchodi wala null and undefined mai difference

null wo hota hai jisme hum variable declare karke bata te hai ki kuch nai hai so agar koi puche ki whatt does null represeent so uska jawab hoga  It's an intentional absence of any value. You manually assign it to indicate "no value."

and undefined mai ye hota hai ki hum kuch karte hi nai aur agar koi undefined ke bare mai puch le to uska jawab hoga It means a variable has been declared but hasn't been assigned a value yet, or a function has no return value.

mota mota return value ka difference hai*/

