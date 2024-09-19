let str="omsharma"

let arr=str.split('')
let start=0;
let end=arr.length-1

while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr.join(''));

//create a function Car which take an object which has properties carModel,color,
// yearOfPurchase and function which will calculate the car how old it is. this
//  function will take one parameter which is current year and display the result
//  (ur tesla car is 10 year old)

function Car(carModel,color,yearOfPurchase){
    return{
        carModel,
        color,
        yearOfPurchase,

        old(currentYear){
            console.log(`my ${this.carModel} is ${currentYear-this.yearOfPurchase}`)
        }
    }
}
const car1=Car('tesla','red',2020)
car1.old(2025)
console.log(car1)