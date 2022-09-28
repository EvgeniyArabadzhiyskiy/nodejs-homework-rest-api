const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOneAndDelete({ _id: contactId });

  !result && missingContact(contactId);

  res.json({ status: "success", code: 200, result });
};

module.exports = remove;
