const express = require("express");
const BodyParser = require("body-parser");
const config = require("./config");
const routes = require("./routes");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");
// server
const app = express();

// middleware
app.use(cors()); // enable CORS
app.use(BodyParser.json());

// routes
app.use(routes);

app.use(errorHandler);

app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.port}`);
});
