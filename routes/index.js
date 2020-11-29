const router = require("express").Router();
const api = require("./api");

router.get("/test", (_, res) =>
  res.status(200).json("Welcome to the Getir Code Challenge")
);
router.get("/", (_, res) =>
  res.status(200).send("Welcome to the Getir Code Challenge")
);
router.use("/api/v1", api);

module.exports = router;
