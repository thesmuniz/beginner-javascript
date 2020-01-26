// const age = 100;

// function go() {
//   const hair = 'blonde';
// }

// go();

// console.log(age);
// console.log(hair);

// const dog = 'snickers';

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog();
// }

// go();

//! Function Scoping (Function inside of a function)
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

yell();
