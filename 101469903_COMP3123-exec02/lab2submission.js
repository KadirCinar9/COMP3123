// function gretter (myArray, counter) {
//     var greetText = 'Hello';

//     for (var index = 0; index<myArray.length; index ++){
//         console.log(greetText + myArray[index]);
//     } 
// }
// gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan', 3]); 

// //!  EXERCISE 1
// const greeter = (myArray) => {
//     const greetText = 'Hello';

//     for (const name of myArray) {
//         console.log(`${greetText} ${name}`);
//     }
// };

// greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan', 3]);

// //! EXERCISE 2 
// function capitalize(str) {
//     let [first, ...rest] = str;
//     return first.toUpperCase() + rest.join('').toLowerCase();
// }

// console.log(capitalize('fooBar')); 
// console.log(capitalize('nodeJs')); 

// //! EXERCISE 3
// const colors = ['red', 'green', 'blue'];

// function capitalize(str) {
//     let [first, ...rest] = str;
//     return first.toUpperCase() + rest.join('').toLowerCase();
// }

// const capitalizedColors = colors.map(color => capitalize(color));

// console.log(capitalizedColors); 

//! EXERCISE 4

// var values = [1, 60, 34, 30, 20, 5];

// function filterLessThan20(arr) {
//   return arr.filter(value => value < 20);
// }

// console.log(filterLessThan20(values));

// //! EXERCISE 5
// var array = [1, 2, 3, 4];

// function calculateSum(arr) {
//   return arr.reduce((acc, value) => acc + value, 0);
// }

// function calculateProduct(arr) {
//   return arr.reduce((acc, value) => acc * value, 1);
// }

// console.log(calculateSum(array));     
// console.log(calculateProduct(array)); 

//! EXERCISE 6

class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      
      super(model, year);
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());  
  
 
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());    
  
