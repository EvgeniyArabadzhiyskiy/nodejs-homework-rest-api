const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const remove = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  
  const result = await Contact.findOneAndDelete({ _id: contactId, owner });

  !result && missingContact(contactId);

  res.json({ status: "success", code: 200, result });
};

module.exports = remove;
