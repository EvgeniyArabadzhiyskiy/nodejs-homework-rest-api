const path = require("path");
const multer = require("multer");
const { nanoid } = require("nanoid");

const FILE_DIR = path.join(__dirname, "../tmp");

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

module.exports = upload;
