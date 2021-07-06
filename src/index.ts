console.log("i'm running!")
const express = require("express");
const config = require("config");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");

require("./database");

const home = require("./routes/home");
const error = require("./routes/error");


const app = express();
app.use(express.static("public"));
app.use('/resource', express.static('public'))
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors());

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: Can not read jwtPrivateKey");
  process.exit(1);
}

app.use("/", home);
app.use("*", error);

const port = process.env.PORT || 9009;

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});