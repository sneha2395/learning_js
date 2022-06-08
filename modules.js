// what is an Module?

/**
 * 
 * we have a file modules.js exporting a function:
 * 
 * 
 */

 export function modules (user){
     alert(`Hello, ${user}!`);
 }
 
// module.js
export default class modules { // just add "default"
    constructor(name) {
      this.name = name;
    }
  }


