import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
const router = express.Router();

router.post(
  "/register",
  [
    body("email", "Invalid email format").trim().isEmail().normalizeEmail(),
    body("password", "the minimum length is 6 characters")
      .trim()
      .isLength({ min: 6 }),
    body("password", "Invalid password").trim().isLength({ min: 6 }),
    body("password", "invalid password").custom((value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("the given passwords are different");
      }
      return value;
    }),
  ],
  validationResultExpress,
  register
);

router.post(
  "/login",
  [
    body("email", "invalid email").trim().isEmail().normalizeEmail(),
    body("password", "Minimum 6 characters required")
      .trim()
      .isLength({ min: 6 }),
  ],
  validationResultExpress,
  login
);

export default router;
