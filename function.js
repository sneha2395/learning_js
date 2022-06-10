// a simple function named square
function square(number) {
    return number * number;  //statement..The statement return specifies the value returned by the function:
  }
//   The function square takes one parameter, called number. 
//

//   function.map

function numberSum(N) {
    var total = 0;
      for(var i = 0; i <= N; i++){
        total += i;
      }
      return total;
  }

//   console.log('The sum of 0 to 100 is:', total);


//   let sum=0 
// for(i=1;i<=100;i++)
// {
//   if(i%2==0)
//   {
//     sum=sum+i
//   }
// }
// console.log(sum)


var fact=1;

for(var i=1;i<=100;i++){

fact  = fact*i;

}

var sum = 0;

while (fact > 0) {

sum += fact % 10;

fact = Math.floor(fact / 10);
}
console.log(sum);