/**
 * Array filter method is used to get filtered elements from an array
 */

// Basic
const arr = [1, 2, 3, 4, 5];

const filteredArr = arr.filter((el) => {
    return el > 4
});
console.log(filteredArr);
/**
 * What is a call back function 
 */
 function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }

// Advanced 

// Find if any table is available at 19:30
const availableTimings = [
    
    {
        time: "10:00",
        available: true
    },
    {
        time: "19:30",
        available: true
    },
    {
        time: "20:30",
        available: false
    },
    {
        time: "21:30",
        available: true
    }
];

const tableAvailabilityData = [
    {
        time: "10:00",
        tableSize: 6,
        seatsAvailable: 4,
        tableName: "Big Table"
    },
    {
        time: "11:00",
        tableSize: 6,
        seatsAvailable: 2,
        tableName: "Big Table"
    },

];


// find out seats available at 10:00am 

