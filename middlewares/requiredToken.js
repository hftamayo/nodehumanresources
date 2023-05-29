export const requiredToken = (req, res, next) => {
  try {
    console.log(req.headers);
    next();

  } catch (error) {
    console.log(error);
  }
};
