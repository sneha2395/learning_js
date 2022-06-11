// Module :- As our application grows bigger, we want to split it into multiple files called Modules.
// A module is a file.----One Script is one module.

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.


// 📁 modules.js
// import {modules} from './modules';
// import {tables} from './array';
// import {str} from './string';
// import flower from './array';
const {flower, tables, flowers} = require('./array')

const flower_spelling = flowers.map((flower) => {
  flower = flower.split("");
  console.log(flower);
  
});



const str = 'Every Flower has different beauty';
const words = str.split(' ');
// console.log(words[3]);
// for (const table of tables) {
//     console.log(table);
// }
// const filterFlower = flower.map(( index) => {
//     if (index < 3) {
//       return num;
//     }
//   });

// console.log(`${str} ${str.length}`);
// Array.length
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
// console.log(clothing.length);
const listB = new Array(6);
// console.log(listB.length);


// console.log(person.firstName + " is " + person.age + " years old.";)

