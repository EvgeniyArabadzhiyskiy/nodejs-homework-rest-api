const validation = require("./validation");
const ctrlWrapper = require("./controllerWrepper");
const authMiddleware = require("./authMiddleware");

module.exports = {
  validation,
  ctrlWrapper,
  authMiddleware,
};
