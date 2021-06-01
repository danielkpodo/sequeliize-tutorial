const express = require("express");
const compression = require("compression");
require("dotenv").config();
const morgan = require("morgan");
const app = express();
const {
  internalServerError,
  resourceNotFound,
  startServer,
} = require("./controllers/handlers");

app.use(compression());
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send(process.env.NODE_ENV));

app.use(internalServerError);
app.use(resourceNotFound);

const port = process.env.PORT || 8080;
app.listen(port, () => startServer(port));
