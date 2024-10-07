/*Question 1: Grade Classification
Write a program that takes a student's grade (as a percentage) and uses a "switch" case statement to
classify it into a letter grade (A, B, C, D, F). The grading scale is:
A: 90% and above
B: 80% to 89%
C: 70% to 79%
D: 60% to 69%
F: Below 60%
Display the letter grade to the user.*/
let marks =90;
switch(true){   //when we are checking bolean in case then we have to check the true or false case if we add switch(true)
    // then code will run the true case
    case (100>=marks&&marks>=90):
        console.log(`At ${marks} marks u secured A grade.`)
        break;
    
    case (90>marks&&marks>=80):
        console.log(`At ${marks} marks u secured B grade.`)
        break;
    
    case (80>marks&&marks>=70):
        console.log(`At ${marks} marks u secured C grade.`)
        break;
    
    case(70>marks&&marks>=60):
        console.log(`At ${marks} marks u secured D grade.`)
        break;
    
    case(60>marks):
        console.log(`At ${marks} marks u secured F grade.`)
        break;
    
}

/* 
Question 2: Traffic Light Control
Create a program that simulates a traffic light system. The user inputs a color code (R for Red, Y for
Yellow, G for Green), and the program uses a "switch" case statement to output the appropriate action:
Red: "Stop"
Yellow: "Get Ready"
Green: "Go"
For any other input, display "Invalid color code."*/

let lightColour = "R";
switch(lightColour){
    case "R":
        console.log("Stop");
        break;
    case "Y":
        console.log("Get Ready");
        break;
    case "G":
        console.log("Go");
        break;
    default:
        console.log(`Invalid light colour`);
}

/* 
Question 3: Age Group Classification
Create a program that classifies a person's age into different life stages. Ask the user to input their
age and use if, else if, and else statements to classify and display:
"Child" for ages 0 to 12
"Teenager" for ages 13 to 19
"Adult" for ages 20 to 64
"Senior" for ages 65 and above
Display "Invalid age" for any negative age values.*/
let age = 100;
if (12>=age && age>0){
    console.log(`${age}years-> Child`);
} else if (19>=age && age>12){
    console.log(`${age}years-> Teenager`);
} else if (64>=age && age>20){
    console.log(`${age}years-> Adult`);
} else if (65<=age){
    console.log(`${age}years-> Senior`);
}

/* 
Question 4: Shipping Calculator
Create a program that calculates shipping costs based on the shipping method selected. The user inputs a method 
code (S for Standard, E for Express, O for Overnight), and the program uses a "switch" case statement to display 
the cost:
Standard: Rs.5
Express: Rs.10
Overnight: Rs.20
For any other input, display "Invalid shipping method."*/

let shippingMethod = "S";
switch(shippingMethod){
    case "S":
        console.log("Shipping cost: Rs.5");
        break;
    case "E":
        console.log("Shipping cost: Rs.10");
        break;
    case "O":
        console.log("Shipping cost: Rs.20");
        break;
    default:
        console.log("Invalid shipping method.");
}

/* 
Question 5: Subscription Plans
Write a program that determines the monthly cost of a subscription plan based on the user's choice. The options are:
1. Basic Rs.9.99 per month
2. Standard Rs.14.99 per month
3. Premium Rs.19.99 per month
The user inputs a number corresponding to their choice, and the "switch" case statement displays the
monthly cost. If the number is not between 1 and 3, display "Invalid plan."
*/

let subscriptionPlan = 2;
switch(subscriptionPlan){
    case 1:
        console.log("Monthly cost: Rs.9.99");
        break;
    case 2:
        console.log("Monthly cost: Rs.14.99");
        break;
    case 3:
        console.log("Monthly cost: Rs.19.99");
        break;
    default:
        console.log("Invalid plan.");
}