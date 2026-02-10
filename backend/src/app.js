import express from "express";
import cors from "cors";
import { LIMITE_DATA } from "./constent.js";
import useRoutes from "./routes/User.route.js";
import { Employrouter } from "./routes/employ.route.js";
import { reasponseMiddleWare } from "./middlewares/response.middleware.js";
import { ErrorMiddleware } from "./middlewares/Error.middleware.js";

const app = express();
app.use(express.json({ limit: LIMITE_DATA }));
app.use(
  cors({
    origin: [process.env.ORIGIN_FRONTEND, "http://localhost:5173"],
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: LIMITE_DATA,
  })
);
app.use(reasponseMiddleWare);

app.use("/api/user", useRoutes); // all ueser routes ek jagah
app.use("/api/employ/v1", Employrouter); // all employ routes ek jagah

app.use(ErrorMiddleware);
export { app };
