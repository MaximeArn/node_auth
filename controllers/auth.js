const User = require("../models/user");
module.exports = {
  register: async ({ body: { username, password, email } }, res, next) => {
    try {
      const newUser = new User({ username, password, email });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  },
};
