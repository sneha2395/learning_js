const arr = [1, 4, 7, 8, 4, 9, 7, 3, 5, 8, 1, 26, 99, 26, 24, 18, 17, 19, 23];
let sum = 0;

//for loop
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum);