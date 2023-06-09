import { Router } from "express";
import { infoUser, login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { requiredToken } from "../middlewares/requiredToken.js";
const router = Router();

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

router.get("/protected", requiredToken ,infoUser);

export default router;
