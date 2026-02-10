import "dotenv/config";
import dbconoction from "./db/dbConnation.js";
import { app } from "./app.js";
import { User } from "./models/user.model.js";
import { loginControllers } from "./controllers/logIn.controller.js";

dbconoction();

// home();
// home3();
// app.use((error, req, res, next) => {
//   const { statusCode, success, message, Error } = error;
//   console.log(error);
//   res.status(statusCode).json({
//     success: success || false,
//     statusCode,
//     message,
//     Error,
//   });
// }); old syntex hai


app.listen(process.env.PORT || 5000, () => {
  console.log("server is reaning ", process.env.PORT);
});
