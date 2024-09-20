// Question 1:
// Write a javascript program to print prime numbers from 2 to 30.


// function primeNumber(x){
//     if (x<2){
//         return false;
//     }if (x==2){
//         return true;
//     }
//     for (let i=2; i<=x/2;i++){
//         if (x%i==0){
//             return false;
//         }
//     }return true;
// }
// // console.log(primeNumber(3)); {checking the above code}
// for (let num=2;num<=30;num++){
//     if (primeNumber(num)){
//         console.log(num);
//     }
// }


// Question 2:
// Write a javascript program to check whether a number is available in an array or not.

let array = [1,2,3,4,5,6,7];
function checkNumber(check){
    for (let i=0;i<=array.length-1;i++){
        if (array[i]==check){
            return true;
        }
    }return false;
}
console.log(checkNumber(5));

// Question 3.
// Write a javascript program to print the rank of students based on the percentage.


function maxNum(percentStd1, percentStd2, percentStd3) {  
    if (percentStd1 > percentStd2 && percentStd1 > percentStd3) {
        if (percentStd2 > percentStd3){
            console.log(`Student 1 secured rank 1, student 2 secured rank 2, student 3 secured rank 3`);
        } else{
            console.log(`Student 1 secured rank 1, student 2 secured rank 3, student 3 secured rank 2`);
        }
    } else if (percentStd2 > percentStd1 && percentStd2 > percentStd3) {
        if (percentStd1 > percentStd3){
            console.log(`Student 1 secured rank 2, student 2 secured rank 1, student 3 secured rank 3`);
        } else{
            console.log(`Student 1 secured rank 3, student 2 secured rank 1, student 3 secured rank 2`);
        }
    }else {
        if (percentStd1 > percentStd2){
            console.log(`Student 1 secured rank 3, student 2 secured rank 2, student 3 secured rank 1`);
        } else{
            console.log(`Student 1 secured rank 2, student 2 secured rank 3, student 3 secured rank 1`);
        }
    }
};
maxNum(75, 100, 68);