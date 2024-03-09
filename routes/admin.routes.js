import { Router } from "express";
import {
  getAllContacts,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUserById,
} from "../controllers/admin.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router
  .route("/user/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUser);

router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router
  .route("/users/update/:id")
  .put(authMiddleware, adminMiddleware, updateUserById);
export default router;
