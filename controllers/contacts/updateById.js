const { BadRequest } = require("http-errors");

const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  if (typeof favorite !== "boolean") {
    throw new BadRequest("missing field favorite or type not boolean");
  }

  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { $set: { favorite } },
    { new: true }
  );

  !result && missingContact(contactId);

  res.json({ status: "success", result });
};

module.exports = updateById;
