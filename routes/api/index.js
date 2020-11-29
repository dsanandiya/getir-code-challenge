const router = require("express").Router();
const { validate } = require("express-validation");
const { postRecordPayload } = require("../../config/validation");
const { getFilteredRecords } = require("../../controllers");

router.route("/records").post(validate(postRecordPayload), getFilteredRecords);
module.exports = router;
