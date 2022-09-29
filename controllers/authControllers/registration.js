const bcrypt = require("bcrypt");
const User = require("../../models/user");

const registration = async (req, res) => {
  const { password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    ...req.body,
    password: hashPassword,
  };

  const user = new User(newUser);
  await user.save();

  res.json({ status: "success" });
};

module.exports = registration;
