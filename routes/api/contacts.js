const express = require("express");

const contactSchema = require("../../schemas/contactSchema");
const { contactsControllers: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const statusSchema = require("../../schemas/statusSchema");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.post("/", validation(contactSchema), ctrlWrapper(ctrl.add));
router.delete("/:contactId", ctrlWrapper(ctrl.remove));
router.patch("/:contactId/favorite", validation(statusSchema), ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
