const { NotFound } = require("http-errors");

module.exports = function missingContact(id) {
  throw new NotFound(`Contact with id=${id} Not found`);
};
