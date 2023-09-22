// Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["pepperoni", "bacon", "tomatoes", "spinach"];
console.log(pizzaToppings);

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

// function greetCustomer(name) {
//   for (
//     let toppingChoice = 0;
//     toppingChoice < pizzaToppings.length - 1;
//     toppingChoice++
//   ) {
//     if (toppingChoice === pizzaToppings.length - 1) {
//       greet += toppingChoice + `and ${pizzaToppings[toppingChoice]}`;
//     } else {
//         greet += `${toppingChoice}`;
//     }
//     console.log(greet);
//   }
//   let greet = `Welcome to Pinky's Pies, ${name}! Our toppings today are: `;
//   greet = greet += `${toppingChoice}.`;
//   console.log(greet);
// }

// create a greetCustomer function
function greetCustomer(name) {
  // create  a variable to hold the greeting
  let greet = `Welcome to Pinky's Pies ${name}, our toppings are: `;
  // use a for loop to iterate through the toppings
  for (let toppingChoice of pizzaToppings) {
    // add each topping to our greeting message
    greet += `${toppingChoice}, `;
  }
  // console log the greeting
  console.log(greet);
}
// call the greetCustomer function

// greetCustomer("Tichinia");

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppingChoices) {
  // let orderRecieved = `${size}, ${crust} crust pizza with ${toppingChoices}, coming right up! `;
  // console.log(orderRecieved);
  let orderRecieved = `${size}, ${crust} crust pizza with `;
  for (let toppingChoices of pizzaToppings) {
    orderRecieved += `${toppingChoices}, `;
  }
  console.log(`${orderRecieved}... coming right up!`);
  return [size, crust, toppingChoices];
}


// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, ...toppingChoices]) {
  console.log("Order in Progress");
  let pizza = {
    size: size,
    crust: crust,
    toppingChoices: toppingChoices
  };
  return pizza;
}

// function makePizza(pizzaArray) {
//   console.log("Order in Progress");
//   return {
//     size: pizzaArray[0],
//     crust: pizzaArray[1],
//     toppings: pizzaArray[2]
//   }
// }

// makePizza("small", "deep dish", "tomatoes", "spinach");


// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObj) {
  console.log(
    `one ${pizzaObj.size}, ${pizzaObj.crust} crust pizza with ${pizzaObj.toppingChoices}, your order is ready!`)
  return pizzaObj;
}
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.

greetCustomer("Barack Obama");
servePizza(preparePizza(getPizzaOrder("large", "thick", "pepperoni", "bacon")));

greetCustomer("Michelle Obama");
let order = getPizzaOrder("small", "regular", "pepperoni");
let preparedPizza = preparePizza(order);
servePizza(preparedPizza);