/*
object method:-
    objet.key()
    objet.values()
    objet.entries()

Concept of Closure

type casting

Dynamic Vs static type language
*/

const { parse } = require("path");

// Object Operations:-
// object -> return the Array of all the ways

let std={
    name:'Om',
    age:17,
    rollNo:5
}
let arr=Object.keys(std);
// for (let i=0;i<arr.length;i++){
//     console.log(std[arr[i]]);
// }

for (let i of arr){
    console.log(std[i]);
}

// this will be returning only keys of the object in string Array
console.log(Object.keys(std)) 
console.log("--------------------------------------------------------------------")
let std1={
    name:'Yug',
    age:17,
    rollNo:69
}
// this will be returning only values of the object in Array
console.log(Object.values(std))
console.log("--------------------------------------------------------------------")
let std2={
    name:'Soumya',
    age:18,
    rollNo:24
}
// this will be returning both keys and values of the object in Array
// console.log(Object.entries(std)) // getting nested Array 
// [ [ 'name', 'Om' ], [ 'age', 17 ], [ 'rollNo', 5 ] ]
let at=Object.entries(std2)
for (let i of at){
    console.log(i[1]);// we are doing this as object.entries create nested array 
    // when I am using i then I am willing to access the first array (nested 
    // array) and then I wrote 1 because of array indexing
}
console.log("--------------------------------------------------------------------")


// lexical scope :- basically(diyara) the area where u can access that particular 
// element


// function remove all its memory after returning
// function test1(){
    //     let a=5;
    //     return a;
    // }
    // console.log(test1());
    // console.log(a);
    

// concept of closure:
// by using closure child function can access the parent function after the 
// returning 
function test2(){
    let a=5;
    function right(){
        return a;
    }
    return right; // here we just returned the right function not called.
}
let check =test2();
console.log(check());
console.log("--------------------------------------------------------------------")

// whenever function is called then we goes to function line


//Note:
//1. by default we cannot access the variables or properties outside their lexical 
// scope but beacuse of closure we can access them outside their lexical scope
//2. when function returns then it destroies all its properties but beacuse of 
// closure the child function can always access the properties of its parent 
// function No matters parent function has returned or not.

// example:
function parent(a){ // 2 line
    let b=5; // 3
    function child(){ // 6 line
        return a+b; // 7 line
    }
    return child; // 4 line // child has returned by parent function then parent function will be destroyed and can only be accessable by child function
}
let childFunc=parent(4); // 1 line // called parent function
console.log(childFunc());// 5 line
console.log("--------------------------------------------------------------------")

function parent1(a){
    let b=5;
    function child1(){
        return a+b;
    }
    function child2(){
        return b;
    }
    return child2;
}
let childFunc1=parent1(5);
console.log(childFunc1());

console.log("--------------------------------------------------------------------")

// type casting:
// when u change data type of data then it is known as type casting

// Example
let str1="123"
let num1=parseInt(str1);
// console.log(num1);
console.log(typeof(num1));

let num2=123;
let str2=num2.toString();
console.log(typeof(str2))

console.log("--------------------------------------------------------------------")


// Dynamic Vs static type language
let a=5; // (when we do not nned to define the type of data in code then the 
// language is dynamically typed)
