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
const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);


