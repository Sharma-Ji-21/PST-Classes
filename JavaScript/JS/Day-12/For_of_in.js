// for -- in (Only can access key)
// To itrate Object
// we can use it in array also , now the question rises that previously I said it can only access key
// yes it can accesss keys only it treats the array index as a key.
let obj={
    name: "Priyanka",
    class:"B-tech",
    rollNo:21
}
for(let key in obj){
    console.log(key); // we are just printing the key and keys are Name, Class and rollNo
    console.log(obj[key]);
}
console.log("--------------------------------")

let arr=[648,540,8,12,0]
for (let i in arr){
    console.log(i);
}
console.log("--------------------------------")

// for -- of {cannot be used for object}
// it prints value not the index/length,



let arr1=[1,2,3,4,5,6,7,8,9]
for (let val of arr1){
    console.log(val);
}

console.log("--------------------------------")
function arr23(...arr){
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
arr23(2,4,3,1,5,9,12);

console.log("--------------------------------")

let ar23=[2,4,3,1,5,9,12]
for (let i of ar23){
    if (i % 2 === 1) {
        continue;
//Continue Statement:
// Whenever continue is triggered (for odd numbers), it skips the print statement and moves to the next
// number.
    }
    console.log(i);
}

console.log("--------------------------------")

function VichitraPrani(name,Class,age){
    this.name = name;
    this.Class = Class;
    this.age = age;
}
console.log((new VichitraPrani("IDK","B-Tech",19)))

console.log("--------------------------------")

console.log(Math.max(4,3,2,1));//4
console.log(Math.min(4,3,2,1));//1
console.log(Math.abs(-5));//5
console.log(Math.round(4.6));//5
console.log(Math.ceil(-4.1));//-4
console.log(Math.floor(-4.1));//-5
console.log(Math.trunc(-4.1));//-4
console.log(Math.pow(-4,2));//16
console.log(Math.sqrt(4));//2
console.log(Math.random());//random b/w 0 to 1;
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));


function hlo(){
    var otp=Math.floor(Math.random()*100000);
    const str=String(otp);
    if (str.length==5){
        console.log(`Here is ur otp-> ${otp}`)
    } else {
        hlo();
    }
}
hlo();
