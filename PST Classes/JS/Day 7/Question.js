function Year(year){
// let year =2025;
    if (year%4==0){
        if (year%100==0){
            if (year%400==0){
                console.log(year+ " is a leap year");
            }
            else {
                console.log(year+ " is a not leap year");
            }
        }
        else{
        console.log(year+ " is a leap year");
        }
            
    } else{
        console.log(year+ " is a not leap year");
        }
    }

Year(2100);

// console.log(year%4==0&&year%100!=0||year%400==0);

// let year = 2020;

// if(year % 4 == 0) {
//     if(year % 100 == 0) {
//         if(year % 400 == 0) {
//             console.log(year + " is a leap year");
//         } else {
//             console.log(year + " is not a leap year");
//         }
//     } else {
//         console.log(year + " is a leap year");
//     }
// } else {
//     console.log(year + " is not a leap year");
// }
let color="R";
switch(color){
    case "R":
        console.log("Red");
        break;
    case "G":
        console.log("Green");
        break;
    case "B":
        console.log("Blue");
        break;
    default:
        console.log("Colour Not Defined");
}
function Season(Month){
    // let Month=12
    switch (Month) {
        case 12:
            case 1:
                case 2:
            console.log("Winter");
            break;
        case 3:
            case 4:
                case 5:
            console.log("Spring");
            break;
        case 6:
            case 7:
                case 8:
            console.log("Summer");
            break;
            default:
                console.log("Season Not Defined");
    }

}
Season(6);

/* Find bugs :

if ("Hello"){
    console.log(10);
}

if (10=5){ // ==
    console.log("Test 1")
} else{
    console.log("Test Failed")
}

switch (1){// whenever one case will be matching the pattern the switch will not be checking next
    case 1:
    console.log(1);
    // break; if we don't use break condition then it will run all cases until break occur
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
        default:
            console.log("?")

}

if (8&2){  //8&2-> 0 = false value, so that the else if code will be running
    console.log("Test 3")
}
else if (1){
    console.log("Test 4")
}

// if (condition/Boolean) both
// switch (pattern/condition/boolean)
// case pattern/boolean:

// function test(){
//        var o=56666666666666;
//     console.log("func 1")
// }
// // console.log(o);
// test(); // this was missing

// {
//     var b=909098;
// }
// console.log(b);

// /*Control flow:
// undefinerd
// loop
// */

// console.log(5);
// console.log(6);
// // console.log(j); this is a proff that code works 
// console.log(7);

// //TDZ->Temporal Dead Zone:
// // this is a situation in java script, it is a time period b/w accessability the variable and declaration
// // console.log(fg); // ReferenceError: Cannot access 'fg' before initialization
// console.log("Hello");
// console.log("Test");
// let fg =98;

// // Hoisting :
// // it is a situation whete we can access a variable before declaration
// console.log(w);// Here W is not defined 

// console.log(g); // Here G is indefined
// var g=60000;

// console.log(h);
// let h=8;

// Hoisting:
// Write a JS program to find larget number among 3;

let Num1=9, Num2=45, Num3=11;
if (Num1>Num2 && Num1>Num3){
    console.log(`${Num1} is largest`);
} else if (Num2>Num3 && Num2>Num1){
    console.log(`${Num2} is largest`);
}else {
    console.log(`${Num3} is largest`);
}

// without logical operator
if (Num1>Num2){
    if (Num1>Num3){
        console.log(`${Num1} is largest`);
    } else {
        console.log(`${Num3} is largest`);
    }
} else {
    if (Num2>Num3){
        console.log(`${Num2} is largest`);
    } else {
        console.log(`${Num3} is largest`);
    }
}