
// vanilla functions
function function_name(arg1, arg2, cb) {       
    const sum = arg1+arg2;
    return cb(sum);
};

// fat arrow function

const fn_name_log = (arg) => {
    return "Sum is "+arg;
    // return `Sum is ${arg}`
};
// console.log(function_name(4, 5, fn_name_log));

// program to display the sum of natural numbers
function numberSum() {
    var  total = 0;
      for(var i = 0; i <= 100; i++){
        total += i;
      }
      return total;
  }

//   console.log(total);

// looping from i = 0 to number
// in each iteration, i is increased by 1

// for ( i = 0; i <= 100; i++) {
//     sum = sum+ i;
//     return " sum is" +sum;
// }
// }

// console.log(total_sum, sum);


function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
numSum(100);











// const sum2 = (a, b) => {
//     return "Sum is"+(a+b);
// };
// console.log(sum2(3, 4))
 

