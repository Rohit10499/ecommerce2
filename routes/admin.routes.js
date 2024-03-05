import { Router } from "express";
import {
  getAllContacts,
  getAllUsers,
} from "../controllers/admin.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/users").get(authMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

export default router;
