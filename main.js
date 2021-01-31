// event-listeners a function that fires when an event occurs on the DOM-- a click, a mouse entering an area, an image download finishing, etc

// event-listeners list do a search! mdn and w3 schools

// const div = document.querySelector('#main-btn'); // selecting the element from html we want to target

// div.addEventListener('click', () => { // target the variable from above and add an event listener
//   console.log('button is clicked'); // first arg is what event it is looking for and the second argument is the function that makes the next thing happen
// });

// this is where cb come in
// const button = document.getElementById('main-btn'); // targeting the button from html

// // we know how to make a function and we know how to use a function using a callback and addEventListener is just a function
// // you can add an event listener to anything you target on the dom

// const whatIsTheIds = (e) => { // the argument being passed here is e or event
//   return `The element ID is ${e.target.id}!`; 
// }

// button.addEventListener('click', whatIsTheId);

const button = document.querySelector('#main-btn'); // targeting this element on the DOM
const container = document.querySelector('#container'); 
// button.addEventListener('click', (e) => { // adding an event listener to this button // passing an e/event 
//   console.log('You clicked me!'); // nothing happens without targeting second element of other-btn 
//   console.log(e); // when you add e it logs You clicked me! and actual event (detailed list comes down in dev tools)
// }) // hard code

// button.addEventListener('click', (e) => { // adding an event listener to this button // passing an e/event 
//   console.log(`You clicked me ${e.target.id}`); // nothing happens without targeting second element of other-btn // interpolate ${}
//   console.log(e.altKey); // when you add e it logs You clicked me! and actual event (detailed list comes down in dev tools of objects we can access on the event)
// }) // e.target.id === element of the id we created // hard code

// what is the issue with using this function inside the addEventListener is it is not reusable bc it only targets one button
// cb would target more than one

const whatIsTheId = (e) => { // passing e 
  console.log(`You clicked ${e.target.id}!`); // 
}

if (e.target.id === 'main-btn') { // put all selectors at top
  container.innerHTML = 'You clicked the main-btn'; // puts this inside the div #container // will replace existing text or create text
} else {
  container.innerHTML = 'You clicked the other-btn'; // puts this inside the div #container else would make all other buttons log this
}

button.addEventListener('click', whatIsTheId); // one resuable cb function that can be reused

const button2 = document.querySelector('#other-btn'); // targets 2nd button

button2.addEventListener('click', whatIsTheId); // uses just first and last because whatIsTheId function is reusable 

// can add an event listener on anything you have on the dom
// you can hard code as a arg or you can use a cb

// target events click is an event and there is a list of them that you can pass as a function

// adding logic based on what they clicked
