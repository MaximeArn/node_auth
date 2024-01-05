const User = require("../models/user");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },
};
