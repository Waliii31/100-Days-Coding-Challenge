// *Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians: string[] = ["Alice", "David", "Chris"]

function great(arrayName){
    let newMagicians : string[] = [];
    arrayName.forEach(magician =>{
        newMagicians.push(magician)
    })

    for(let x in newMagicians){
        console.log("Great " + newMagicians[x]) 
    }
}

great(magicians)

// *Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// *Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

