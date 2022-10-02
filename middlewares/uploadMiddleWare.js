const path = require("path");
const multer = require("multer");

const FILE_DIR = path.join(__dirname, "../temp");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FILE_DIR);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const options = {
  storage: storage,

  limits: {
    fileSize: 2048000,
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image")) {
      cb(null, true);
    }

    cb(null, false);
  },
};

const upload = multer(options);

module.exports = upload;
