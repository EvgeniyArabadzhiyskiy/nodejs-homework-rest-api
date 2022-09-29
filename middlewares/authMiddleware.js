const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const User = require("../models/user");

const { SECRET_KEY } = process.env;

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;

    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Unauthorized("Not authorization");
    }

    const decodedToken = jwt.verify(token, SECRET_KEY);
    const { _id } = decodedToken;

    const user = await User.findById(_id);

    if (!user || !user.token) {
      throw new Unauthorized("Not authorization");
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
