const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const User = require("../../models/user");
const { cloudinaryUploader } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: avatarPath } = req.file;

  const { avatarCloudId, avatarURL } = await cloudinaryUploader(avatarPath);

  const { avatarCloudId: idCloud } = await User.findByIdAndUpdate(_id, {
    avatarURL,
    avatarCloudId,
  });

  cloudinary.uploader.destroy(idCloud);

  await fs.unlink(avatarPath);

  res.json({ status: "success", data: { avatarCloudId, avatarURL } });
};

module.exports = updateAvatar;

// const { _id } = req.user;
// const { path: oldPath, filename } = req.file;

// const newPath = path.join(avatarDir, filename);

// const avatarURL = path.join("avatars", filename);

// try {
//   await fs.rename(oldPath, newPath);
// } catch (error) {
//   await fs.unlink(oldPath);
//   throw new Error(error.message);
// }

// await User.findByIdAndUpdate(_id, { avatarURL });

// res.json({ status: "success", avatarURL });
