/*OPERATORS:

1. Arithmetic Operators: +, -, *, /, % (modulus), **
2. Assignment Operators: =, +=, -=, *=, /=, %=
3. Comparison Operators: >, <, >=, <=, ==, ===,!=,!==
4. Logical Operators: && (AND), || (OR),! (NOT)
5. Bitwise Operators: &, |, ^, ~, <<, >>
6. Ternary Operators: condition? value1 : value2
7. Equality Operators: == (equal value), === (equal value and type)

Operator precedence:
1. Parentheses
2. Exponentiation (**)
3. Multiplication and Division (*&%)
4. Addition and Subtraction (+/-)
5. Assignment (=)

Arthematic Operator:
1.Addition:
    - it adds two operands and give arithmetic sum and also concate the string or numbers*/
    let x=5+"Yo";
    console.log(x); // output-> 5Yo
/*
2.Subtraction:
    - it subtracts second operand from first and give arithmetic difference*/
    let y="Yo"-1;
    console.log(y); // output-> Nan
    /*
3.Multiplication:
    - it multiply two operands and give arithmetic product*/
    let z="Hi"*2;
    let w=Infinity*Infinity;
    let r=Infinity*0;
    console.log(z,w,r); // output-> Nan, Infinity, Nan
/*
4.Division:
    - it divide first operand by second and give arithmetic quotient*/
    let t=54/9;
    let s="yo"/4;
    let f=3/0;
    console.log(t,s,f); // output-> 6, NaN, Infinity
/*
5.Remainder:
    - it gives the remainder of the division of two operands*/
    let u=9%4;
    let v=9%0;
    console.log(u,v); // output-> 1, NaN

/*
6.Exponentional:
    - it assign the power to the first operand and the power which is used is the second operand
    - use **
*/
    let e=3**4; // 81
    console.log(e);

// Assignment Operator:
let n=7;
n+=6;
n-=4;
n*=6;
n/=3;
n%=4;
n**=2;
console.log(n);

// Comparison Operators:
let a=5;
let b=7;
console.log(a>b); // output-> false
console.log(a<b); // output-> true
console.log(a!=b); // output-> true
console.log(a>=b); // output-> false
console.log(a<=b); // output-> true
console.log(a==b); // output-> false
console.log(a===b); // output-> false
console.log(3 === "3") // output-> false //this will also check data type for comparision

/*Bitwise Operator:
1. AND (&):
0 0 = 0
1 0 = 0
0 1 = 0
1 1 = 1
*/
let p=12;
let q=25;
console.log(p&q); // output-> 8

/*
2. OR (|):
0 0 = 0;
1 0 = 1;
0 1 = 1;
1 1 = 1;
*/

/* 
2. XOR (^): //Similar bits value result zero for XOR.
0 0 = 0;
1 0 = 1;
0 1 = 1;
1 1 = 0;
*/

let g=12;
let h=25;
console.log(g|h); // output-> 29

// Logical operators:
const k=4, j=3;
console.log((k<4)&&(j>2)); // &&-> False [And]
console.log((k<4)||(j>2)); // ||-> True [Or]
console.log(!(k==4)); // !-> False [Not]

//Ternary Operator:
let urAge =17;
let reqAge =18;
let condition =(urAge>=reqAge)?"Yes U are eligible to vote":"No U are eligible to vote";
console.log(condition); // output-> No U are eligible to vote
/*
-it evaluate the code based on conditions 
-grneral syntax:
condition? Expression 1(true value) :Expression 2 (false value);
*/


let totalMarks =100;
let passMarks =50;
let marksObtainted =69;
let condition2 =(marksObtainted>=passMarks)?`Passed, You Scored-> ${marksObtainted}/${totalMarks}`:`Failed, You Scored-> ${marksObtainted}/${totalMarks}`;
console.log(condition2); // output-> Passed, 69/100

// Operator Precedence:
// "* and / are more priotized than + and -";
let x1=5+3*2;
let x2=(5+3)*2;
console.log(x1,x2); // output-> 13, 16

let y1=5%3*2;
let y2=(5%3)*2;
console.log(y1,y2); // output-> 1, 2



let arr=[1,2,3,4,5,6];
arr.fill(0,1,4); // digits of array Index [1],[2],[3] are replaced by 0. Index [0],[4],[5] remains the same. fill doesn't consider the last index for (0,1,4)
console.log(arr); // output-> [ 1, 0, 0, 0, 5, 6 ]