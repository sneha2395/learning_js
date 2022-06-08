// Module :- As our application grows bigger, we want to split it into multiple files called Modules.
// A module is a file.----One Script is one module.

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.


// 📁 modules.js
// import {modules} from './modules';
import {tables} from './array';


for (const table of tables) {
    console.log(table);
}
