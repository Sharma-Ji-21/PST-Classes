// Question 1: Text Parser
// You are building a simple text processing application in JavaScript. Implement
// a function that takes a string as input and performs the following tasks using
// various string methods:
// Convert the string to lowercase.
// Remove all spaces from the string.
// Check if the resulting string contains the word "javascript" (case insensitive).
// Count the number of occurrences of the letter 'a' in the string.
// Replace all occurrences of the letter 'e' with 'X' in the string.

function inputText(Statement){
    let lowerCase=Statement.toLowerCase();
    console.log(lowerCase);

    console.log("----------------------------------------------------------------")

    let removeSpace=Statement.replace(/ /gi, '');
    console.log(removeSpace);

    console.log("----------------------------------------------------------------")

    let checkJs=Statement.includes("Javascript");
    console.log(checkJs);

    console.log("----------------------------------------------------------------")
    
    let CountA=0;
    for (let index=0;index<Statement.length;index++){
        if (Statement[index]=="a"){
            CountA++;
        }
    }
    console.log(`Count of a-> ${CountA}`);

    console.log("----------------------------------------------------------------")

    let eReplace=Statement.replace(/e/gi, 'X');

    console.log(eReplace);
}

inputText("Hello Man How are U?")