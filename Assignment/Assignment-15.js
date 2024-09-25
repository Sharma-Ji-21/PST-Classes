// Question 1: Check and Add Element in an Array:
// Write a JavaScript function that takes an array and an element as parameters and adds the element to 
// the beginning of the array if element was not already available in the array. If the element was 
// already present in the array, then don't add it and instead return this message - 'element is already 
// available in the given array'.

function input(arr, element) {
    if(arr.includes(element)==true){
        return 'element is already available in the given array';
    } else {
        arr.unshift(element);
        return arr;
    }
}
console.log(input([1, 2, 3, 4, 5], 3)); // Output: element is already available in the given array 
console.log(input([1, 2, 3, 4, 5], 6)); // Output: [6, 1, 2, 3, 4, 5]

// Question 2: Combining Arrays:
// Create a function that combines two arrays of strings into a single array using the `concat` method. 
// The function should return the merged array. Then print all the elements which have length 5. 

function cancArr(arr1,arr2){
    let arr=arr1.concat(arr2);
    console.log(arr)
}
cancArr(['hello','ji','javascript'],['I','am','Amazing'])

// Question 3: Slicing and Splicing:
// Create a function that takes an array and performs the following actions:
// Use the `slice` method to extract a portion of the array.
// Use the `splice` method to insert elements into the array.
// Return the modified array.

function arrayMethod(array){
    // let s=array.slice(0,3);
    array.splice(6,0,"hello");
    return array;
}
console.log(arrayMethod([1,2,3,4,5,6,7]))

// Question 4: Spread Operator:
// Create an array of names, and then using the spread operator, create a new array that includes the 
// original names along with three additional names of your choice.Then write a JavaScript function that 
// uses a loop to iterate through the array and prints each name to the console with a greeting message.

const originalNames =['Alice', 'Bob', 'Charlie'];
let newNames=[...originalNames,'Ram', 'Om', 'Yug'];
function printNameWithGreeting(names){
    for (let name of names){
        console.log(`Hello, ${name}!`);
    }
}
(printNameWithGreeting(newNames));

// Question 5:Joining Arrays:
// You have two arrays: one containing first names and the other containing last names. Write a function 
// that combines these two arrays into a new array of full names and separates them with a space. 

const firstNames=['Jhon', 'Alice', 'Om', 'Ramoliya']
const lastNames=['Doe', 'Smith', 'Sharma', 'Yug']
let min=Math.min(firstNames.length, lastNames.length);
function combineName(firstNameArr,lastNameArr){
    let fullNameArr=[];
    for (let i=0; i<min; i++){
        fullNameArr[i]=firstNameArr[i]+' '+lastNameArr[i];
    }
    return fullNameArr;
}
const fullName =combineName(firstNames,lastNames);
console.log(fullName);

// Question 6: Sorting an Array:
// Create an array of random numbers. Write a function that sorts this array in ascending order.

const numbers=[7,2,9,1,4,6];
function sortAssending(arr){
    return arr.sort();
}
const sortedNumbers=sortAssending(numbers);
console.log(sortedNumbers);