// function Cart(){
//     const object={
//         Name:"Om Sharma",
//         itemName:["Milk", "Curd", "Paneer", "Buttermilk"],
//         itemCost:[55,35,80,15],
//     }
//     object.itemName.push("Condom");
//     object.itemCost.push(50);
//     totalItems=object.itemCost.length;
//     console.log(`Here are all items:\n${object.itemName[0]}->${object.itemCost[0]}\n${object.itemName[1]}->${object.itemCost[1]}\n${object.itemName[2]}->${object.itemCost[2]}\n${object.itemName[3]}->${object.itemCost[3]}\n${object.itemName[4]}->${object.itemCost[4]}
//         Total items purchased: ${totalItems}`)
// }
// Cart();


// let cart=[
//     function add(item){
//         cart.push(item);
//         console.log(cart.length);
//     };
//     add("Curd","Milk");
// ];

let cart = [];

function addItem(itemName, itemCost) {
    cart.push({ name: itemName, cost: itemCost });
    // console.log(`${itemName} add to cart for ₹${itemCost}`);
    // console.log("Cart Length:", cart.length);'
    // console.log(cart);
    return cart;
}
// console.log(cart);
function totalArr(){
    let totalCost=0; // up to down chalta h code
    for (let i=0; i<cart.length; i++){
       totalCost +=cart[i].cost;
    }
    // console.log(totalCost);
    let arrLength = cart.length;
    // console.log(arrLength);
    document.getElementById('totalItem').textContent = arrLength;
    document.getElementById('totalCost').textContent = `₹${totalCost}`;
    cart=[];
}


// function arrlength(length){
//     let arrLength = cart.length;
//     console.log("Cart Length after adding items:", arrLength);
//     return arrLength;
// }
// console.log(arrlength)
// function Sum()
// addItem("Curd", 50);
// addItem("Milk", 40);
