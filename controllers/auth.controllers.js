import { User } from "../models/user.models.js";
// import bcrypt from "bcrypt";

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to backend");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    let { username, email, phone, password } = req.body;
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("email  already presant");
    }

    const createdUser = await User.create({ username, email, phone, password });
    //   console.log(createdUser);
    res.status(201).json({
      message: "User created Successfully",
      token: await createdUser.generateToken(),
      userId: createdUser._id.toString(),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalide Credentials" });
    }
    const user = await userExist.comparePassword(password);
    // const user = await bcrypt.compare(password, userExist.password);
    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalide email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

export { home, register, login, user };
