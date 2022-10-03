const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BadRequest } = require("http-errors");

const User = require("../../models/user");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, verify: true });

  if (!user) {
    throw new BadRequest(`User with email ${email} not found or not verification`);
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new BadRequest("Wrong Password");
  }

  const token = jwt.sign({ _id: user._id }, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    user: { name: user.name, email: user.email, token },
  });
};

module.exports = login;
