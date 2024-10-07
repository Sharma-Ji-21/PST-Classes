/*
Higher Order Functions
1. Filter
2. Map
3. Reduce
4. Sort
5. forEach
6. Some
7. Every
*/
function area(radius){
    let area1=[];
    for(let i=0;i<radius.length;i++){
        area1.push(Number((Math.PI*radius[i]*radius[i]).toFixed(2)));
    }
    return area1;
}
console.log(area([2,6,4,3]));

function circumference(radius){
    let circumference=[];
    for(let i=0;i<radius.length;i++){
        circumference.push(Number((2*Math.PI*radius[i]).toFixed(2)));
    }
    return circumference;
}
console.log(circumference([2,6,4,3]));

function diameter(radius){
    let diameter=[];
    for(let i=0;i<radius.length;i++){
        diameter.push(Number((2*radius[i]).toFixed(2)));
    }
    return diameter;
}
console.log(diameter([2,6,4,3]));

// we need to use Higher order functions so that we can do the above cal. in less lines code
// Higher order functions are function that takes one or more funciton as arguments & parameters
// higher oreder functions(HOFs) in javascript is function that can do at least one calculation
function f1(jp,kp){
    console.log("Hey i am f1");
    console.log(jp());
    console.log(kp());
    // return f1(jp,kp);
}

function f2(){
    return ("Hey i am f2");
}

function f3(){
    return ("Hey i am f3");
}
// function f4(){
    // return (f1(f2,f3));
// }
// console.log(f4());

console.log(f1(f2,f3));
// f1(f2(f3));
// here f1 is higher order function


function f1(){
    console.log ("hey i'm f1");
    return [f2(),f3()]
}
function f2(){
    console.log ("hey i'm f2");
}

function f3(){
    console.log ("hey i'm f3");
}

console.log(f1());

// function area69(r){
//     return Math.PI*r*r;
// }
// function circumference69(r){
//     return 2*Math.PI*r;
// }
// function diameter69(r){
//     return 2*r;
// }
// function calculate(radius, func){
//     let result=[];
//     for (let i=0; i<radius.length; i++){
//     result.push(Number((func(radius[i])).toFixed(2)));
//     }
//     return result;    
// }
// -----------OR--------------------
let area69=(r)=> Math.PI*r*r;
let circumference69=(r)=> 2*Math.PI*r;
let diameter69=(r)=> 2*r;
let calculate=(radius,func)=>{
    let result=[];
    for (let i=0; i<radius.length; i++){
    result.push(Number((func(radius[i])).toFixed(2)));
    }
    return result;
}
let rad=[2,6,4,3]
console.log(calculate(rad,circumference69))
console.log(calculate(rad,area69));
console.log(calculate(rad,diameter69));
/*
Filter()
The filter() function takes an array and returns a new array with only the values that meet certain criteria.
SYNTAX:
  const newArr=array.filter(callback(element[, index[, array]])[, thisArg])
  let arr12=[......];
  arr12.filte(callback(func(ele,index,arr))
*/
// let newArr12=arr12.filter(f1)
// function f1(ele){
    //     if (ele%2==0){
        //         return(ele);
        //     }
        // }
        // // let newArr=arr12.filter(f1)
        // console.log(newArr);
let arr12=[1,2,3,4,5];
let newArr12=arr12.filter((ele)=>ele%2==0)
console.log(newArr12);

//filtering words longer than 5 characters
let words = ["apple", "banana", "grape", "kiwi", "orange"]
let newWords=words.filter((ele)=>ele.length>5)
console.log(newWords);

const people=[
    {name:'Alice', age:30},
    {name:'Bob', age:20},
    {name:'Charlie', age:25},
    {name:'David', age:40},
]
let newPeople=people.filter((ele)=>ele.age>25).map((ele)=>ele.name)
console.log(newPeople);
/*
Map():
 The map() function takes an array of value and applies a transformation to each value in the array.

SYANTAX:
const map=array.map
*/

// some & every()
let arr34=[1,2,3,4,8,12];
console.log(arr34.some(e=>e>5)); // true
console.log(arr34.every(e=>e>5)); // false


// reduce 
// - The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value./

//SYNTAX:
  // const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue
let arr56=[1,2,3,4,5];
let sum=arr56.reduce((total,value)=>{
    total+=value;
    return total},0)
console.log(sum);