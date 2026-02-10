class ErrorHeandle extends Error {
  constructor(statusCode, Error = [], message = "somthing went wrong") {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.Error = Error;
  }
}

export { ErrorHeandle };