// DEEP Copy:
// copyied the value not the refrences
// thats why std doesn't change the only thing changed is copystd.
// but the effect is on nested loop because the address was stored with the refrences value.
//  A full copy of the object, including all nested objects, so changes in the copy do not affect the
// original.

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
let copystd=Object.assign({},std)
copystd.name='xyz'
console.log(std)
console.log(copystd)
copystd.address.city='xyz'
console.log(std)
console.log(copystd)