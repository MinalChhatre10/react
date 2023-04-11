const EventEmiter = require("events"); // EventEmiter is a class hence first letter is uppercase
const emmiter = new EventEmiter(); // created instance of EventEmiter

//register listener
emmiter.addListener("messageLogged", function (eventArg) {
  console.log("Listener called", eventArg);
});
//arguments - name of the event, function

//raise an event
emmiter.emit("messageLogged", { id: 1, url: "http//.." }); //making noise or produce something/ signalling that event has happend
