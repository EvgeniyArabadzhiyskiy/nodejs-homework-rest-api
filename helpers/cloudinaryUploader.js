const cloudinary = require("cloudinary").v2;

const { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const cloudinaryUploader = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
    folder: "avatars",
    transformation: [
      { width: 250, height: 250, gravity: "faces", crop: "thumb" },
      { radius: "max" },
    ],
  };

  try {
    const { public_id: avatarCloudId, url: avatarURL } =
      await cloudinary.uploader.upload(imagePath, options);

    return { avatarCloudId, avatarURL };
  } catch (error) {
    console.error(error);
  }
};

module.exports = cloudinaryUploader;
