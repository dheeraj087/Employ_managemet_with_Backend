import { APIrespoanse } from "../utils/APIresponse.utils.js";

export const reasponseMiddleWare = (req, res, next) => {
  res.success = ({ success, statusCode, message, data } = {}) => {
    const reasponse = new APIrespoanse(success, statusCode, message, data);
    res.status(statusCode || 201).json(reasponse.toJSON());
  };
  next();
};
