// Question 1:
// Create a program that prints numbers from 1 to 10 synchronously, and then prints 
// numbers from 11 to 20 asynchronously using setTimeout.
for (let i=1;i<=10;i++){
    console.log(i);
}
setTimeout(()=>{
    for (let i=11;i<=20;i++){
    console.log(i);
    }
},2000);

// Question 2:
// Write a function checkWeather() that resolves with "Sunny" or rejects with "Rainy" 
// randomly. Use .then() to print "Weather is great for a picnic!" if resolved and .
// catch() to print "It might rain today!" if rejected

function checkWeather(){
    return new Promise((resolve,reject)=>{
        let weather =Math.random()>0.5? 'Sunny' : 'Rainy';
        if (weather=='Sunny'){
            resolve();
        }
        else if (weather=='Rainy'){
            reject();
        }
    });
}
checkWeather()
.then(()=>{console.log('Weather is great for a picnic!')})
.catch(()=>{console.log('It might rain today!')});

// Question 3:
// Create a function makeDinner() that executes four steps (Boil water, Add pasta, 
// Stir sauce, Serve meal) sequentially, each step taking 1 second, using nested 
// callbacks.
let makeDinner=(()=>{
    console.log("Cooking Started....")
    setTimeout(function(){
        console.log('Boil water')
        setTimeout(function(){
            console.log('Add pasta')
            setTimeout(function(){
                console.log('Stir sauce')
                setTimeout(function(){
                    console.log('Serve meal')
                    setTimeout(function(){
                        console.log('Dinner is ready!')
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})

makeDinner();

// Question 4: Basic Stock Price Checker
// You need to simulate a basic system that checks the stock price every 2 seconds. 
// If the stock price goes above 400, the system will alert you and stop.
// Requirements:
// Stock Price Simulation (setInterval):
// Write a function that generates a random stock price between 100 and 500 every 2 
// seconds.
// Promise to Alert High Price:
// If the stock price goes above 400, the Promise resolves and shows an alert. If 
// not, it keeps checking.
// Stop Checking When Price is Too High:
// Once an alert is triggered, stop the stock price simulation.

function fetchStockPrice(){
    return (Math.random()*(500-100+1))+100;
}
function checkPrice(price){
    return new Promise((resolve, reject) =>{
        if (price>400){
            resolve()
        } else {
            reject()
        }
    })
}
function startMonitoring(){
    let interValId= setInterval(()=>{
        let price=fetchStockPrice();
        console.log(`Price: ${price}`);

        checkPrice(price)
        .then(()=>{
            console.log(`Alert: Higher Price detected`)
            clearInterval(interValId);
        })
        .catch(()=>{
            console.log('Checking Price Again')
        });
    },2000);
}
startMonitoring();

// Question 5:
// Write a code using the concept of promise, fetch the json data from 
// https://dummyjson.com/posts and console the data in the terminal.

let data=fetch("https://dummyjson.com/posts");
let response=data.then(data=>data.json())

response.then((data)=>{
    console.log(data);
}).catch(data=>{
    console.log("error fetching data",error);
})
console.log(response);