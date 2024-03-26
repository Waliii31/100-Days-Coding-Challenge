// **Question 19:** Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
var dinnerInvite = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"];
console.log("I am inviting ".concat(dinnerInvite.length, " people to dinner."));
// **Question 20:** Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);
// **Question 21:** Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
