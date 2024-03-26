// *Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNumbers = [];
for (var x in Numbers) {
    newNumbers.push(Numbers[x] * 2);
}
console.log(newNumbers);
// *Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var items = [5, "string", true, 56.9, "False", "22", "+"];
var words = [];
for (var x in items) {
    if (typeof items[x] === 'string') {
        words.push(items[x]);
    }
}
console.log(words);
// *Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [60, 24, 85, 55, 66, 94, 82];
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
average(grades);
