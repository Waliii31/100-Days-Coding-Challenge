// *Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
function squareNumber(number) {
    return number * number; // Returns a square of a number
}
// *Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Hadi", "Mahad", "Momin"];
for (var x in names) {
    console.log(names[x]);
}
// *Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
for (var x in names) {
    console.log("Good morning: " + names[x]);
}
