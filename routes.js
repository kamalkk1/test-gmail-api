const express = require("express");
const router = express.Router();

// Define a route for the root path
router.get("/", (req, res) => {
  res.send("Hello, this is your Express app!");
});

module.exports = router;
