const express = require("express");
const app = express();
const port = 8000;

// Import the email checking and routes modules
const emailChecker = require("./emailChecker");
const routes = require("./routes");

// Use the email checking module
emailChecker.startEmailChecking();

// Use the routes module
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
