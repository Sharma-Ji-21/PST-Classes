const prompt=require("prompt-sync")();
let name=prompt("Enter Ur Name:");
if (name==''){
    console.log("Name can't be empty");
    return false;
}
console.log(`Welcome ${name}`);
let res=1;
let num=Math.floor(Math.random()*(100-1))+1;
if (num==2){
    console.log("HINT:-The Number is a Prime Number")
}
if (num<2){
    console.log("HINT:-The Number is a Composite Number")
}
for (let i=2; i<=Math.ceil(num/2); i++){
    if (num%i==0){
        console.log("HINT:-The Number is a Composite Number");
        break;
    }
    else{
        console.log("HINT:-The Number is a Prime Number");
        break;
    }
}
while(true){
    let input=prompt("Enter num b/w 1 to 100-> ");
    // if (typeof input=="string"){
    //     console.log("Please enter a num");
    //     break;
    // }
    if (input>num){
        console.log("Too High");
    } else if (input<num){
        console.log("Too Low");
    }
    else{
        if (1<=res && res<=4){
            console.log("U are a Legend, u guessed the num in "+ res +" Times");
        }
        else if(4<res && res<=7){
            console.log("U are a Good Player, u guessed the num in "+ res +" Times");
        }
        else if(res>7){
            console.log("Well played Beginner, u guessed the num in "+ res +" Times");
        }
        break;
    }
    res++;
}