const express = require("express");

const loginSchema = require("../../schemas/loginSchema");
const { authMiddleware, validation } = require("../../middlewares");
const ctrlWrapper = require("../../middlewares/controllerWrepper");
const { registration, login, logout, currentUser } = require("../../controllers/authControllers");

const router = express.Router();

router.post("/register", validation(loginSchema), ctrlWrapper(registration));
router.post("/login", validation(loginSchema), ctrlWrapper(login));
router.get("/logout", authMiddleware, ctrlWrapper(logout));
router.get("/current", authMiddleware, ctrlWrapper(currentUser));

module.exports = router;

// hw05-avatars
