import jwt from "jsonwebtoken";

export const requiredToken = (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    if (!token) {
      throw new Error("Error in token access (Bearer blocker)");
    }
    token = token.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: error.message });
  }
};
