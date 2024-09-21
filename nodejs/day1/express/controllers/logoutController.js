const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");

const handleLogoutToken = async (req, res) => {
  //on client , also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  //is refreshTone in the db
  const foundUser = usersDb.users.find(
    (person) => person.logoutToken === logoutToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  }

  //delete refreshtoken in db
  const otherUsers = usersDb.users.filter(
    (person) => person.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDb.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDb.users, null, 2)
  );
  res.clearCookie("jwt", { httpOnly: true }); // secure: true - only serves on https
  res.sendStatus(204);
};

module.exports = { handleLogoutToken };
