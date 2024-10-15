// const findNum=(arr, target)=>{
//     arr=arr.sort();
//     return search(arr, target,0,arr.length-1)
// }

// const search=(arr, target, start, end)=>{
//     if (start>end) return-1;
//     let mid=Math.floor((start+end)/2);
//     if (target==arr[mid]){
//         return mid;
//     }
//     else if (target>arr[mid]){
//         return search(arr, target, mid+1, end);
//     }
//     else{
//         return search(arr, target, start, mid-1);
//     }
// }

const sort=(arr)=>{
    let swapped;
    do {
        swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }
    while(swapped);
}

let arr=[45,3,2,-2,-5];
sort(arr);
console.log(arr);