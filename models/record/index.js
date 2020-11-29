const mongoose = require("mongoose");
const { RecordSchema } = require("./schema");

mongoose.model("Record", RecordSchema);
module.exports = mongoose.model("Record");
