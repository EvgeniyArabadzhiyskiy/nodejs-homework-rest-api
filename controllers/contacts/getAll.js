const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const data = await Contact.find({});
  res.json({ status: "success", code: 200, data });
};

module.exports = getAll;
