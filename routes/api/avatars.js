const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const { ctrlWrapper } = require("../../middlewares");

const FILE_DIR = path.join(__dirname, "../../tmp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FILE_DIR);
  },
  filename: function (req, file, cb) {
    const [name, extension] = file.originalname.split(".");
    cb(null, `${name}_${nanoid(4)}.${extension}`);
  },
});

const upload = multer({ storage: storage });

const avatar = async (req, res, next) => {
  const { path: oldPath, filename } = req.file;

  const newPath = path.join(avatarDir, filename);

  await fs.rename(oldPath, newPath);

  // await fs.unlink(oldPath);

  // req.body will hold the text fields, if there were any
  res.json({ status: "success" });
};

router.post("/", upload.single("avatar"), ctrlWrapper(avatar));

module.exports = router;
