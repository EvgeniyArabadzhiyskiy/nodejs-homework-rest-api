const Contact = require("../../models/contacts");

const add = async (req, res) => {
  
  const newContact = {
    ...req.body,
    owner: req.user._id,
  };

  const contact = await Contact.create(newContact);
  res.status(201).json({ status: "success", data: contact });
};

module.exports = add;
