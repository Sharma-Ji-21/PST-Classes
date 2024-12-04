// document.getElementById("first").style.color="red";
// document.getElementsByClassName("second")[0].style.color="green";
let x=document.getElementsByTagName("p"); //this creates a collection of all the p tags
for(let i=0;i<x.length;i++){
    if(i%2==0){
        x[i].style.color="green";
        x[i].innerText=i+" para is even";
    }
    else{
        x[i].style.color="red";
        x[i].innerText=i+" para is odd";
    }
}
// document.getElementById("third").style.color="blue";