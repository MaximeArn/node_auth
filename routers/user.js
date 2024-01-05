const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/userInfo", (req, res, next) => {
  res.json(req.user);
});

module.exports = usersRouter;
