const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendVerification(email, token) {
  const msg = {
    to: email,
    from: "djon4292@gmail.com",
    subject: "VERIFYCATION",
    text: `http://localhost:8080/api/auth/verify/${token}`,
    html: `<a href="http://localhost:8080/api/auth/verify/${token}" >VERIFYCATION CODE</a>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw new Error("Error in sgMail");
  }
}

module.exports = sendVerification;
