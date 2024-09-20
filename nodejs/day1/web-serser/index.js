const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => console.log("Server running on port: " + PORT));

// class Emiter extends EventEmitter {}

// const myEmitter = new Emiter();

// myEmitter.on("log", (msg) => logEvents(msg));

// myEmitter.emit("log", "Hello Node.js");
