
// dom -- document object model // global object // what makes everything show in the browser // document that makes the model for the driver

// something happens === manipulating the dom

// callbacks-- calling a function based on a user action that cues the start

// event-listeners-- events that happen on the browser that the dom is listening for

// bootstrap-- css library with built in html and css for quicker development

// method getElementById to add functionality in JS

// const div = document.getElementById('divId'); // selector that passes the id of the element (id) we want to target from html as a string

// document selectors

// const button = document.getElementById('main-btn');

// console.log(button);

// document.querySelector 

// const div = document.querySelector('#divId'); // can target classes or id and is the new way . for class instead of # 
// will only get the first one and should be that way because you can only have specific ids
// should not be using classes in js because ids are for js and classes are for css

// const button = document.querySelector('#main-btn');

// console.log(button);

// callbacks-- ability to pass a function as an argument to another function 
//convention is to use cb argument variable as you callback

// function saysHelloToUser(user) { // passing an argument and use argument inside the code block (user is arg)
//   return `Hello ${user}!`;
// }

// function saysGoodbyeToUser(user) { // user === taco and is whatever we use to call taco
//   return `Goodbye ${user}!`; // only difference is the return
// }

// // call back

// function createGreeting (user, cb) { // user == taco/arg/placeholder 2nd arg is cb === taco/placeholder
//   return cb(user); // a function can be passed as an argument in another function and that is a CB
// }

// // doesn't have to be invoked // it is being passed not invoking which would be inside of the code block

// createGreeting('Dan', saysHelloToUser); // 'Hello Dan!'
// createGreeting('Dan', saysGoodbyeToUser); // 'Goodbye Dan!'

// create two functions that accept a string as an arg and returns a sentence using the argument

// function one(string) {
//   return `This is a ${string}.`;
// }

// function two(string) {
//   return `This is a second ${string}.`;
// }

// // create a third function that accepts the two arguments (a string and a function) and returns the passed function with the string as the argument
// // a function that takes a funtion in as an argument
// function third(string, cb) {
//   return cb(string);
// }

// // console.log the third function twice using the first two functions as arguments
// //console logging the return statement of each callback

// third('Dan', first); // format is accepting two arguments one as a function
// third('Dan', second); // allows us to make code reusable by having one cb use multiple functions

// // callbacks are used in DOM manipulation and events/ event-listeneres which are listening for functions and cb

