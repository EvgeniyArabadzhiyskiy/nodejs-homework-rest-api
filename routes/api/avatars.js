const express = require("express");

const { filesControllers: ctrl } = require("../../controllers");
const { ctrlWrapper, upload, authMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/avatars", upload.single("avatar"), authMiddleware, ctrlWrapper(ctrl.getAvatar));

module.exports = router;
