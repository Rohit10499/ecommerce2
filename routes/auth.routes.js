import {Router} from "express";
import { home, register } from "../controllers/auth.controllers.js";


const router=Router();

router.route("/").get(home)
router.route("/register").post(register)


export default router