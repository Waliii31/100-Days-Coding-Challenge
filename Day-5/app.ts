// *Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation: string[] = ["Tesla Model S", "BMW M5", "Honda CBR1000RR", "Yamaha YZF-R1"];
for(let x in favoriteTransportation){
    console.log(`I would like to own a ${favoriteTransportation[x]}.`);
}

// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let dinnerInvite : string[] = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"]
for(let x in dinnerInvite){
    console.log(dinnerInvite[x] + ", you are invited to our dinner")
}

// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

dinnerInvite.pop()
dinnerInvite.push("Haseeb")
for(let x in dinnerInvite){
    console.log(dinnerInvite[x] + ", you are invited to our dinner")
}






