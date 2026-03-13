import Users from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }
    const emailExist = await Users.findOne({ email });
    if (emailExist) {
      const error = new Error("Email already exist");
      ReportingObserver.statusCode = 400;
      throw error;
    }
    if (password.length < 8) {
      const error = new Error("password must be greater than 8 string");
      error.statusCode = 400;
      throw error;
    }
    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      full_name,
      email,
      password: hashed_password,
    });
    const { password: _, ...userData } = newUser._doc;
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ mssage: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    res.json({ message: "login successfully" });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "logged out successfully" });
};
