/*QUESTION 1
You have been given the task of building a function that converts a temperature value from Fahrenheit to Celsius.
Fahrenheit and Celsius are units of Temperature. The formula to convert Fahrenheit to Celsius is as follows:
Celsius value = (Fahrenheit value - 32) * 5/9
Your task is to implement the `convertToCelsius` function that accepts a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
Points to remember:
Implement a function named `convertToCelsius` that takes a single parameter - A number that is the temperature in Fahrenheit that needs to be converted.
Inside the function, apply the conversion formula to calculate the equivalent temperature in Celsius.
Return the calculated Celsius temperature.*/


function convertToCelcius(Fahrenheit){
    let Celsius=(Fahrenheit - 32) * 5/9
    return Celsius;
}
console.log(convertToCelcius(98.6));
console.log(convertToCelcius(765));
console.log(convertToCelcius(35));


/*QUESTION 2
You have been given the task of building a function that calculates the area of a circle based on its radius.
The formula to calculate the area of a circle is as follows:
Area = 3.14 * radius * radius
Your task is to implement the `calculateCircleArea` function that accepts the radius of a
circle and returns its area.
Points to remember:
Implement a function named `calculateCircleArea` that takes a single parameter - A number that is the radius of the circle for which you need to calculate the area.
Inside the function, apply the area calculation formula to calculate the area of the circle.
Return the calculated area.
*/


function calculateCircleArea(radius){
    let area=3.14*radius*radius;
    return area;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(3));
console.log(calculateCircleArea(9));