function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Nandan"));



function reversed(WORD){
    let revWORD="";
    for (let i=WORD.length-1;i>=0;i--) {
        revWORD+=WORD[i];
    }
    return revWORD;
}
console.log(reversed("FUUUCKK"));

for (let a=1;a<=10;a++){
    for (let b=1;b<=10;b++){
        console.log(a + " x " + b + " = " + a*b);
    }
}

for (let x=1;x<=10;x++){
    console.log(`${x} x ${x} = ${x**2}`);
}

factorial
function factorial(n){
    if (n==0 || n==1){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));


function factorials(factorial){
    let result=1;
    for (let f=1;f<=factorial;f++){
        result*=f;
    }
    return result;
}
console.log(factorials(7));

/* WHILE LOOP:
it works on the boolean data type (TRUE, FALSE) mostly like if-else;
*/
let i=0;
while(i<5){
    console.log(i);
    i++;
}


let num=1;
while(num<=4){
    if (num%2 == 0){
        console.log(num);
    }
    num++;
}

// infinite loop example:


let j=0;
while(true){
    console.log(j);
    j++;
}

/*
for in loop:
*/

let obj = {
        name: "John",
        age: 30,
        city: "New York"};

for(let key in obj){
    console.log(key + " = " + obj[key]);
};

//for of loop:

let arr = [1, 2, 3, 4, 5];

for(let value of arr){
    console.log(value);
};

/*
Loop Control Statements:
break: stops the loop execution immediately.
continue: skips the current iteration and moves to the next one.
*/


correctPass=1234;
do{
    for(let a=2; a>=0;a--){
    enterPass=prompt("Enter pass: ");
        if (enterPass==correctPass){
            console.log("correct pass")
            break;
        } else{
            console.log(`wrong pass ${a} attempts remaining`)
        }
    }
}while(enterPass!=correctPass);

// //YUG---------------------------------------------------------------
// let pass = 1234;

// for(i = 1; i <=5; i++) {
// let epass = prompt("Enter Password: ");
// if(epass == pass){
//     console.log("Access granted");
//     break;
// }else if(epass != pass){
//     console.log("Access denied. You have " + (5-i) + " attempts left.");
// };
// }

// write a program for reverse the string
function why(wordf){
    let reh="";
    for (let i = wordf.length-1; i>=0; i--){
        reh += wordf[i];
    }
    return reh;
}

console.log(why("YOYOIi"))

// split and join a string