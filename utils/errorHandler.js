const { ValidationError } = require("express-validation");

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    let error = err;
    if (err.details.body) {
      error = Object.assign({}, { message: err.details.body[0].message });
    } else if (err.details.params) {
      error = Object.assign({}, { message: err.details.params[0].message });
    }
    return res.status(err.statusCode).json(error);
  } else if (err.code === 404) {
    return res.status(404).send("Resource not found");
  }
  return res.status(500).send(`Something went wrong, ${err}`);
};
