export const register = (req, res) => {
  res.json({ register: true});
};

export const login = (req, res) => {
  console.log(req.body);
  res.json({ login: true });
};
