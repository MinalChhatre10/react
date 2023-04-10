var url = "http://mylogger.com";

function log(message) {
  //send http req
  console.log(message);
}

module.exports.log = log;

//or- module.exports= log; // direct send func instead of object
