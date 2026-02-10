import { User } from "../models/user.model.js";
import { ErrorHeandle } from "../utils/ErrorHeandle.utils.js";


export const getUser = async (req, res, next) => {
  const data = await User.find().select("username email fullName -_id").lean();
  if (!data) {
    throw new ErrorHeandle(404, ["data not found"], "users is not found");
  }
  res.success({
    statusCode: 201,
    data: data,
  });
};
