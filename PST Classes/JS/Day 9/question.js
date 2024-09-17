//Question 1
// let i;
// let n=10;
// for(i=1;i<=n;i++){
//     console.log(i);
// }


//Question 2
// let i=0;
// while(i<=n){
//         if (i%2==0){
//             console.log(i);
//         }
//         i++;
//     }


//Question 3
// let i=0;
// while(i<=10){
//         if (i%2!=0){
//             console.log(i);
//         }
//         i++;
//     }


//Question 4 (++)
function Array(array){
    let reverseArray=[];
    for (let i=0; i<=array.length-1; i++){
        reverseArray[i]=array[array.length-i-1];
    }
    return reverseArray;
}
console.log(Array([1,2,3,4]));

// Question 4 (--)
function reverseArray(arr){
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));


//Question 5
function revNaturalNumber(num){
    for (let i=num;i>=0;i--){
        console.log(i);
    }
}
revNaturalNumber(10);

// Question 6 (Check)
function primeNum(Num){
    let i;
    if (Num<2){
        return false
    } if (Num==2){
        return true;
    }for (i=2;i<=Num/2;i++){
        if (Num%i==0){
            return false;
        }
    }
    return true;
    }

// Question 6(Count)
let count=0;
for(let y=0;y<=10;y++){
    if(primeNum(y)==true)
        count+=1;
    else{
        count+=0;
    }
}
console.log(count);

// Question 7