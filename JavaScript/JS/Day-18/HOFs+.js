// Higher Order Functions
// Accepts a function as an argument
// or Return a function

function createMultiplier(multiplier){
    return function(number){
        return number * multiplier;
    }
}
const double=createMultiplier(2);
const triple=createMultiplier(3);

console.log(double(10));
console.log(triple(20));

function createDiscoutCalculator(number){
    return function(price){
        return price -(price*number);
    }
}
const electronicDiscount=createDiscoutCalculator(0.10);
const fashionDiscount=createDiscoutCalculator(0.20);

console.log(electronicDiscount(1000));
console.log(fashionDiscount(1000));

// call back function are the functions which are called inside the higher order function.

// filter:
// map:
// reduse:
// some:
// every:

// findIndex:
// indexOf:

let arr=[1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1]
console.log(arr.indexOf(5));
// console.log(arr.findIndex(1));

const product=[
    {name:'Laptop',price:800},
    {name:'Mobile',price:500},
    {name:'Camera',price:200},
    {name:'Headphone',price:300}
];

const affordable=product.filter((ele)=>ele.price>250).map((ele)=>ele.name);
console.log(affordable);

const prize=[100,200,300];
const discountPrize=prize.map((price)=>price*0.9);
console.log(discountPrize);

const inventory=[
    {name:'Laptop',inStock:true},
    {name:'Mobile',inStock:false},
    {name:'Camera',inStock:true},
    {name:'Headphone',inStock:false}
];
const anyOutOfStock=inventory.some((item)=> item.inStock==true);
console.log(anyOutOfStock);

if (anyOutOfStock!=true){
    console.log(`Some items is out of stock!!`)
}
else {
    console.log(`Some items are in stock!!`)
}

const inventory1=[
    {name:'Laptop',inStock:true},
    {name:'Mobile',inStock:true},
    {name:'Camera',inStock:true},
    {name:'Headphone',inStock:true}
];
const anyOutOfStock1=inventory1.every((item)=> item.inStock==true);
console.log(anyOutOfStock1);
if (anyOutOfStock1!=true){
    console.log(`All items are not in stock!!`)
} else {
    console.log(`All items are in stock!!`)
} 

let arr12=[10,35,18,23]
const maxNumber=arr12.reduce((max,nums)=> {
    if (max<nums){
        max=nums;
    }
    return max;
},0)
console.log(maxNumber);

const Numbers12=[1,2,2,3,4,4,5,1];
// let Nm=[];
const removeNum=Numbers12.reduce((Nm,lol)=>{
    if (!Nm.includes(lol)){
        Nm.push(lol);
    }
    return Nm;
},[])
console.log(removeNum); //output [1,2,3,4,5]