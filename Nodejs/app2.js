// const { clear } = require("console");
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

const os = require("os");

var totalmemmory = os.totalmem();
var freememmory = os.freemem();
console.log("Total memory: " + totalmemmory);

//Template string - ES6/ES2015 - ECMAScript 6
console.log(`Total memory: ${totalmemmory}`);
console.log(`Free memory: ${freememmory}`);
