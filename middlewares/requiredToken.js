export const requiredToken = (req, res, next) => {
  try {
    const token = req.headers?.authorization;
    if (!token) {
      throw new Error("Error in token access (Bearer blocker)");
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: error.message });
  }
};
