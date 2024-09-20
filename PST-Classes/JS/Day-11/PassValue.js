// factory function
// these are the function which returns another function or object
// constructor function:
// Basically when we are using this we can use one object to introduce multiple 
// this 
// new se object create hota h

// both have different syntax.
// return
// new & this keyword (constructor function)

//Intermediate lvl-----------------------------------------------------------------
//premitive : stored by value
//non premetive : store the refrence


/* pass by value:
value types stores the actual value in the variable. when you assign the value type to another variable or
pass it as an argument to a function. c copy of the variable is created. this means that changes to the
new variable won't affect the original value.
*/
a=10
b=a;
a+=2;
console.log(b);
console.log(a);
/*
pass by reference:
reference types stores to thr actual object types in the variable. when you assign the reference type to
another variable or pass it as an argument to a function. you're passing a reference to the same object in
memory. this means that changes to the new object won't affect the original.
*/
//Example 1:->
let arr1 = [1, 2, 3];
let arr2 = arr1; // dono change hote h as they are having same array memory {obj works the same way}
arr2.push(4);
console.log(arr1); //[1,2,3,4]
console.log(arr2); //[1,2,3,4]

// Example 2:->
let c = {name: 'John'};
let d = c;
d.name = 'Alice';// {Same as array}  (memory block)
console.log(c.name) // Alice
console.log(d.name) // Alice

//when you pass a refernce type as an argument to a function, you're passing reference to the original object. any changes made to the object inside the function will also affect the original object outside function.

function modifyArr(arr) {
    arr.push(42);
}
let myarr = [1,2,3];
modifyArr(myarr);
console.log(myarr); // [1,2,3,42]



//cloning of an objects
const userDetails={
    name:"John",
    age:25,
    verified:false
}

// cloning an Object using spread operator
let cloneUser= {...userDetails };
console.log(cloneUser.name="Om")
console.log(cloneUser);
console.log(userDetails);

// cloning an Object using Object.assign()
const userDetails1={
    name:"Jon",
    age:25,
    verified:false
}
let cloneUser2=Object.assign({});
console.log(cloneUser2);

// cloning an Object using Json.Parse():
const userDetails3={
    name:"Don",
    age:25,
    status:{
        verified:false
    }
};
let cloneUser3=JSON.parse(JSON.stringify(userDetails3));
console.log(cloneUser3.name="Sharma Ji")
console.log(cloneUser3);
cloneUser3.status.verified=true;
console.log(cloneUser3)
console.log(userDetails3);

/*
Shallow Copy: Copies only the first level of properties. Changes in nested objects affect both the original
and clone.

Deep Copy: Recursively copies all levels of nested objects to ensure that changes do not affect the
original.*/

//Rest operators:
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(1,2,3,4,5)); // 3


//Rest operators:

function fun(...input){
    let sum =0;
    for (let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2,3,4)); // 15

// Math Functions in JAVASCRIPT
console.log(Math.max(1,2,3,4,5)); // 5
console.log(Math.min(1,2,3,4,5)); // 1
console.log(Math.floor(2.7)); // 2
console.log(Math.ceil(2.7)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.round(2.7)); // 3
console.log(Math.random()); // random number between 0 and 1

