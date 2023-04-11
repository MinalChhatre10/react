const EventEmiter = require("events"); // EventEmiter is a class hence first letter is uppercase

const Logger = require("./Logger");
const log1 = new Logger();

//register listener
log1.addListener("messageLogged", function (eventArg) {
  console.log("Listener called", eventArg);
});
//arguments - name of the event, function

log1.log("Message");
