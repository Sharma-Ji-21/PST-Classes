// buddy for study-------scolarship
// print num1, num2, num3 with same values and in single line
let num1, num2, num3;
num1=num2=num3=10;

console.log(num1, num2, num3);

/*
Premetive Data types:-
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol

Complex (Non-premetive) Data types:-
1. Object
2. Function
3. Array

Primitive Data types are immutable (cannot be changed)
Complex (Non-premetive) Data types are mutable (can be changed)

primitive-> N N S S B B U
flexibilty
non-premetive-> Object, Function, Array, Date
non-flexible
*/

// Typeof------------------>
let a=typeof"jhon"
let b=typeof 3.14;
let c=typeof 20;
let d=typeof true;
let e=typeof false;
let f=typeof null;

console.log(a,b,c,d,e,f);

// assign age then print & change age print that
let age =17;
console.log("my age->" ,age);
age=23;
console.log("my age after change->" ,age);

// question-2
let aNumber =69;
let aString ="lol";
let aBoolean =true;
let anUndefinedValue;
console.log(typeof (aNumber), typeof (aString), typeof (aBoolean), typeof (anUndefinedValue));

// question-3
let q=10;
let r=20;
console.log(q*r, q+r, q-r, r/q);

// question-4
const x=10;
// x=15;
console.log(x); //output- error

// question-5
let carModel= "Toyota";
let carManufactureYear=2023;
let isElectric=true;

console.log(carModel, carManufactureYear, isElectric);

// question-6
let t=10;;
let y=20;
let temp;
temp=t;
// t=y;
// y=temp;  ---this is for swaping
console.log(t,y,temp);

// ----Practice----
console.log(typeof(NaN));  //number
console.log(typeof(25-"5"+"6"));  //string   (because of concatination) 
console.log(typeof("Nan"+5-6));  // number   (code calculation works left to right)
console.log(typeof(Symbol("Hello")));  //symbol
console.log(typeof(typeof(125n)));  //string   (when num wix with string it becomes string)
console.log(typeof(125-6+55+NaN+"Hello"));  //string   (same reason as above {num + string = string})
console.log(typeof(null));  //object
console.log(typeof("25"-5));  //number   ({num + string = string} this only work for '+' only)
console.log(typeof("125"-6+"NaN")); //string
console.log(typeof("25n"-5));  //number   ({num [sign] string = Num} [sign= -,*,/] then it results num)
// ------Extra------(for the particular time being)
console.log(typeof([]));  // object
console.log({}+[]);  // [object Object]
// when u use + with {} javascript will try to convert {} into a string
console.log(typeof([1,2,3,4]));  // object
console.log(typeof({name: "Jay"}));  // object

/* life Updates

12 words are enough for explaining ur idea.
simple small crisp phrase.
idea don't matter what matters is how u exicute & work on it.
remeber stories have more power and weigtage that facts.
why and how??

*/// ------Extra------(for the particular time being)
console.log(typeof([]));  // object
console.log({}+[]);  // [object Object]
console.log(typeof([1,2,3,4]));  // object
console.log(typeof({name: "Jay"}));  // object

/* life Updates

12 words are enough for explaining ur idea.
simple small crisp phrase.
idea don't matter what matters is how u exicute & work on it.
remeber stories have more power and weigtage that facts.
why and how??

/*
------EXTRA-------------------------------------------------------------------------------------------
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log((sym1 === sym2) + ",they are unique");  // false, they are unique

// Using symbol as a key in an object
let person = {
  name: 'John',
  [sym1]: 123  // Symbol used as a property key
};
let person2 = {
    name: 'Jane',
  [sym1]: 456  // Same Symbol used as a property key
};

console.log(person[sym1]);  // 123
console.log(person2[sym1]);  // 456
*/