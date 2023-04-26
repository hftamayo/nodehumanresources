export const register = (req, res) => {
  console.log(req.body);
  res.json({ register: true});
};

export const login = (req, res) => {
  res.json({ login: true });
};
