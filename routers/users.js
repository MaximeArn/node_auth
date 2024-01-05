const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/profile", (req, res, next) => {
  res.json(req.user);
});

module.exports = usersRouter;
