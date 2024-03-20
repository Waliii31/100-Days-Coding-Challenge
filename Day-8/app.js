// **Question 22:** Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
// **Question 23:** Conditional Tests: Write a series of conditional tests. Predict the results of each test.
// **Explain & TIP:** Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
// Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 5
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 6
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
// Test 7
console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// **Question 24:** More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple");
// console.log("apple" == "Apple"); 
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5);
console.log(2 < 1);
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false);
console.log(true || false);
// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));
