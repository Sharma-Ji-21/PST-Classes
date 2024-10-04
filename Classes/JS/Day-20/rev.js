// Str method  revesion
let str='I am a Polaris Student'
//console.log(str.length)
console.log(str.charAt(0)); // don't consider -ve value
console.log(str.at(-2));
console.log(str.charCodeAt(0)); // A-> 65 and soo on
console.log(str.toLowerCase()); // Lower Case
console.log(str.toUpperCase()); // Upper Case
console.log(str.indexOf('P')) // if i use str.indexOf('P',8) then it will be start searching P from the 8th index and it approve -ve index
console.log(str.lastIndexOf('a')) // it will return the last index of 'P'
console.log(str.trimStart()) // remove the spaces from the start
console.log(str.trimEnd()) // remove the spaces from the end
console.log(str.substring(6)) //this basically returns the string from the index given till the str length -a by default and -ve value doesn't works
let str1='Hi am a Student'
let str2="Student"
console.log(str1.includes(str2));

let b = "JavaScript";
let a=b.toLowerCase();
let count = 0;
for (let i = 0; i < str.length; i++){
    if (a.charAt(i)=='a' || a.charAt(i)=='e' || a.charAt(i)=='i' || a.charAt(i)=='o' || a.charAt(i)=='u'){
        count++;
    }
} 
console.log(count);


// Array methods
let arr=[1,2,3,4,5]
arr.pop(4)// HERE NO MATTERS WHATEVER IS WRITTEN IN THE POP BRACKET();
arr.push(8)// this will be pushing 8 to the main array but if i store it in a variable abd then console it will return the length of the array like  ab=arr.push(8)console.log(ab)

console.log(arr)