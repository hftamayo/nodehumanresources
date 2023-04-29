import { User } from "../models/User.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) throw { code: 11000 };

    user = new User({ email, password });
    await user.save();
    //jwt token
    return res.json({ register: true });
  } catch (error) {
    console.log(error.code);
    if (error.code === 11000) {
      return res.status(400).json({ error: "User already exists" });
    }
  }
};

export const login = async (req, res) => {
  res.json({ login: true });
};
