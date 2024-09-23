// Backend:
// python_(Flask, Django)
// javascript_(express node)
// java_(spring boot)

// Frontend:
// javascript_(react.js,angular.js) [these are frameworks not the language]

// String ansd string object
let str1="Hello World";
let str2="Hello World";
let str3=new String("Hello World");
console.log(typeof str1);//string
console.log(typeof str3);//object

/*
A string primitive is the basic way to represent text in JavaScript. It is
created using literalin immutable

-string object is created using the 'new' keyword. it has additional properties
and methods.

-boxing:
 -when a method on strin primitive are called, js automatically boxes the string primitive into a string object temporarily, allowing the method to be called.after the method is executed, the result is converted back into a string primitive.
*/

let greeting ='Hello'
greeting[0]='J'
console.log(greeting) 

// why Immutability??
// Immutability makes string operation safer and more predictable especially when 
// dealing with multi-threaded enviornmenr or complex program.

// String equality check

console.log(str1==str2) // true
console.log(str1===str2) // true
console.log(str1==str3) // true
console.log(str1===str3) // false

// String methods
let str7="123lo World";
console.log(str7.length); // 11
console.log(str7.charAt(5)); // o
console.log(str7.substring())
console.log(str7.indexOf('o')); // 4
console.log(str7.toUpperCase()); // HELLO WORLD
console.log(str7.toLowerCase()); // hello worl7

console.log(str7.indexOf("World")) // 6
console.log(str7.includes("123")) // true

console.log(str7.replace("World", "Leaf"))

let str= "apple,orange,banana"
let fruits=str.split(",")
console.log(fruits) // ["apple", "orange", "banana"]


// function formatDuration (seconds) {
    
//     let min=Math.floor(seconds/60)
//     let hours=Math.floor(min/60)
//     let hr;
//     for (hours)
//     let sec=seconds%60;
//     return `${hours} Hours, ${min} Minutes, ${sec} Seconds`;
// }
// console.log(formatDuration(3661)) // 1

// function fakeBin(x){
//     let ld=String(x);
//     let str=ld.split('');
//     let str1='';
//     for (let i=0;i<=str.length-1;i++){
//     if (str[i]<5){
//         str1+='0';
//     }
//     else {
//         str1+='1';
//     }
//   }
//   return str1;
// }
// console.log(fakeBin(97856354132))


function squareDigits(num){
    let str=String(num)
    let str1='';
    for (let i=0;i<str.length;i++){
      let num=Number(str[i])
      let sqr=num*num;
      let str2=String(sqr)
      str1+=str2
    }
    return str1;
  }

  console.log(squareDigits(9119))