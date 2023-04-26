export const register = async(req, res) => {
  console.log(req.body);
  res.json({ register: true});
};

export const login = async(req, res) => {
  res.json({ login: true });
};
