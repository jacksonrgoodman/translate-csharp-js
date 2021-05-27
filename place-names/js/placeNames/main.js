// Put your code here
const names = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

for (let name of names) {
    console.log(`You can visit ${name}.`);
}

let allNames = names.filter(name => name.includes("The"))

for (let name of allNames) {
    console.log(`There's also ${name}.`);
}