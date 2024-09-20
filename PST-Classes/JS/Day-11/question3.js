// DEEP Code:
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
let copystd={...std} // behave same as object
copystd.name='xyz'
console.log(std)
console.log(copystd)
copystd.address.city='xyz'
console.log(std)
console.log(copystd)