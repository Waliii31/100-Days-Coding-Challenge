var dinnerInvite = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"];
// **Question 16:** More Guests: You've found a bigger dinner table, so there's room for more guests.
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
dinnerInvite.unshift("Hadi");
dinnerInvite.splice(dinnerInvite.length / 2, 0, "Mahad");
dinnerInvite.push("Momin");
dinnerInvite.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// **Question 17:** Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
while (dinnerInvite.length != 2) {
    console.log("Sorry " + dinnerInvite.pop() + " you are not invited now");
}
console.log(dinnerInvite);
// **Question 18:** Seeing the World: Think of at least five places you’d like to visit.
