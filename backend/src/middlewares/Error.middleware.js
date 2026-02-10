export const ErrorMiddleware = (error, req, res, next) => {
  const { statusCode, success, message, Error } = error;
  console.log(error);
  res.status(statusCode).json({
    success: success || false,
    statusCode,
    message,
    Error,
  });
};
