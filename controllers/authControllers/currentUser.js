const User = require("../../models/user");

const currentUser = async (req, res) => {
  const { _id } = req.user;
  const { name, email } = await User.findById(_id);

  res.json({ status: "success", user: { name, email } });
};

module.exports = currentUser;
