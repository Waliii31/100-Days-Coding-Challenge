// *Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var x in hobbies) {
        console.log("I love " + hobbies[x]);
    }
}
logHobbies("Swimming", "Coding", "Cycling", "Painting");
// *Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
// *Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
var areaOfRectangle = function (height, width) {
    console.log(height * width);
    return height * width;
};
areaOfRectangle(12, 30);
