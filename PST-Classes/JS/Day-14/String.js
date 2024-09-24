const d= new Date("2000","03","04")
if(d.getFullYear()%4==0){
    str=String(d.getFullYear())
    num=Number(str)
    if(str[str.length-1]==0,str[str.length-2]==0){
        if (num%100==0 && num%400==0){
            console.log(`${num} is a leap year`);
        }else{
                console.log(`${num} is not a leap year`);
            }   
        }
        else{
            console.log(`${num} is a leap year`);
        }
}
// console.log(d.getFullYear());

// Function Declaration
function greetDeclaration(){
    console.log("Hi!");
}

// Function Expression
const greet=function(name){
    console.log("Hi");
    console.log(name)
    console.log("Hello!");
    return 4;
}
result=greet("Om");
console.log(result);
console.log(typeof(greet));

function square(a){
    return a**2;
}
console.log(square(5));


// Normal function
const greet1 = function(name){
    return `Hi ${name}!`;
}

// Arrow function ()=>{}
// introduce a constant with the parameter name in () and then put => after that
// code will return the code {}
const greet2 = (name) => `Hi ${name}!`;

console.log(greet1("Om"));
console.log(greet2("Om"));

let greet3=(num)=> `square of ${num} = ${num**2}`
console.log(greet3(5));

// default Parameter
function calculate(length=5,width=10){
    return length*width;
}
console.log(calculate(3,7));
console.log(calculate(0,10));
console.log(calculate());