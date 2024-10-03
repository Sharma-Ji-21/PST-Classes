/*
synchronous JavaScript:
The code will be exucuted line by line (sequentially ordered)
drawback:
if there are time consuming task (fetching the data) then the further code does not 
gets executed (Blocking Occurs).

Asynchronous JavaScript:
The code will be exucuted parllaly (Non Blocking Code).
*/
console.log('Hi');
// setTimeout(()=>{
//     console.log('Hello');
// },2000);

console.log('Bye');
/*
The setTimeout function is a asynchronous function.
The code 'Hello' will be printed after 2 seconds, not before.
*/

/*
Callback function:
The callback function will be executed when the task is completed.

*/
function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}
function callMe(){
    console.log('I am callback function');
}
greet('Om', callMe);

/*
Callback hell function: (paramin of the dome)
a phenomina in which funciton holds th function as argument

basically chain function like if d needs to be executed then c should be
executed .....)
*/
// getArticle(20,(user)=>{
//     console.log('Fetch articles',user);
//     getUserData(user.username, (name)=>{
//         console.log(name);
//         getAdress(name,(item)=>{
//             console.log(item);
//         });
//     });
// });
/*
The phenomenon which happens when we nest multiple callbacks within a function is 
called a callback hell. The shape of the resulting code structure resembles a 
pyramid and hence callback hell is also called the "pyramid of the doom".
It makes the code very difficult to understand and maintain.
To understand the internal working of callback hell in javascript, assume we have 
to achieve a task say D. To achieve task D, we need to execute a series of 
dependent tasks ranging from A to C asynchronously. In short, first we execute 
task A, we get the result and task B need to depend on result A to start its 
execution. Similarly, unless result B is produced we can't execute task C. This 
leads to the chaining of tasks from A to D, which creates a set of nested
*/

/*
promises:
-A promise in JavaScript is like a container for a future value. It is a way of saying, "I don't have this value right now, but I will have it later." Imagine you order a book online. You don't get the book right away, but the store promises to send it to you. While you wait, you can do other things, and when the book arrives, you can read it.

-In the same way, a promise lets you keep working with your code while waiting for something else to finish, like loading data from a server. When the data is ready, the promise will deliver it.

types:
1. Pending: The initial state of promise before the event happens.
2. Resolved/fullfilled: The promise operation has completed successfully.
3. Rejected: The promise has failed.
*/
let promise =new Promise(function(resolve, reject){//just LikeSyntaxOf ConstructorFunc
    const a="geeksforgeeks"
    const b="geeksforgeeks"
    if(a==b){
        resolve();
    }else{
        reject();
    }
});

promise.then(function(){
    console.log('Success, You are a GEEK');
}).catch(function(){
    console.log('Some Error has Occurred');
})

// catch method is used to handle errors


let p=new Promise(function(resolve,reject){
    let a=45;
    let b=98;
    if (a>b){
        resolve();
    } else {
        reject();
    }
});
p.then(function(){
    console.log("A is greater than B");
}).catch(function(){
    console.log("A is less than B");
})

/*
setTimeOut:
- setTimeout() is a function in JavaScript that allows you to delay the execution of a function by a specified number of milliseconds.
-syntax:
setTimeout(function, milliseconds);
*/
function settimer(){
    for (var i=10;i>=0;i--){
        function i(){
            if (i!=0){
                console.log(i);
            }
        }
    }
}
setTimeout(settimer,i*1000);
/*
 clearTimeout:
- clearTimeout() is a function in JavaScript that cancels a setTimeout() call.
-syntax:
clearTimeout(timeoutId);
*/

function delayedFunction(){
    console.log("this will not be executed")
}

let timeoutId = setTimeout(delayedFunction, 2000);

clearTimeout(timeoutId);
console.log("timeout canceled")