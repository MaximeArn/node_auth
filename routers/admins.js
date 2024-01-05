const { Router } = require("express");
const { getUsers } = require("../controllers/admins");

const adminsRouter = Router();

adminsRouter.get("/getUsers", getUsers);

module.exports = adminsRouter;
