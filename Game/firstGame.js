const prompt=require("prompt-sync")();
let name=prompt("Enter Ur Name:");
console.log(`Welcome ${name}`);
let res=1;
let num=Math.floor(Math.random()*(100-1))+1;
while(true){
    let input=prompt("Enter number b/w 1 to 100-> ");
    if (input>num){
        console.log("Too High");
    } else if (input<num){
        console.log("Too Low");
    }
    else{
        console.log("Congratulations "+name+", You guessed it! in "+ res +" Times");
        break;
    }
    res++;
}