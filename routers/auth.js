const { Router } = require("express");
const { register } = require("../controllers/auth");

const authRouter = Router();

authRouter.post("/", register);

module.exports = authRouter;
