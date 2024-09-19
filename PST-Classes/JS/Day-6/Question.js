//Question 1
let sum=0;
function Sum(){
    for (i=0;i<=100;i++){
        if (i%2==0){
            sum += i;
            // console.log(sum);
        }
    } return sum;
    // let finalsum=sum;
    // console.log(finalsum);
}
console.log(Sum());

//Question 2
// function printlarger(x,y){
//     if (x>y){
//         console.log(x);
//     } else{
//         console.log(y);
//     }
// }
// printlarger(234,3231);
function printlarger(x, y){
    let wed=x>y?`${x}`:`${y}`;
    return wed;
}
console.log(printlarger(12344,124));

//Question 3
//create function that return final price after APLLying 25% discount
function discountPrice(price){
    let discount=price*0.25;
    let finalPrice=price-discount;
    return finalPrice;
}
console.log(discountPrice(2000));


//Question 4
function avg(a,b,c){
    let avg=(a+b+c)/3;
    return avg;
}
console.log(avg(10,20,30));

//variable can be declared without initialising the variable
// we can declare the variable var without initializing the value
// we can declare the variable let without initializing the value
// we can not declare the variable const without initializing the value

function f1(){
    var a=8;
    console.log(a);
}
f1(); // output=> 8
// it is functional scoped (this mean if i declare the var inside the function we can access in the function only)

var a=8;
function f1(){
    console.log(a);
}
f1();
console.log(a); // here the var "a" is behaving as a global variable (this mean we can call var iside as well as outside the function)

// let and const is block scope (insde the scope({}) we can access out side the block we can't access)

// declare 2 function :
//declare two function f1 and f2, declare var in f1 scope and assign value 10, and try to print var value in f2 scope

// function f1(){
//     var value=10;
// }
// f1();
// function f2(){
//     console.log(value);
// }
// f2();   -> error

console.log(NaN==NaN); //false (Nan is something which we can not represent)
console.log(NaN===NaN); //false
console.log(undefined==null); //true (Both are not having any value so both are equal just like empty string == empty number // true)
console.log(typeof(+[])); // number(as 0+[] represents a number)
//difference between === and ==
//how to evaluate through chain breaking rule --------------------------
//how to understand bitwise conversion
//how to find cude root of a number using operator
console.log(27**(1/3)); //3 done
console.log(2**3**2); //512 done
console.log(4&2/5*2+2); //0
console.log(3|2*(4**2)); //35
console.log(5&&3); //3
console.log(3||" "); //3
console.log("Hello"&&0&&5&&9); //0 (Hello->true and 0->false =>false) // &&-> first falsy value = all false, Last trult value = all true
console.log(5||false||"Hello"&&true); //5 (5||false||"Hello"=> return 5 as 5->true or false=> true so now if we get true in or series we need not to see the further series)
console.log(9&&true||false&&true); //true
console.log(5||6||7||8||9||19||false); //5 (in or series we don't want to see the further series)
// all true->first true, all false->last false  [FOR OR ONLY]
// all true->last true, all false->first false  [FOR AND ONLY]
console.log(5&&7&&8&&9&&true); //true