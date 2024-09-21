const userDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bycypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  const foundUser = userDb.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401);

  //evaluate password
  const match = await bycypt.compare(pwd, foundUser.password);
  if (match) {
    //create jwts
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    //saving refreshtoken with current users
    const otherUsers = userDb.users.filter(
      (person) => person.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken };
    userDb.setUsers({ ...otherUsers, currentUser });
    await fsPromises.writeFile(
      path.join(__dirname, "../model/users.json"),
      JSON.stringify(userDb.users, null, 2)
    );
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.status(401).json({ message: "Invalid password" });
  }
};

module.exports = { handleLogin };
