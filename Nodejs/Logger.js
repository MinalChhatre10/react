const EventEmiter = require("events");

var url = "http://mylogger.com";
class Logger extends EventEmiter {
  log(message) {
    //send http req
    console.log(message);
    //raise an event
    this.emit("messageLogged", { id: 1, url: "http//.." }); //making noise or produce something/ signalling that event has happend
  }
}

module.exports.log = Logger;

//or- module.exports= log; // direct send func instead of object
