class APIrespoanse {
  constructor(
    success = true,
    statusCode,
    message = "data fetched successfully",
    data = {}
  ) {
    this.success = success;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      statusCode: this.statusCode,
      data: this.data,
    };
  }
}
export { APIrespoanse };
