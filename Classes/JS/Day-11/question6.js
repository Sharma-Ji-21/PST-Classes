// find second larges element from an array

let array=[10,20,18,30,16];
let largestValue=Math.max(...array);
let secondLargestValue=0;
console.log(`largestValue: ${largestValue}`);
for (let i=0; i<array.length-1; i++){
    if (secondLargestValue<array[i] && array[i]!=largestValue){
        secondLargestValue=array[i];
    }
}
console.log(`Second largest value: ${secondLargestValue}`);