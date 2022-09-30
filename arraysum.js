const arr = [1, 4, 7, 8, 4, 9, 7, 3, 5, 8, 1, 26, 99, 26, 24, 18, 17, 19, 23];
let sum = 0;
let result = {};

const itemcounter=(arr, item) => {
    let counter = 0;
}

//for sum
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
 //for occurence
 for(let i = 0; i < arr.length; i++){
    if(arr[i] in result){
       result [arr[i]] = result [arr[i]]+1
    }
    else{
        result[arr[i]] = 1;
    }
 }

 arr.sort((a, b) => a - b );

console.log("sorted array", arr);