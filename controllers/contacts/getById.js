const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOne({ _id: contactId });

  !result && missingContact(contactId);

  res.json({ status: "success", code: 200, result });
};

module.exports = getById;
