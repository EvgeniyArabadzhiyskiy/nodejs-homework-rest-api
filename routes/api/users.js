const express = require("express");

const { filesControllers: ctrl } = require("../../controllers");
const { ctrlWrapper, upload, authMiddleware } = require("../../middlewares");

const router = express.Router();

router.patch("/avatars", authMiddleware, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
