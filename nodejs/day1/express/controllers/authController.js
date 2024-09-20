const userDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bycypt = require("bcrypt");

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
    res.json({ Success: `User ${user} is logged in` });
  } else {
    res.status(401).json({ message: "Invalid password" });
  }
};

module.exports = { handleLogin };
