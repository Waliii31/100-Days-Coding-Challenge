// *Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
var scores = [6, 2, 8, 5, 6, 9, 8];
var average = function (numberArray) {
    var addNum = 0;
    var count = 0;
    for (var x in numberArray) {
        addNum = addNum + numberArray[x];
        count++;
    }
    var avg = addNum / count;
    console.log(avg);
};
average(scores);
// *Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
var createAdder = function (numToAdd) {
    return function (num) { return num + numToAdd; };
};
var adders = createAdder(5);
console.log(adders(10));
console.log(adders(20));
// *Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "John";
    var age = 30;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
