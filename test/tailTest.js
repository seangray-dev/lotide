const tail = require("../tail");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));
