// *Question 31: No Users: Ensure your user list isn’t empty.
var userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var x in userNames) {
        console.log("Hi user " + userNames[x]);
    }
}
// *Question 32: Checking userNames: Ensure uniqueness in userNames.
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
for (var x in current_users) {
    for (var i in new_users) {
        if (new_users[i] === current_users[x]) {
            console.log(new_users[i] + " is repeated in both arrays.");
        }
    }
}
// *Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var x in numbers) {
    var suffix = "th";
    if (numbers[x] === 1) {
        suffix = "st";
    }
    else if (numbers[x] === 2) {
        suffix = "nd";
    }
    else if (numbers[x] === 3) {
        suffix = "rd";
    }
    console.log("".concat(numbers[x], " ").concat(suffix));
}
;
