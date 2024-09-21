const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.header("authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log(authHeader);
  const token = authHeader.split("")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" }); //invalid token
    }
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
