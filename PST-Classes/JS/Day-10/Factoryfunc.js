let obj1={
    firstName:"Raj",
    secondName:"xyz",
    fulName(){
        console.log(firstName + secondName)
    }
}
// obj1.fulName();

let obj2={
    firstName:"Raj",
    secondName:"xyz",
    fullName(){
        console.log(this.firstName +" "+ this.secondName)
    }
}
obj2.fullName();

let obj3={
    firstName:"Raj",
    secondName:"yz",
    fullName:function(){
        return (this.firstName +" "+ this.secondName)
    }
}
console.log(obj3.fullName());

//factory function (not have any prototype)
function PSTStd1(name,age,Roll,fee){
    return{
        name: name,
        age: age,
        roll: Roll,
        Fees: fee
    }
}
console.log(PSTStd1("Om",17,97,1234))


function PSTStd2(name,age,Roll,fee){
    return{// if the key name is same as the parameter name then we can write directly
        name,
        age,
        Roll,
      //  Fees,   ->ERROR
        // Fees:fee,
    }
}
console.log(PSTStd2("Om",17,97,7654))

// constructor function (have a prototype)
function PSTSTD(name,age,roll){ //PSTSTD is a prototype
    this.name=name;
    this.age=age;
    this.roll=roll;
}
let std1= new PSTSTD("Himkar",17,5) // PSTSTD("Himkar",17,5) is known as instance and other name is object
console.log(std1)// Std1 is an object


function PSTSTD1(name,age,roll){
    this.name=name;
    this.age=age;
    this.roll=roll;
    this.Intro=function(){
        console.log(`My name is ${this.name}`)
    }
}
let std2= new PSTSTD("Yug",18,2)
std2.Intro()
console.log(std2.roll)

//pick 5 software companies that you want to work in. why?
//pick one of these companies and tell us what one product feature intrested you most and why?


//split: it convert string's each index items into the each index of array.
//join:it convert each array index and join them to a single string.
