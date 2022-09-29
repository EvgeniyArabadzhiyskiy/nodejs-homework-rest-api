const express = require("express");

const contactSchema = require("../../schemas/contactSchema");
const statusSchema = require("../../schemas/statusSchema");
const { contactsControllers: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, authMiddleware } = require("../../middlewares");

const router = express.Router();

router.use(authMiddleware);

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.post("/", validation(contactSchema), ctrlWrapper(ctrl.add));
router.delete("/:contactId", ctrlWrapper(ctrl.remove));
router.patch("/:contactId/favorite", validation(statusSchema), ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
