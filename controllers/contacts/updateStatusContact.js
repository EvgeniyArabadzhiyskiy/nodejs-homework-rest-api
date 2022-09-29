const Contact = require("../../models/contacts");
const missingContact = require("./missingContact");

const updateStatusContact = async (req, res) => {
  const { favorite } = req.body;
  const { _id: owner } = req.user;
  const { contactId } = req.params;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    { favorite },
    { new: true }
  );

  !result && missingContact(contactId);

  res.json({ status: "success", result });
};

module.exports = updateStatusContact;
