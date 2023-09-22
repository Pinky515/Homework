// Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = [" peperoni", " bacon", " tomatoes", " spinach"];
console.log(pizzaToppings);

// Create a greetCustomer function that 
// prints a message that welcomes a guest, 
// then informs them of the available toppings by looping over pizzaToppings 
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer(name) {
  // let greet = `Welcome to Pinky's Pies, ${name}! Our toppings today are ${pizzaToppings}`;
  let greet = `Welcome to Pinky's Pies, ${name}! Our toppings today are `;
  for (let topping of pizzaToppings) {
    greet += `${topping}, `;
  }
  console.log(greet);
}
// greetCustomer("Randall");
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppingChoices) {
  let orderRecieved = `${size}, ${crust} crust pizza with ${toppingChoices} `;
  console.log(orderRecieved + ", coming right up!");
  return size, crust, toppingChoices;
}
console.log("----------------------------------------------------");
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let pizzaOrder;

function preparePizza ([size, crust, ...toppingChoices]) {
  console.log("Order in Progress");
  pizzaOrder = {
    size: "medium",
    crust: "thick",
    toppingChoices: ["spinach", "bacon", "tomatoes"]
  };
  console.log(pizzaOrder.join);
}
preparePizza(pizzaOrder);

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaOrder) {
  console.log(
    "one " +
      pizzaOrder.size +
      ", " +
      pizzaOrder.crust +
      " crust pizza with " +
      pizzaOrder.toppingChoices +
      ", your order is ready!"
  );
  return pizzaOrder;
}
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// greetCustomer("Pinky");
// getPizzaOrder(" spinach", " bacon", " tomatoes");
// preparePizza(getPizzaOrder("" spinach", " bacon", " tomatoes"));
// servePizza(preparePizza(getPizzaOrder(" spinach", " bacon", " tomatoes")));

// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
