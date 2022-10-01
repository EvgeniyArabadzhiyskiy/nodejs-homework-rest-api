const validation = require("./validation");
const ctrlWrapper = require("./controllerWrepper");
const authMiddleware = require("./authMiddleware");
const upload = require("./uploadMiddleWare");

module.exports = {
  validation,
  ctrlWrapper,
  authMiddleware,
  upload,
};
