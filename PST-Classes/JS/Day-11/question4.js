let std={
    name:'Om',
    age:17,
    address:{
        state:'Karnatka',
        city:'Banglore'
    },
}
let copystd=JSON.parse(JSON.stringify(std)) // we converted object into a string because string always
// store value
copystd.address.city='xyz'
console.log(std)
console.log(copystd)
// As we can see, even though we changed the city in copystd, std remained same because JSON.stringify()
// doesn't copy references