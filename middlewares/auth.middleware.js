import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized HTTP ,Toke not provided",
    });
  }
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECERET_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select(
      "-password"
    );
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized . Invalid token" });
  }
};

export default authMiddleware;
