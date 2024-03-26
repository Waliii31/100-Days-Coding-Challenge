// *Question 1:* Install Node.js, TypeScript and VS Code on your computer/Laptop.
// done

// *Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?"

let personName : string = "Asharib";
let message : string = `Hello ${personName}, would you like to learn some TypeScript today?`
console.log(message)

// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log("Name in upper case is: " + personName.toUpperCase())
console.log("Name in lower case is: " + personName.toLowerCase())
console.log("Name in title case is: " + personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase)
