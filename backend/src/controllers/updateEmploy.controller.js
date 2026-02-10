import { Employ } from "../models/employ.model.js";
import { asyncHeandler } from "../utils/asyncHeandle.utils.js";

export const updateEmploy = asyncHeandler(async (req, res) => {
  const data = req.body;

  const updataData = await Employ.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  console.log(updataData);

  res.success({
    statusCode: 201,
    data,
  });
});
