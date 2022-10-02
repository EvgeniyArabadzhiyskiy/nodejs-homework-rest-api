const { Schema, model } = require("mongoose");
const gravatar = require("gravatar");

const userSchema = Schema(
  {
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

    avatarURL: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: "250" });
      },
    },

    avatarCloudId: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
