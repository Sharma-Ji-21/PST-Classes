// function checkPrime(a){
//     if (a<2){
//         return false;
//     } else if (a==2){
//         return true;
//     }for(let i=2;i<a/2;i++){
//         if(a%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPrime(31));

function againPrime(x){
    if (x<2){
        return false;
    }if (x==2){
        return true;
    }for (let z=2;z<=x/2;z++){
        if (x%z==0){
            return false;
        }
    }
    return true;
}
for(x = 0; x<20; x++) {
    if(againPrime(x)){
        console.log(x);
    }
}
// console.log(againPrime(21));

// for(let i=0;i<20;i++){
//     if(againPrime(i)==true){
//         console.log(i);
//     }
// }