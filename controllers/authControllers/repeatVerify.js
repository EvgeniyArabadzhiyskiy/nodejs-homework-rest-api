const { BadRequest } = require("http-errors");

const User = require("../../models/user");
const sendVerification = require("./sendVerification");

const repeatVerify = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new Error(`Missing required field email`);
  }

  const { verificationToken } = await User.findOne({ email });

  if (!verificationToken) {
    throw new BadRequest("Verification has already been passed");
  }

  await sendVerification(email, verificationToken);

  res.json({ message: "Verification email sent" });
};

module.exports = repeatVerify;
