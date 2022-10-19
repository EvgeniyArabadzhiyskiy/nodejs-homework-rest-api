const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 4000 } = process.env;

const appListenAsync = (port) =>               // === Промисифицированая  app.listen ==
  new Promise((resolve, reject) => {
    app.listen(port, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });

const mongooseConnect = async () => {
  try {
    mongoose.connect(DB_HOST);
    console.log("Database connection successful");
    await appListenAsync(PORT);
    console.log(`Server run on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
mongooseConnect();

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     console.log("Database connection successful");
//     app.listen(PORT);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
