const Person = require("./Person");

const character = new Person("Kirito");

character.name = "Asuna";
character._name = "Matsumoto";
console.log("Name: ", character.name);
