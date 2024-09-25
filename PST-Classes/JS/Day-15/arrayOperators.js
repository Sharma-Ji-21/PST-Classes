
/*array operatore:
CURD operation with Array Methods

Add/Create:-
    Push():
    Unshift():

Read:-
    Iterate: for of & other loops
    Indexing: at, []
    Check Availability: includes, indexOf

Update:-
    splice, push, unshift
    sort, reverse

Delete:-
    pop, shift, splice

Other:-
    toReversed, toSpliced, slice

*/
// // Q1-at
// let arr=['H','E','L','L','O']
// console.log(arr.at(2)); //output: 'L'
// console.log(arr.at(-3)); //output: 'L'

// // let arr1=[1,2,3,4,5]
// // //splice (shotest)
// // spice (start)
// // let fruits = function (["Apple", "Mango", "Oranges"]
// // )
// // fruits.splice(1,1)
// // console.log(fruits);
// // fruits.splice(0,0,"pineapple","Banana")
// // console.log(fruits);

// // toSplised:
// // after changes it creates bew array and rest it's similar of splice

// // let arr34=['a','b','d' ]
// // let newArr= arr.toLocaleString

// //6. Sort()
// let arrInc=[1,4,2,3]
// arrInc.sort()
// console.log(arrInc);

// let arrDec=[1,4,2,3]
// arrDec.sort((a,b)=>b-a)
// console.log(arrDec);

// // 7. Reverse
// // it reverser= the order of elements
// let newarr1=[1,2,3,4,5]
// let mewarr1=(nre);

//8. Join

// Getter and Setter in JavaScript
// let obj={
//     fname:"Ananya",
//     lname:"Kolekar",
//     get fullName(){
//         return this.fname + " " + this.lname;
//     }
// }
// console.log(obj.fullName);// don't have to use () while calling function
// why functions are first class 
// let obj1={
//     fname:"Ananya",
//     lname:"Kolekar",
//     set updateName(last){
//         this.lname=last;
//     },
//     get fullName(){
//         return this.fname + " " + this.lname;
//     }
// }
// obj1.updateName="Chauhan";
// console.log(obj1.fullName);


// splice: 
// remove element: splice(startIndex, No. of Elements to be deleted, elements to be added)
let fruits = ["apple", "mango","orange"];
// removing mango
fruits.splice(1,1);
console.log(fruits); // output: ["apple", "orange"]

//adding values
fruits.splice(1,0,"pineapple","banana");
console.log(fruits); // output: ["apple", "pineapple", "banana", "orange"]

//toSpliced: after changes it creates a new array and rest is similar to the splice
// let arr1 = ["a","c","d"];
// let newarr1 = arr1.toSpliced(1,0,"b");
// console.log(arr1); // output: ["a", "b", "d"]
// console.log(newarr1); // output: ["a", "b", "c", "d"]

// sort: to arrange array in accending and decending order 
// default -> accending order
let arr2 = [5,2,8,1,3];
arr2.sort();
console.log(arr2); // output: [1, 2, 3, 5, 8]

//decending order:
arr2.sort((a,b)=>b-a);
console.log(arr2); // output: [8, 5, 3, 2, 1]

// reverse : it reverse order of elements
let arr3 = [5,2,8,1,3];
arr3.reverse();
console.log(arr3); // output: [3, 1, 8, 2, 5]

// toReversed: after changes it creates a new array and rest is similar to the reversed
let arr4 = [5,2,8,1,3];
let newarr4 = arr4.toReversed();
console.log(arr4); // output: [5, 2, 8, 1, 3]
console.log(newarr4); // output: [3, 1, 8, 2, 5]

// slice: it return a sub array in perticular range and it doesn't modify the original array
let arr5 = [5,2,8,1,3];
let subarr = arr5.slice(1,3);// (starting index, ending index excluding that particular element)
console.log(subarr); // output: [2, 8]

// join: it converts the array in the string
let arr6 = [1,2,3,4,5,6,7,8];
let str = arr6.join("*");
console.log(str); 

// getter and setter in js:
let person = {
    fName: "Om",
    lName: "Sharma",
    get fullName(){
        return this.fName + " " + this.lName;
    }
}

console.log(person.fullName);
let obj1={
    fname:"Ananya",
    lname:"Kolekar",
    set updateName(last){
        this.lname=last;
    },
    get fullName(){
        return this.fname + " " + this.lname;
    }
}
obj1.updateName="Chauhan";
console.log(obj1.fullName);

//Concatenate:(concat 2 arrays)
function cancArr(arr1,arr2){
    let arr=arr1.concat(arr2);
    console.log(arr)
}
cancArr(['hello','ji','javascript'],['I','am','Amazing'])

// Why are functions first class citizen in js??
// they can be used as function, object, variable.