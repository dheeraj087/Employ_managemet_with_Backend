import { createEmploy } from "../controllers/createEmploy.controller.js";
import { getEmploy } from "../controllers/getEmploy.controller.js";
import { updateEmploy } from "../controllers/updateEmploy.controller.js";
import { asyncHeandler } from "../utils/asyncHeandle.utils.js";
import express from "express";
export const Employrouter = express.Router();

Employrouter.post("/createEmploy", asyncHeandler(createEmploy));
Employrouter.get("/getEmploy", asyncHeandler(getEmploy));
Employrouter.put("/updateEmploy/:id", asyncHeandler(updateEmploy));
