const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const User = require("../../models/user");

const registration = async (req, res) => {
  const { email, password } = req.body;

  const avatarURL = gravatar.url(email, { s: "400", r: "pg", d: "404" });
  console.log("avatarURL", avatarURL);

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    ...req.body,
    avatarURL,
    password: hashPassword,
  };

  const user = new User(newUser);
  await user.save();

  res.json({ status: "success" });
};

module.exports = registration;
