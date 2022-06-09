// Module :- As our application grows bigger, we want to split it into multiple files called Modules.
// A module is a file.----One Script is one module.

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.


// 📁 modules.js
// import {modules} from './modules';
import {tables} from './array';
import {str} from './string';
import flower from './array';

for (const table of tables) {
    console.log(table);
}
const filterFlower = flower.map((num, index) => {
    if (index < 3) {
      return num;
    }
  });



console.log(`${str} ${str.length}`);
