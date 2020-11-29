const { getRecords } = require("../services/records");

const getFilteredRecords = async (req, res, next) => {
  try {
    const body = req.body;
    const records = await getRecords(body);
    return res.status(200).json({ code: 0, msg: "Success", records });
  } catch (error) {
    req.log.error(error);
    return next(error);
  }
};

module.exports = { getFilteredRecords };
