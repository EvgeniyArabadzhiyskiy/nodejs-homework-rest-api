const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  );

  !result && missingContact(contactId);

  res.json({ status: "success", result });
};

module.exports = updateStatusContact;
