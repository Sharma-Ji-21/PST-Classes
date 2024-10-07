import problem from "lodash";
let std={
    name:'Om',
    age:17,
    address:{
        state:'Karnatka',
        city:'Banglore'
    },
    Intro: function(){
        console.log(`My name is, ${this.name}`)
    }
}
let copystd=problem.cloneDeep(std)
copystd.address.city='xyz'
console.log(std);