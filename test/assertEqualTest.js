const assertEqual = require("../assertEqual");

console.log(assertEqual(1, 1));
console.log(assertEqual(true, true));
console.log(assertEqual(false, !true));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(2, "2"));
console.log(assertEqual("LABS", "labs"));
