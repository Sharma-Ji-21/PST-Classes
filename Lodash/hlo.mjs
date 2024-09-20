import solution from "lodash";
let obj ={
    name:"xyz",
    age:18,
    address:{
        city:'Banglore',
        state:'Karnatka'
    }
}
let obj1=solution.cloneDeep(obj);
console.log(obj1);

// Using Lodash we can create a perfect deep copy of an object including nested loops and functions