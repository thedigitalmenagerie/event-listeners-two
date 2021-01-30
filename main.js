console.log('CONNECTED');

// curly braces and key value pairs, can be empty

const firstObj = {};

const user = {
  username: 'biz.markie', // seperated by comma
  password: 'abd123',
  lovesJavaScript: true,
  favoriteNumber: 42, // final trailing comma required
}

// accessing values inside an object
//dot notation-- sometimes doesn't work
console.log(user.lovesJavascript);
console.log(user.username);
// bracket notation
console.log(user['username']); // must be a string or a number
// both ways
console.log(user['favoriteNumber']); // = 42
console.log(user.favoriteNumber); // also 42

// assigning values after object is declared/ assigned // reassignment

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; // dot notation
// newUser['password'] = 'abcd1234'; // bracket notation
// newUser[1] = 5; // would come first in console log number then alphabetical order
// console.log(newUser); // logs the new object with the additional key value pairs

// can manipulate just like arrays with pull pop push etc.

// methods-- functions as value for a key

const newObj = { // anonymous function-- save methods on objects (functions) w/ kvp in order to call function, assign function as value, call function
  username: 'Honey-Rae',
  sayHello: function () { // function keyword-- assigning function to a key inside of an object 
    console.log(`${this.username} says Hello`) ;// how to access method on this object-- dot or bracket like in other key value pair w/ parentheses bc it is a function
  } // temperate literal must be in back ticks
}
// newObject.username = 'Aja'; // logs Aja says hello because this is reassigning the value inside of the object (which can be updated because they are muteable)
// newObj.sayHello(); // invoking the function with values inside of the object

// iterate over each key value pair in object (see what is inside of the object) uses for in loop

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavaScript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) { // gives all keys in object
  console.log(key);
}

for (let key in userTwo) { 
  console.log(userTwo[key]); // gives all values in object using bracket notation-- dot notation does not work in accessing values in an object method that is for in loop
} // dot notation is go to and bracket is second choice if that doesn't work
