/* When you pass an object as a parameter, if the function changes the object's properties,
 that change is visible outside the function*/

 function myFunc(theObject) {
    theObject.make = 'Motorola';
  }
  
  var myphone = {make: 'Redmi', model: 'y2' , year: 2016};
  var x, y;
  
  x = myphone.make; // x gets the value "redmi"
  
  myFunc(myphone);
  y = myphone.make; //y gets the value "Toyota"
//    console.log(y)


const student ={
  name: 'sneha',
  nam
}

