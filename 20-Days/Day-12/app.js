// *Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizzas = ["pepperoni", "margherita", "fajita"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
// *Question 35: Animals: Highlight animals with a common trait.
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// *Question 36: T-Shirt: Create a function for customizing t-shirts.
function tShirts(message, size) {
    console.log("The t-shirts size ".concat(size, " was prited with the message \"").concat(message, "\"."));
}
tShirts("I LOVE TYPESCRIPT", 48);
