const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
    default: null,
  },
});

const User = model("user", userSchema);

module.exports = User;
