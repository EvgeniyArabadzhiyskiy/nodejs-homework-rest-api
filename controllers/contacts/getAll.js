const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const { limit = 20, page = 1 } = req.query;
  const skipContact = (page - 1) * limit;

  const data = await Contact.find({ owner }).limit(limit).skip(skipContact);

  res.json({ status: "success", code: 200, data });
};

module.exports = getAll;
