/*
factory function and constructor functions:
-factory function are the function which return objects. They're called like
regular functions and don't use the new keyword
-they provide a simple way to create objects
factory function are the function like normal one only, just returns object
hm ek function banate h jo object return karta h thats why we don't need to return
*/
function createCircle(){
    return {
        radius:1,
        draw: function(){
            console.log("draw circle");
        }
    }
}

const circle1 = createCircle();
console.log(circle1);
const circle2 = createCircle();
console.log(circle2);

/*
constructor function:
- constructor function are the function which is called with the new keyword
- they provide a more complex way to create objects.
no need to return anything
*/
function Person(name, age){
    this.name = name;// this, current object ki properties ko reffer karega agar m yaha koi value dedu to vo har jagaha wahi print hoga
    // ma agr bina this ke use karta to alag alag function bana padta 
    // this is not a variable. It is a keyword. You cannot change the value of this.
    this.age = age;
    this.greet=function(){
        console.log(`Hello, ${this.name}`);
    }
}

const person1 = new Person("Raj",24);
console.log(person1);
console.log(person1.greet())


const person2 = new Person("Unknown",69);
console.log(person2);
console.log(person2.greet())

//Object Oriented Style of Programming

function circle(radius,color){
    this.radius=radius;
    this.color=color;
}

const c1= new circle(5,"blue")

c1.diameter=10;
console.log(c1);


c1.radius=4;
c1.radius=3;
console.log(c1);

delete c1.radius;// simpily to delete Something
console.log(c1);