import { User } from "../models/User";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    //jwt token
    return res.json({ register: true });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  res.json({ login: true });
};
