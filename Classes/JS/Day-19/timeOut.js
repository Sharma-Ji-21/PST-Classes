console.log('hi')             
setTimeout(()=>{
    console.log('im a polaris')
},2000)
console.log('student')


// const f= require('fs')

// let data = f.readFileSync('something.txt','utf-8')
// console.log(data)


// const { resolve } = require('path')
// console.log("file reading started")
// f.readFile('something.txt','utf-8',(err,data)=>{
//     const f= require('fs')
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("other task")


// console.log("other task")

// function order (food_item,callback){
//     console.log(`preparing ${food_item}`)
//     setTimeout(()=>{
//         console.log(`${food_item} is ready`)
//     },2000)
//     callback()
// }
// function print(){
//     console.log('enjoy ur pizza') 
// }
// order('pizza',print)
 

/*

let res =fetch('https://dummyjson.com/products')
let resp=res.then(res=> res.json())
resp.then((data)=>{
    console.log(data)
})
resp.catch(err=>{
    console.log('im getting error',err)
})

*/

// TASK---print 5 times (ur name) by taking interval 5 sec 
//-----------------------------------------
function name (){
    console.log('priyanka');
}
setTimeout(name,1000); 
name()
//------------------------------------------
// let count=0
// let res = setInterval(()=>{
//     console.log("priyanka")
//     count++
//     if(count==5){
//         clearInterval(res)
//     }
// },5000)