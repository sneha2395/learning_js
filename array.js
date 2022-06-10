
const tables = ['two seater', 'three seater', 'four seater', 'six seater', 'Eight seater'];
for (const table of tables) {
    // console.log(table);
}

// export {tables};

let flowers = ['rose', 'jasmine', 'lotus', 'marigold']

module.exports = {
    tables,
    flowers

}


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

// console.log(map1);

// Array.length
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

// console.log(clothing.length);

const listB = new Array(6);

// console.log(listB.length);

// Shortening an array

const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

// console.log(numbers);
console.log(numbers.length);


