const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const verifycation = require("./verifycation");
const repeatVerify = require("./repeatVerify");

module.exports = {
  registration,
  login,
  logout,
  currentUser,
  verifycation,
  repeatVerify,
};
