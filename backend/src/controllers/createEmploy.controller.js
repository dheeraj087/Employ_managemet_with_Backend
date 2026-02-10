import { Employ } from "../models/employ.model.js";
import { ErrorHeandle } from "../utils/ErrorHeandle.utils.js";
;

export const createEmploy = async (req, res, next) => {
  const EmployData = req.body;
  if (!EmployData) {
    throw new ErrorHeandle(404, [
      "plz send the employdata. employdata is not found ",
      "send employdata",
    ]);
  }
  const employcheck = await Employ.findOne({ empId: EmployData.empId });

  if (employcheck) {
    throw new ErrorHeandle(404, [
      "this Employ id is created plz chose another id",
      "plz send another id ",
    ]);
  }

  const reasponse = Employ.create(EmployData);
  res.success({
    statusCode: 201,
    data: reasponse,
    message: "created employ successfully ",
  });
};
