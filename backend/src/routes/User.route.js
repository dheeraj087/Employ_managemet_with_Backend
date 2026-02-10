// export const home = () => {
//   app.post("/login", asyncHeandler(rasgister));
// }; old tarika hai app ko sirf entry point me abb use hot ahi ab routs user karte hai

// export const home3 = () => {
//   app.post("/employ", async (req, res) => {
//     try {
//       const data = await req.body;
//       const employ = new Employ(data);
//       const saveEmploy = employ.save();
//       res.status(201).json(saveEmploy);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }; ye bhi vahi hai jo uar me hai or  Routes register hone chahiye, call nahi

//  naya tarika ye hai
import express from "express";
import { asyncHeandler } from "../utils/asyncHeandle.utils.js";
import { getUser } from "../controllers/getUser.controller.js";
import rasgister from "../controllers/register.controller.js";

const router = express.Router();

router.post("/login", asyncHeandler(rasgister));
router.get("/getUser", asyncHeandler(getUser));
router.get("/dheeraj", (req, res, next) => {
  const parms = req.query;

  console.log( parms.q);
});
export default router;
