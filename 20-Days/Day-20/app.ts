// *Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

let scores : number[] = [6, 2, 8, 5, 6, 9, 8]
const average = (numberArray : number[])=>{
    let addNum : number = 0;
    let count : number = 0
    for(let x in numberArray){
        addNum = addNum + numberArray[x]
        count++
    }
    let avg : number = addNum/count;

    console.log(avg)
}

average(scores)

// *Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

const createAdder = (numToAdd: number) => {
    return (num: number) => num + numToAdd;
};

const adders = createAdder(5); 
console.log(adders(10)); 
console.log(adders(20)); 


// *Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = (function() {
    let name = "John";
    let age = 30;
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();