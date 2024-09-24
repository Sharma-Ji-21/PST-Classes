// Functions:
//(Temperal dead zone)
function sum0(a,b){
    return a+b;
}
console.log(sum0(2,3));


// Functions Expressions
let sum1=function(x,y){
    return x+y;
}
console.log(sum1(2,3));


// Array Functions
let sum2=(t,z)=>t+z;

console.log(sum2(2,3));

let sum3=(s,h)=>{
    let c=s+h;
    return c;
}
console.log(sum3(2,3));

function Greeting(name){
    console.log(`Hello ${name}`);
}

//Date:
let d=new Date();
console.log(d);
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.setFullYear("2028"))
console.log(d.setDate("23"))
console.log(d.setMonth("05")) //because of indexing issues (indexing starts from 0)
console.log(d);

let d1=new Date(2023,9,24);
console.log(d1);

let d2=new Date("2023-10-24");
console.log(d2);
