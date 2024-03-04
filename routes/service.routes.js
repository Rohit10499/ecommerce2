import express from "express";
import { service } from "../controllers/service.controllers.js";

const router = express.Router();
router.route("/service").get(service);

export default router;
