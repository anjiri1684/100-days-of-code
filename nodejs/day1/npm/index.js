const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmiiter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmiiter();

//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "Hello Node.js");
}, 2000);
