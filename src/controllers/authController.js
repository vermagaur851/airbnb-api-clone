import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";

// signup
const signup = async (req, res) => {
  try {
    const isExist = await User.find({ email: req.body.email });
    if (isExist.length) {
      res
        .status(200)
        .json({ success: true, message: "User already exists !!" });
      return;
    }

    const passwd = await bcrypt.hash(req.body.password, 10);
    const data = {
      ...req.body,
      password: passwd,
    };
    const newUser = new User(req.body);

    try {
      await newUser.save();
    } catch (error) {
      console.log(error.message);
    }

    res.status(201).json({ success: true, data: { user: newUser } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ success: false, message: "User Not found !!" });
  } else if (!(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ success: false, message: "Invalid Credentials !!" });
  } else {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const options = {
      httpOnly: true,
    };
    try {
      res
        .status(200)
        .cookie("token", token, options)
        .json({ status: "success", token });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export { signup, login };
