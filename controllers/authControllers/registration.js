const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");

const User = require("../../models/user");

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

  const msg = {
    to: email,
    from: "djon4292@gmail.com",
    subject: "VERIFYCATION",
    text: `http://localhost:8080/api/auth/verify/${verificationToken}`,
    html: `http://localhost:8080/api/auth/verify/${verificationToken}`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }

  await user.save();

  res.json({ status: "success" });
};

module.exports = registration;
