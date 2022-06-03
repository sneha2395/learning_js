
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


// console.log(fn_name_log(4, 5, arg));

const sum2 = (a, b) => {
    return "Sum is"+(a+b);

};
console.log(sum2(3, 4))
 

