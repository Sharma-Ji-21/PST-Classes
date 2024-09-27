// Question 1:Takes object and return Array of keys
// Write a function that takes an object as input and returns an array of all the 
// keys where the value is a string.

function getStringKeyWithoutFilter(obj){
    let stringKey=Object.keys(obj);
    return stringKey;
}
const input={
    name: "John",
    age: 25,
    city: "New York",
    occupation: 42
};
console.log(getStringKeyWithoutFilter(input));

// Question 2: Takes object and return a object where key and value swapped
// Implement a function that takes an object and returns a new object with the
// keys and values swapped.

function swapKeysAndValues(obj1){
    let swapped=Object.entries(obj1); //nested arrays
    for(let value of swapped){
        let temp=value[0];
        value[0]=value[1];
        value[1]=temp;
    }
    return swapped;
}
const input1={
    a:1,
    b:2,
    c:3
};
console.log(swapKeysAndValues(input1));


// Question 3: Bank account using closure
// Implement a closure function to create a bank account that allows deposits, 
// withdrawals, and checking balance 
function createBankAccount(initialBalance){
    let balance=initialBalance;
    return {
        deposit: function(amount){
            balance+=amount;
            return `Deposit amount: ${amount}, New Balance: ${balance}`;
        },
        withdraw: function(amount){
            if(amount>balance){
                return ("Insufficient balance");
            }
            else  {
                balance-=amount;
                return `Withdraw amount: ${amount}, New Balance: ${balance}`;
            }
        },
        checkBalance: function(){
            return `Current Balance: ${balance}`;
        }
    };
}

const account=createBankAccount(200);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.checkBalance());
console.log(account.withdraw(250));

const account1=createBankAccount(500);
console.log(account1.deposit(100));
console.log(account1.withdraw(250));
console.log(account1.checkBalance());
console.log(account1.withdraw(600));

// Question 4: Sum of single Digit
// Write a function that takes a positive integer as input, and repeatedly sums 
// its digits until the sum is a single digit. Use type casting where necessary.

function sumToSingleDigit(num){
    let sum=0;
    let str=String(num);
    let arr=str.split('');
    for (let i=0;i<arr.length;i++){
        sum+=Number(arr[i]);
    }
    if (sum>9){
        return sumToSingleDigit(sum);
    }
    else{
        return sum;
    }
}
console.log(sumToSingleDigit(12345));
console.log(sumToSingleDigit(987));
console.log(sumToSingleDigit(9999));
console.log(sumToSingleDigit(5));