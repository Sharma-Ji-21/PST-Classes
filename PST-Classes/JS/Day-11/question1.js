// SHALLOW Copy: Copies only the top-level properties. If there are nested objects, the reference to the
// nested object is copied, not the actual object.
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
let copystd =std
copystd.name='Tanishq'
console.log(std)
console.log(copystd)
