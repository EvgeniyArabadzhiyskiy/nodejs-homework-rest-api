const { NotFound } = require("http-errors");

const User = require("../../models/user");

const verifycation = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOneAndUpdate(
    { verificationToken },
    { verify: true, verificationToken: null },
    { new: true }
  );

  if (!user) {
    throw new NotFound("User Not found");
  }

  res.send("<h1>Verification successful</h1>");
};

module.exports = verifycation;
