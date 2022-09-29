const User = require("../../models/user");

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null }, { new: true });
  res.json({ status: "success" });
};

module.exports = logout;
