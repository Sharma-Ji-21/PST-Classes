
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

function solution(str){
  let arr=[];
  for (let i=0;i<str.length;i+=2){
    if(str.length%2===0){
      arr.push(str[i]+str[i+1])
    }
  }
  for (let j=0;j<str.length-1;j+=2){
    if (str.length%2!==0){
        arr.push(str[j]+str[j+1])
      }
    };
    if (str.length%2!==0){
      arr.push(str[str.length-1]+'_')
    }
    return arr;
}
console.log(solution("abftuu"))