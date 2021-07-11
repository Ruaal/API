import express from 'express';
import config from 'config';
require("dotenv").config();
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

require("./database");

const home = require("./routes/home");
const error = require("./routes/error");
const auth = require("./routes/auth");
const personas = require("./routes/personas");

const app = express();
app.use(express.static("public"));
app.use('/resource', express.static('public'))

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(compression());
app.use(cors());

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: Can not read jwtPrivateKey");
  process.exit(1);
}

app.use("/", home);
app.use("/api/v1/auth", auth);
app.use("/api/v1/personas", personas);
app.use("*", error);


const port = process.env.SRV_PORT;

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});