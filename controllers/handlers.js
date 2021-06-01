const { StatusCodes, ReasonPhrases } = require("http-status-codes");

/* eslint-disable no-unused-vars */
const internalServerError = (err, req, res, next) => {
  console.error(err.message);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status_code: StatusCodes.INTERNAL_SERVER_ERROR,
    status_msg: ReasonPhrases.INTERNAL_SERVER_ERROR,
    message: "Something went wrong...",
  });
};

const resourceNotFound = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    status_code: StatusCodes.NOT_FOUND,
    status_msg: ReasonPhrases.NOT_FOUND,
    message: "The endpoint you requested does not exist",
  });
};

const startServer = (port) => {
  console.log(`Server is Listening on port ${port}...`);
};

module.exports = {
  internalServerError,
  resourceNotFound,
  startServer,
};
