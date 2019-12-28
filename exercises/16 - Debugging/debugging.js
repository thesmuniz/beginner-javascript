const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.log(person.name);
// });

//! Console Methods
people.forEach((person, index) => {
  // console.log(person.name);
  // console.info(person.name);
  // console.error(person.name);
  // console.warn(person.name);
});

// This one is amazing
// console.table(people);

// Example of console.group used to breakdown information from each item mapped over into a  collapsable system
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('DONE!');
//   console.groupEnd(`${person.name}`);
// });

//! Callstack, Stack Trace
// This occurs in the console when you get the readout of the error. The stack will show you in order where the issues arise in your build
function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

//! Grabbing Elements
// This is where we can click the item in the elements tab and then in the console you can do $0 to get info on the selected item

//! Breakpoints
// By using debugger in your code it will stop the code at that specific point allowing you to debug line by line

people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
});

//! Scope
// Allows us to look at variable names and how they are being used

//! Network Requests
// This is the network tab, it shows us all of the files that are used to run page. Shows when it goes out and comes back

//! Break On Attribute
// Allows you to take the elements tab and add a breakpoint any time an attribute is changed. This means you will be swapped over to the JS file and shown where it is running

// Some Setup Code

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function greet(name) {
//   doesntExist();
//   return `Hello ${name}`;
// }

// function go() {
//   const name = doctorize(greet('Wes'));
//   console.log(name);
// }

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
