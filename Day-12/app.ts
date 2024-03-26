// *Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzas: string[] = ["pepperoni", "margherita", "fajita"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// *Question 35: Animals: Highlight animals with a common trait.

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

// *Question 36: T-Shirt: Create a function for customizing t-shirts.


function tShirts(message: string, size: number){
    console.log(`The t-shirts size ${size} was prited with the message "${message}".`)
}

tShirts("I LOVE TYPESCRIPT", 48)