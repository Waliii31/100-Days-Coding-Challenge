let dinnerInvite : string[] = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"]

// **Question 16:** More Guests: You've found a bigger dinner table, so there's room for more guests.

console.log("Great news! I found a bigger dinner table!");

// Adding more guests
dinnerInvite.unshift("Hadi");
dinnerInvite.splice(dinnerInvite.length / 2, 0, "Mahad");
dinnerInvite.push("Momin");

dinnerInvite.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// **Question 17:** Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

while(dinnerInvite.length != 2){
    console.log("Sorry " + dinnerInvite.pop() + " you are not invited now")
}

// **Question 18:** Seeing the World: Think of at least five places you’d like to visit.

let places : string[] = ["Germany", "Newzeland", "London", "Holland", "America"]

console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);