import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

//register user
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User Already Exists", 409));

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    sendCookie(user, res, "User Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

//login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Invalid Email or Passsword", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Passsword", 400));

    sendCookie(user, res, `Welcome ${user.username}`, 200);
  } catch (error) {
    next(error);
  }
};
