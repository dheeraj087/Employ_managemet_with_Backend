import { Employ } from "../models/employ.model.js";
import { ErrorHeandle } from "../utils/ErrorHeandle.utils.js";
;

export const getEmploy = async (req, res, next) => {
  const parms = req.parms
  
  const data = await Employ.find();
  if (!data) {
    throw new ErrorHeandle(404, ["data not found"], "users is not found");
  }
  res.success({
    statusCode: 201,
    data: data,
  });
};