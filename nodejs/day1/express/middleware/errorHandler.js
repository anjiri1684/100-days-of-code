const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}, 'errLog.txt'`);
  console.error(err.message);
  res.status(500).send("Something went wrong");
};

module.exports = errorHandler;
