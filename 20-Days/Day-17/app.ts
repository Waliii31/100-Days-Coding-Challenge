// *Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function logHobbies(...hobbies : string[]){
    for(let x in hobbies){
        console.log("I love " + hobbies[x])
    }
}

logHobbies("Swimming", "Coding", "Cycling", "Painting")

// *Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
console.log(myIdealDay);

// *Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

const areaOfRectangle = (height : number, width : number)=>{
    console.log(height * width)
    return height * width
}

areaOfRectangle(12, 30)