const userDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bycypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  //check for duplicates username in the database
  const duplicate = userDb.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409); //conflict

  try {
    //hash the password
    const hashedPassword = await bycypt.hash(pwd, 10);
    // store the new user
    const newUser = { username: user, password: hashedPassword };
    userDb.setUsers([...userDb.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(userDb.users)
    );
    console.log(userDb.users);
    res.status(201).json({ Success: `New user ${user} created` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ messahe: error.message });
  }
};

module.exports = { handleNewUser };
