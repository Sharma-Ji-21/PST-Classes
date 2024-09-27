
// // function digitalRoot(n) {
// //   str=String(n)
// //   sum =0;
// //   for(let i=0;i<str.length;i++){
// //     num=Number(str[i])
// //     sum+=num;
// //   }
// //   let jo=String(sum)
// //   if (jo.length==1){
// //     let kk=Number(jo)
// //     return kk;
// //   } else {
// //     let yy=Number(jo)
// //     return digitalRoot(yy)
// //   }
// // }
// // console.log(digitalRoot(196)) 
// // if (seconds === 0) return "now";


// // const years = Math.floor(seconds / (365 * 24 * 60 * 60));
// // seconds %= (365 * 24 * 60 * 60);
// // const days = Math.floor(seconds / (24 * 60 * 60));
// // seconds %= (24 * 60 * 60);
// // const hours = Math.floor(seconds / (60 * 60));
// // seconds %= (60 * 60);
// // const minutes = Math.floor(seconds / 60);
// // seconds %= 60;
  
// // const parts = [];
// // if (years > 0) {
// //     parts.push(`${years} year${years > 1 ? 's' : ''}`);
// // }
// // if (days > 0) {
// //     parts.push(`${days} day${days > 1 ? 's' : ''}`);
// // }
// // if (hours > 0) {
// //     parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
// // }
// // if (minutes > 0) {
// //     parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
// // }
// // if (seconds > 0) {
// //     parts.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
// // }

// // if (parts.length === 0) {
// //     return "now";
// // } else if (parts.length === 1) {
// //     return parts[0];
// // } else if (parts.length === 2) {
// //     return parts.join(' and ');
// // } else {
// //     return parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1];
// // }

// function humanReadable (seconds) {
//   if (seconds<0 || seconds>359999){
//     return "Error";
//   }
//   let second=seconds%60;
//   let minute=(seconds/60)%60;
//   let hour=Math.floor((seconds/3600))%60;

//   str="--:--:--";
//   str1=hour+str.slice(2)
//   str2=minute+str1.slice(3,5)
//   str3=second+str2.slice(6,8)
//   return str3;

  
// }
// console.log(humanReadable(3661));

// function solution(number) {
//   let sum = 0; // Use let for variable declaration
//   if (number < 0) {
//     return 0; // Return 0 for negative numbers
//   }
//   for (let i = 1; i < number; i++) { // Iterate from 1 to number - 1
//     if (i % 3 === 0 || i % 5 === 0) { // Check i for divisibility
//       sum += i; // Add i to sum if it's divisible by 3 or 5
//     }
//   }
//   return sum; // Return the total sum
// }


// function solution(number){
//   let sum=0;
//   if (number<0){
//     return 0;
//   }
//   for (let i=1;i<number;i++){
//     if (number%3===0 || number%5===0){
//       if (number%3==0 && number%5==0){
//         sum+=number;
//       }
//       sum+=number;
//     }
//   }
//   return sum;
// }

// function solution(str){
//   let arr=[];
//   for (let i=0;i<str.length;i+=2){
//     if(str.length%2===0){
//       arr.push(str[i]+str[i+1])
//     }
//   }
//   for (let j=0;j<str.length-1;j+=2){
//     if (str.length%2!==0){
//         arr.push(str[j]+str[j+1])
//       }
//     };
//     if (str.length%2!==0){
//       arr.push(str[str.length-1]+'_')
//     }
//     return arr;
// }
// console.log(solution("abftuu"))
// function isPrime(number) {
//   if (number<2){
//     return false;
//   }
//   if (number==2){
//     return true;
//   }
//   for (let i=2;i<=Math.round(number/2);i++){
//     if (number%i==0){
//       return false;
//     }
//   }
//   return true;
// }

// function getPrimes(start, finish) {
//   let primes = [];
//   for (let j = start; j <= finish; j++) {
//     if (isPrime(j)==true) {
//       primes.push(j);
//     }
//   }
//   return primes;
// }
// function getPrimes(start, finish) {
//   let prime = [];
  
//   const max = Math.max(start, finish);
//   const min = Math.min(start, finish);
// console.log(max)
// console.log(min)
// }
// getPrimes(2,4)

// let string="Replace all areugns"
// // console.log(string.replaceAll("a","e"))
// // g (global flag):
// // i (case-insensitive flag):
// console.log(string.replace(/a/gi, "e"))

// function validBraces(braces) {
//     while (braces.includes("()") || braces.includes("[]") || braces.includes("{}")) {
//         braces = braces.replace("()", '');
//         braces = braces.replace("[]", '');
//         braces = braces.replace("{}", '');
//     }
//     return braces.length === 0; 
// }

// function vaporcode(string) {
//     let b=string.toUpperCase();
//     let a=b.split('');
//     return a;
//   }
//   console.log(vaporcode("Hello my name is om"))

// function sumPairs(ints, s) {
//     let arr=[];
//     for (let i=0;i<ints.length;i++){
//       for (let j=i+1;j<ints.length;j++){
//         if(ints[i]+ints[j]===s){
//             arr.push(ints[i],ints[j])
//             return arr;
//         }
//       }
//     }
//     return undefined;
//   }
// console.log(sumPairs([5, 2, 8, 7, 2],10));

// function upArray(arr) {
//     if (arr.length==0){
//       return null;
//     }
//     for (let i of arr){
//       if (i>9 || i<0){
//         return null;
//       }
//     }
//     let a = arr.join('');
//     let num = Number(a);
//     let num1 = num+1;
//     let arr1 = String(num1).split('');
//     return arr1.map(Number);
//   }
//   console.log(upArray([4, 0, 9, 5]));

// function isPangram(string){
//   let alphabets= "abcdefghijklmnopqrstuvwxyz"
//   str1 = string.toLowerCase();
//   str2=str1.replace(/ /gi,'');
//   str=str2.split('')
//   for (let i of alphabets){
//     if (!str.includes(i)){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// function reverseWords(str) {
//   let joinNest=[]
//   let arr=str.split(' ')
//   for (let i of arr){
//     let word='';
//     for (j=i.length-1;j>=0;j--){
//       word.push(i[j])
//     }
//     joinNest.push(word)
//   }
//   let a=joinNest.join('');
//   return a;
// }

// console.log(reverseWords('apple is red'))

// function arrayDiff(a, b) {
//   let arr = [];
//   for (let i of a ){
//     if (!b.includes(i)){
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(arrayDiff([1,2,2,3,4],[2,3,4]));

function firstNonRepeatingLetter(s) {
  s=s.toLowerCase();
  let arr=s.split('')
  let arr1=[];
  for (let i=0; i<=arr.length-1;i++){
    arr1.push(arr[i])
    for (let j=i+1;j<arr.length;j++){
      if (arr1.includes(arr[j])){
        continue;
      }
      else {
        return arr[j];
      }
    }
  }
}
console.log(firstNonRepeatingLetter("aabbcdeeff"));