const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const getById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;

  const result = await Contact.findOne({ _id: contactId, owner });

  !result && missingContact(contactId);

  res.json({ status: "success", code: 200, result });
};

module.exports = getById;
