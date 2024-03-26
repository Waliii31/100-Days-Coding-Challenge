// *Question 31: No Users: Ensure your user list isn’t empty.

let userNames: string[] = [];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    for(let x in userNames){
        console.log("Hi user " + userNames[x])
    }
}

// *Question 32: Checking userNames: Ensure uniqueness in userNames.

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

for(let x in current_users){
    for(let i in new_users){
        if(new_users[i] === current_users[x]){
            console.log(new_users[i] + " is repeated in both arrays.")
        }     
    }
}

// *Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let x in numbers){
    let suffix = "th";
    if (numbers[x] === 1) {
        suffix = "st";
    } else if (numbers[x] === 2) {
        suffix = "nd";
    } else if (numbers[x] === 3) {
        suffix = "rd";
    }
    console.log(`${numbers[x]} ${suffix}`);
};