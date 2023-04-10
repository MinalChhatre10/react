// function Hello(name) {
//   console.log("Hello " + name);
// }
// Hello("Minal");
//console.log(window);

// var message = "";
// console.log(global.message);

// function in node - require() // not in browsers //it is local

console.log(__filename);
console.log(__dirname);

const logger = require("./Logger.js"); // if parent folder ('../Logger.js') // if subfolder ('./subfolder/Logger.js')

console.log(logger);

logger.log("message");

//logger("message"); // you can change the name
