const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.authenticateUser = async (username, password) => {
  const user = await userModel.getUserByUsername(username);

  if (!user) {
    return null;
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  return isPasswordMatch ? user : null;
};
