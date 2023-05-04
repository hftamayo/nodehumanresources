import { User } from "../models/User.js";

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
  try{
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(!user) throw new Error('User does not exists');
    return res.json({ login: true });

  }catch (error){
    console.log(error);

  }

};
