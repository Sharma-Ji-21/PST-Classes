/* Question 1: : Library Book Organizer
You are managing a library system that keeps track of books. Each book has the following properties:
title (string)
author (string)
categories (array of strings representing different genres)
isAvailable (boolean)
Create an object called Book and print the output in the Vs code terminal.*/

const Library1={
    title: "Rich Dad Poor Dad",
    Author: "Robert T. Kiyosaki",
    categories: ["Finance", "Self-help"],
    isAvailable: true,
}
const Library2={
    title: "The Alchemist",
    Author: "Paulo Coelho",
    categories: ["Fiction", "Mystery", "Adventure"],
    isAvailable: false,
}
console.log(Library1, Library2);

/* Question 2:
Refer question number 1 for the object and console the Second item in categories (1st index value of categories).
*/
console.log("Here is the liberary 1 category with index 0 => " + Library1.categories[0]);
console.log("Here is the liberary 2 category with index 1 => " + Library2.categories[1]);

/*Question 3:
Explain the Difference between push and unshift in an Array and show it practically how it works.

=> Push
Push is a method in which we can just add the element to the array.
Here is one of an example:-
*/
let Array=["A", "B", "C", "D"];
Array.push("E");
console.log(Array); // output-> ["A", "B", "C", "D", "E"]

/*Question 4:
Explain the difference between Object and Array and also explain where it is used in real-life scenarios.

=> Array
Array is a collection of elements and the main point is all the elements put in an single array has to be of a same data type.
Ex. for real life scenario:- Library Book Categories(joke), Class Attendence
=> Object
Object is also a collection of elements but the main point is it stores multiple types of elements (different data types) in a single object.
Ex. for real life scenario:- Aadharcard
*/