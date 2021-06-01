const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const handleNotFound = (req, res, msg) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    status_code: StatusCodes.NOT_FOUND,
    status_message: ReasonPhrases.NOT_FOUND,
    message: msg,
  });
};

module.exports = {
  handleNotFound,
  handleServerError,
};
