//basic printing
//console  can handle +ve,-ve,decimal,integer

console.log("welcome\nsuccess");
console.log("Mera naam h Om");  // String literalString
console.log(2); // Number literal {if i add "" to the number it become string literal}
console.log(-3);
console.log(4.69);
console.log(0.5);

// literal
console.log("Om Sharma\nHello PST");  // String literal
console.log(2); // Number literal {if i add ""to the number it become string literal}

//variable
var age = 99; //variable
console.log(age); // output 99

// Rules->
// these are case sensitive 
// can only begin with a letter, underscore("_")or ("$") Symbol
// can only contain letters, underscores, $
// cannot be named by reserved keywords (var,let,const)


//**Variable**: variable are the memory block which can be use to store data
//declaired using const called constant
//Constant are the variable whose value cannot change
//variable cannot be redeclared or reassigned

const pi=3.14;
console.log(pi); //output 3.14


/* --Lecture-2
What is the difference between scripting & programming languages?
-- compiler and interpreter.
How we decide, which tranlator we sholud use?
--depends on the different languages.
Is there any standardized to call assembly language a medium level or low level language?
-- not standered in some book it is given low and in some medium so both are correct.


->Compiler:-
when we compile, it creates a seperate file
language which use compiler is known as programming language
c, c++, java......

->interprator:-
it converts the code written in high level language to machine language which can be understand by computer and directly run in the machine
language which use interpreter is known as scripting language
python, javascript, php......

History of JavaScript->
1995 by Brendan Eich
client side scripting language
created in 10 days
Mocha-> Livescript-> Javascript
ECMA gave standardization of JavaScript


JavaScript can be used in 2 types:-
1. Browser side scripting
2. Node.js (Server side scripting)
*/

//Question---------------->
console.log('10'-15);  //output->5
console.log('10'+15);  //output->1015
console.log('kk');  //output->kk
console.log("asdfghjkl");  //output->asdfghjkl
console.log("'qwertyuiop'");  //output->qwertyuiop