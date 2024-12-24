import express from "express";
import { testAuth } from "../controllers/auth.controllers.js";

const routes = express.Router();

routes.get("/test", testAuth);

export default routes;
