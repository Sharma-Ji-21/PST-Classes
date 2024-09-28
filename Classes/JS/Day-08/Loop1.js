function likes(name1, name2, name3, name4) {
    let arr = [name1, name2, name3, name4].filter(Boolean);
    if (arr.length === 0) {
      return 'no one likes this';
    } else if (arr.length === 1) {
      return `${arr[0]} likes this post`;
    } else if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]} like this`;
    } else if (arr.length === 3) {
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    } else if (arr.length >= 4) {
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
    }
  }

  console.log(likes('Deepu', '', 'Om', 'Yug')); // Peter and Jacob like this

// Increment:
function increments(Num1,Num2){
    console.log(Num2++ + ++Num2 + ++Num1 + ++Num1);
}
increments(5,6);

// Decrement:
function decrements(Num1,Num2){
    console.log(Num2-- + --Num2 + Num1-- + --Num1);
}
decrements(5,6);

/*
LOOPS:
for (initialization; condition; increment)
*/
for(let d=0;d<=20;d++){
    if (d%2==0){
        console.log(`${d} is even`);
    }else {
        console.log(`${d} is odd`);
    }
}
    // return d;
    // console.log(d);
// for(i = 0; i>-1; i++) {
//     console.log(i);
// }
function checkPrime(a){
    if (a<2){
        return false;
    }
    if (a==2){
        return true;
    }
    for (let i=2; i<=a/2; i++){
        if (a%i==0){
            return false;
        }
    }
    return true;
}
for (let a =1; a<20; a++) {
    if (checkPrime(a)){
        console.log(a);
    }
}
// console.log(checkPrime(3));
// console.log(checkPrime(14));
// checkPrime(32)