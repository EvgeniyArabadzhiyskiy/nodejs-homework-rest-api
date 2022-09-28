const express = require("express");

const contactSchema = require("../../schemas/contactSchema");
const { contactsControllers: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.post("/", validation(contactSchema), ctrlWrapper(ctrl.add));
router.delete("/:contactId", ctrlWrapper(ctrl.remove));
router.patch("/:contactId", ctrlWrapper(ctrl.updateById));

module.exports = router;
