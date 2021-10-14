const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./app/middleware/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", require("./app/controllers/user.controller"));
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server listening on port " + port));
