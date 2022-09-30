
function test(a) {
    let result;
    if (a > 2) {
        result = 'positive';
    } else if (a === 0) {
        result = '0'
    } else {
        result = 'Not positive';
    } 
    return result;
}
console.log(test(0));
function working_hour(a) {
    let greeting;
    a > 12; {
        greeting = 'productive day';
    }
    // }else{
    //     greeting = ' not productive day';
    // }
    return greeting;
}
// console.log(working_hour(2));


function test_awitch(a) {
    let result;
    switch (a) {
        case 8:
            result = 'positive'
            break;
        case 0:
            result = 'zero'
            break;
        default:
            result = 'negative'
    }
    return result;
}
// console.log(test_awitch(8));
// console.log(test_awitch(0))
// console.log(test_awitch(-5))

function message(a) {
    const action = 'say_hello';
    switch (action) {
      case 'say_hello':
        let message = 'hello';
      
        break;
      case 'say_hi':
        let message1 = 'hi';
        console.log(message1);
        break;
      default:
       
    }
}
console.log(message);
console.log('Empty action received.');




