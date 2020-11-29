const { Joi } = require("express-validation");
module.exports = {
  // POST - /records
  postRecordPayload: {
    body: Joi.object({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      minCount: Joi.number()
        .integer()
        .required(),
      maxCount: Joi.number()
        .integer()
        .required()
    })
  }
};
