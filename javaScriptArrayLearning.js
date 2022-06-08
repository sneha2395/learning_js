const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
// console.log(shopping);;
{/* <p>Each item is a string.
    in array we can 
</p> */}
const random = ['tree', 795, [0, 1, 2]];
random[2][2];

// Accessing every item
const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
//   console.log(bird);
}

// Removing items
// To remove the last  from the array, use pop().

const cities = ['Manchester', 'Liverpool'];
cities.pop();
// console.log(cities);

// To remove the first item from an array, use shift():
const city = ['Delhi', 'Mumbai'];
city.shift();
// console.log(city);

// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// const index = cities.indexOf('Liverpool');
// if (index !== -1) {
//   cities.splice(index, 1);
// }
// console.log(cities);
const dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString();
// console.log(dogNames)

let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  } 





