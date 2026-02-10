import { User } from "../models/user.model.js";
import { ErrorHeandle } from "../utils/ErrorHeandle.utils.js";

const rasgister = async (req, res, next) => {
  const Userdata = req.body;

  try {
    const checkInDb = await User.findOne({
      $or: [{ email: Userdata.email }, { username: Userdata.username }],
    });

    if (!Userdata) {
      throw new ErrorHeandle(
        404,
        ["data is not found plz send the data"],
        "data is not found"
      );
    }

    if (checkInDb) {
      throw new ErrorHeandle(
        401,
        ["use is registered also"],
        "plz singUp user also register"
      );
    }

    const saveUser = new User(Userdata);
    await saveUser.save();
    const accsesTokens = saveUser.accsesToken();
    const RefreshTokens = saveUser.RefreshToken();
   
    
    res.success({
      data: {
        username: saveUser.username,
        email: saveUser.email,
        fullname: saveUser.fullName,
        tokens: {
          RefreshTokens,
          accsesTokens,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
export default rasgister;
