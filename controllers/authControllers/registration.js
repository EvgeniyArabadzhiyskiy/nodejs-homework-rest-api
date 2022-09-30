const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");

const User = require("../../models/user");
const sendVerification = require("./sendVerification");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const registration = async (req, res) => {
  const { email, password } = req.body;
  const verificationToken = nanoid();

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    ...req.body,
    password: hashPassword,
    verificationToken,
  };

  const user = new User(newUser);

  await sendVerification(email, verificationToken);

  await user.save();

  res.json({ status: "success" });
};

module.exports = registration;
