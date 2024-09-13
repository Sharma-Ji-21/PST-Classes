/*
Control statement:
used to control the execution of a program based on the particular program
//we take control of javascript code execution by putting some condition that's why is called control flow statement

1. If-else statement:
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
*/
// Questions :
let x=92;
if (x>4){
    console.log(`${x} is greater than 4`);
} else{
    console.log(`${x} is smaller than 4`);
}


let age =27;
if (age>=18){
    console.log(`U are ${age} years old U can vote`);
} else{
    console.log(`U are Just ${age} years old U can't vote`);
}

/*
else if statement:

if (condition1) {
    if condition1 is true then this block of code will be executed
    else if (condition2) {
        otherwise this block of code will be executed if condition1 is false and condition2 is true
    } else {
            otherwise this block of code will be executed if both condition1 and condition2 are false
        }
} */

let Num=23;
if (Num>0){
    console.log(`${Num} is +ve`)
} else if (Num=0){
    console.log(`${Num} is 0`);
}else {
    console.log(`${Num} is -ve`)
}


let Marks=100;
if (Marks>=90){
    console.log(`Congratulation U secured ${Marks} marks and Grade A`);
} else if(Marks>=60){
    console.log(`Congratulation U secured ${Marks} marks and Grade B`);
} else if(Marks>=40){
    console.log(`Saale padhle ${Marks} marks aaye h`);
} else{
    console.log(`Fail`);
}


let value = 31;
if (value%2==0){
    console.log(`${value} is an even number`);
} else{
    console.log(`${value} is an odd number`);
}


let rating=2.5;
if (rating>=4){
    console.log (`Rating-> ${rating} (GREAT)`);
} else if (rating<=2){
    console.log (`Rating-> ${rating} (BAD)`);
} else{
    console.log (`Rating-> ${rating} (AVERAGE)`);
}

// Nested If Else
// when we use if else statements in b/w a if else statement then the if else statement used in b/w is known as nested if else

let num=25;
if (num%2==0){
    console.log(`${num} is an even number`);
    if (num>10){
        console.log(`${num} is greater than 10`);
    } else{
        console.log(`${num} is less than or equal to 10`);
    }
} else{
    console.log(`${num} is an odd number`);
    if (num>10){
        console.log(`${num} is greater than 10`);
    } else{
        console.log(`${num} is less than or equal to 10`);
    }
}

function check(a){
    if (a%2==0){
        return "even";
    }
    else {
        return "odd"
    }
}
let result = check(5);
if (result=="even"){
    console.log("Hello");
}
else {
    console.log("Bye");
}

/* Switch:
when their are lots of condition we can use switch statements here is the syntax for the same

switch (expression) {
    case value1:
        code block
        break;
    case value2:
        code block
        break;
    default:
        default code block
}
*/

let day=51977900;
if (day%7==0){
    day=7
} else{
    day=day%7;
}
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        // default:
        //     console.log("Invalid Day"); (No need for default as We assigned day = day%7+1;)
}

let grade = "C";
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid Grade");
}
