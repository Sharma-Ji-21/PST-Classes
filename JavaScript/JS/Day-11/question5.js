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
let copystd=JSON.parse(JSON.stringify(std))
copystd.address.city='xyz'
console.log(std)
console.log(copystd)