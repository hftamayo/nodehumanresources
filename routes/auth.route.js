import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/login", login);

router.post(
  "/register",
  [body("email", "Invalid email format").trim().isEmail().normalizeEmail()],
  register
);

export default router;
