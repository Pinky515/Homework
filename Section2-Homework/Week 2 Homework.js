//Inside your JS file, create two variables: pizzaPlace and numberOfToppings
//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = `Pinky's Pies`;
let numberOfToppings = 25;

//Print the variables and their types.
console.log(pizzaPlace + ` - ` + typeof pizzaPlace);
console.log( numberOfToppings + ` - ` + typeof numberOfToppings);

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(
  pizzaPlace +
    ` is the new pizza joint in town. I hear they have ` +
    numberOfToppings +
    ` toppings to choose from. Let's go check them out!`
);

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

numberOfToppings = 1;

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

console.log(`Bonus - loops`);

//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

//let currentToppings = 0;
//while (currentToppings < numberOfToppings && currentToppings % 2 == 0) {
//  console.log(currentToppings);
//  currentToppings++;
//}

//let customerChoice = currentToppings++
//console.log(customerChoice)

for (
  let currentToppings = 0, customerChoice = currentToppings + 1;
  currentToppings <= numberOfToppings && customerChoice % 2 == 0;
  currentToppings + 1
) {
  console.log(customerChoice + `, Nice choice!`);
}

//console.log(customerChoice + `, Nice choice!`);
