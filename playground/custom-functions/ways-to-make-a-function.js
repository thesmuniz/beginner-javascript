// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

//! This is an example of anonymous function
// function (firstName) {
//   return `Dr ${firstName}`;
// }

//! Function Expression
const doctorize = function(firstName) {
  return `Dr ${firstName}`;
};

//! Arrow Functions
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

//! returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

//! IIFE (Immediately Invoked Function Expression)

(function() {
  return 'You are cool!';
})();

//! Methods!!! (Function that lives inside an object)

const wes = {
  name: 'Wes  Bos',
  // Method
  /* eslint-disable */
  sayHi: function() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  /* eslint-enable */
  // Short Hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow Function
  whisperHi: () => {
    console.log('hii wessss is a mouse');
  },
};

//! Callback Functions (Something that will happen when something is done)
//* Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking');
}

button.addEventListener('click', function() {
  console.log('Nice Job');
});

//! Timer Callback
setTimeout(() => {
  console.log('Done, time to eat');
}, 1000);
