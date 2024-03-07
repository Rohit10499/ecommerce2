import { Router } from "express";
import {
  getAllContacts,
  getAllUsers,
  deleteUser,
} from "../controllers/admin.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router
  .route("/user/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUser);

export default router;
