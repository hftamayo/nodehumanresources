import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/tokenManager.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) throw { code: 11000 };

    user = new User({ email, password });
    await user.save();
    //jwt token
    return res.status(201).json({ register: true });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "User already exists" });
    }
    return res.status(500).json({ error: "Network Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(403).json({ error: "incorrect credentials" });

    const evaluatingPassword = await user.comparePassword(password);
    if (!evaluatingPassword)
      return res
        .status(403)
        .json({ error: "incorrect credentials, check and retry" });

    //if the validation is successful generate the JWT token
    // const token = jwt.sign({uid: user._id}, process.env.JWT_SECRET);
    const { token, expiresIn } = generateToken(user.id);

    return res.json({ token, expiresIn });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Unexpected server error" });
  }
};

export const infoUser = async (req, res) => {
  res.json({ user: "correo@correo.com" });
};
