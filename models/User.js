import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  try {
    const salt = await bcryptjs.hash(10);
    const hashPassword = await bcryptjs.hash(user.password, salt);
    next();
  } catch (error) {
    console.log(error);
  }
});

export const User = model("user", userSchema);
