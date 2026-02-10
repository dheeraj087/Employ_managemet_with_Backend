function asyncHeandler(hendler) {
  return async (req, res, next) => {
    try {
      await hendler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
export { asyncHeandler };
