// *Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

let Numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNumbers : number[] = []
for(let x in Numbers){
    newNumbers.push(Numbers[x] * 2)
}

console.log(newNumbers)

// *Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let items: any[] = [5, "string", true, 56.9, "False", "22", "+"];

let words: string[] = [];

for (let x in items) {
    if (typeof items[x] === 'string') {
        words.push(items[x]);
    }
}

console.log(words);

// *Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades : number[] = [60, 24, 85, 55, 66, 94, 82]
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

average(grades)