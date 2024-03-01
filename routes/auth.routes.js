import { Router } from "express";
import { home, login, register } from "../controllers/auth.controllers.js";
import validate from "../middlewares/validate.middleware.js";
import signupSchema from "../validator/user.validator.js";
import loginSchema from "../validator/login.validator.js";

const router = Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema),login);

export default router;
