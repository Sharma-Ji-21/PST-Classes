/*
Question 1:
Create a function named isEligibleForDiscount that takes these two parameters:
hasMembership (boolean) and
totalPurchase (number)
Implement the function to determine if a customer is eligible for a discount. The eligibility for discount
depends on whether the customer has a membership as well as if their total purchase is greater than $100.
Only when a customer meets both of these conditions, he/she is eligible for a discount. Return true if the
given customer is eligible for discount else return false.
*/
function isEligibleForDiscount(hasMembership,totalPurchase){
    if (hasMembership==true&&totalPurchase>100)
        return true;
    else {
        return false;
    }
}
console.log(isEligibleForDiscount(true,200));
console.log(isEligibleForDiscount(true,90));
console.log(isEligibleForDiscount(false,120));

/*Question 2:
Imagine you're writing code for a timer that starts from 0 and increments every second. Write a function
calculateTimeInSeconds that takes three parameters: hours, minutes, and seconds. Calculate and return the
total time in seconds.*/
function calculateTimeInSeconds(hours, minutes, seconds) {
    let hoursSeconds = hours*60*60;
    let minutesSeconds = minutes*60;
    let totalSeconds = hoursSeconds + minutesSeconds + seconds;
    return totalSeconds;
}
console.log(calculateTimeInSeconds(0,0,50));

/*
Question 3:
You're building a calculator app. Create a function calculateBMI that takes two parameters: weight (in
kilograms) and height (in meters). Calculate and return the Body Mass Index (BMI) using the formula: BMI =
weight / (height * height).*/

function calculateBMI(weight, height) {
    let BMI = weight/(height*height);
    return BMI;
}
console.log(calculateBMI(50,1.69));

/*Question 4:
Question 4:
You're developing a game. Implement a function calculateFinalScore that takes three parameters: kills,
objectives, and time (all integers). Calculate and return the final score using the formula: score = kills
* 100 + objectives * 50 - time * 10.
*/
function calculateFinalScore(kills, objectives, time){
    let score = kills * 100 + objectives * 50 - time * 10
    return score;
}
console.log(calculateFinalScore(23,25,5));
