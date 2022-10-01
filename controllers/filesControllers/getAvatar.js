const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const getAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: oldPath, filename } = req.file;

  const newPath = path.join(avatarDir, filename);

  const imagePath = path.join("avatars", filename);

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    await fs.unlink(oldPath);
  }

  await User.findByIdAndUpdate(_id, { avatarURL: imagePath });

  res.json({ status: "success", avatarURL: imagePath });
};

module.exports = getAvatar;
