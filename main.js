// md is a non-structured doc mark down
// view md on tools 
// need an arrary of objects to loop over and print to the DOM

// form tells the array in this pies ingredients etc.

// beginning of array of objects 

// key : value

// values (data types) are all strings except for bake temp

const pies = [
  {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl:
      'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
    instructor: 'Doc',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 400,
    drinkPairing: 'wine',
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'Doc',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
    bakeTemp: 42,
    drinkPairing: 'egg nog',
    imageUrl:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'Aja',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
    bakeTemp: 1234,
    drinkPairing: 'Apple Cider',
    imageUrl:
      'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'Aja',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    ingredients: 'Pecans, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Milk',
    imageUrl:
      'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'Trinity',
    iceCream: 'Vanilla',
  },
  {
    name: 'Keylime Pie',
    ingredients: 'lemons, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Water',
    imageUrl:
      'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
    instructor: 'Trinity',
    iceCream: 'none',
  },
];
// end of array of objects

// print to DOM function // pie builder

// const pies = [
  
// ];

// what do we need when we are targeting on the DOM-- ID

const printToDom = (divId, textToPrint) => { // what id i am targeting and what i need to print/ put on the dom
  const selectedDiv = document.querySelector(divId) // what would we pass? 1st arg to create reusable function when we call print to dom we will want to select specific id from html
  selectedDiv.innerHTML == textToPrint; // we want to manipulate the selected div and make it equal to what we want to print to the dom
} // will use this in single page applications to print to DOM

// creating actual pie builder which will go through the array of objects and print them to the dom 

// pie builder will take in pies array to loop through and print whatever is in there

const pieBuilder = (taco) => {
  let domString = ''; // what is domString

  // for (let i = 0; i < taco.length; i++) { // card element below inside card loop that adds this html element to the dom string
  //   // the value of i the first time it loops through is 0 index i =0 
  //   // taco (whichever object index we are at in the array) [i].key all contained in the card
  //   // in order to print to the dom we need to call pieBuilder
  //   // using html to add and reassign domString in a stylized way and interpolate several elements in each of the objects in the array
  //   // array use for loop even when objects are contained as they are elements in the array and the objects contain key value pair
  //   domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
  //   <div class="img-container" style="background-image: url('${taco[i].imageUrl}');"></div>
  //   <div class="card-body">
  //     <p class="card-text">${taco[i].name}</p>
  //     <p class="card-text">${taco[i].ingredients}</p>
  //     <p class="card-text">${taco[i].bakeTemp}</p>
  //     <p class="card-text">${taco[i].drinkPairing}</p>
  //     <p class="card-text">${taco[i].iceCream}</p>
  //     <button type="button" class="btn btn-danger" id="${i}">Delete</button>
  //   </div>
  // </div>`;
  // }
  // replacing the code above with a for each loop
  taco.forEach((item, i) => {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="img-container" style="background-image: url('${item.imageUrl}');"></div>
    <div class="card-body">
      <p class="card-text">${item.name}</p>
      <p class="card-text">${item.ingredients}</p>
      <p class="card-text">${item.bakeTemp}</p>
      <p class="card-text">${item.drinkPairing}</p>
      <p class="card-text">${item.iceCream}</p>
      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
    </div>
  </div>`;
  })

  }

  printToDom('#pies', domString);
}

const handleButtonClick = (e) => { // event is on the button clicked and is best practice could be literally anything event listener gives you access to the event
  const buttonId = e.target.id; // creating a variable to use it to change background color

  if (buttonId === 'Trinity') {
    document.querySelector('body').style.backgroundColor = '#000';
  } else if (buttonId === 'Doc') {
    document.querySelector('body').style.backgroundColor = '#FFF';
  } else if (button == 'Aja') {
    document.querySelector('body').style.backgroundColor = '#808080';
  } else if {
    document.querySelector('body').style.backgroundColor = 'rgb(175, 196, 175)';
  }
  // update the pies based on button clicked

  const selectedPies = [];
  for (let i = 0; i < pies.length; i++) {
    if(pies[i].instructor === buttonId) { // trying to pull out all the pies related to that button id and push the object up to new array 
      selectedPies.push(pies[i]); // whole object not part but need to add logic for the all button because that is not one of the instructors
    }
  }
  if(buttonId === 'All') { // if all it iterates through pies 
    pieBuilder(pies);
  } else {
    pieBuilder(selectedPies); // if instructor button is selected it filters through selected pies
  }

}

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const ingredients = document.querySelector('#ingredients').value;
  const bakeTemp = document.querySelector('#bakeTemp').value;
  const drinkPairing = document.querySelector('#drinkPairing').value;
  const imageUrl = document.querySelector('#imageUrl').value;
  const instructor = document.querySelector('#instructor').value;
  const iceCream = document.querySelector('#iceCream').value;

  const obj = { // shorthand object notation
    name, 
    bakeTemp,
    ingredients,
    drinkPairing,
    imageUrl,
    instructor,
    iceCream,
  }
  pies.push(obj); // updated pies
  pieBuilder(pies); // adds updated pies array to the dom

  document.querySelector('form').reset(); // method that resets form and empties all of the values in the object and makes it ready for a new entry

}

const deletePie = (e) => {
  const targetType = e.targt.type;
    const targetId = e.target.id;

    if (targetType === 'button') { // deleteing the pie from the array but not from the dom
      pies.splice(targetId, 1);
    } 
    pieBuilder(pies); // deleting from the dom

  }

const buttonEvents = () => {
  document.querySelector('#All').addEventListener('click', handleButtonClick); //  instead of const allBtn and adding event listener seperate
  document.querySelector('#Doc').addEventListener('click', handleButtonClick); // ""
  document.querySelector('#Aja').addEventListener('click', handleButtonClick); // ""
  document.querySelector('#Trinity').addEventListener('click', handleButtonClick); // ""
  // submit default behavior is for the page to reload and to prevent the default behavior is
  document.querySelector('#pies').addEventListener('click', deletePie )
    
  // passing a function through event listener is a callback function
  // chaining is the ability to do something and add another method on the end as seen above
  // allBtn.addEventListener('click', handleButtonClick); // this gets chained to the end of the query selector and the const allBtn and allBtn before event listener etc gets removed 
  document.querySelector('form').addEventListener('submit', getFormInfo); 
}
// we usually wrap calling the function in a function called init (short for initialize)

const init = () => { // we want to call pieBuilder and pass it the argument of pies
  buttonEvents();
  pieBuilder(pies); // above we have to print to dom because that is where we have the query selector 
}

init();

// .forEach

// const array = [1, 2, 3, 4, 5, 6];

// [1, 2, 3, 4, 5, 6].forEach((item)) => {
//   console.log(item, i);
// }

// // in a for loop it would look like this

// for (let i = 0; i < array.length; i ++) {
//   console.log(array[i]);
// }
