require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConection");
const errorsMiddleware = require("./errors/errorsMiddleware");
const authMiddleware = require("./middlewares/auth");
const adminsMiddleware = require("./middlewares/admins");
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");
const adminsRouter = require("./routers/admins");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.use(express.json());
server.use("/auth", authRouter);
// routes that needs a valid token to be accessed
server.use("/", authMiddleware, usersRouter);
// routes that needs a admin role to be accessed
server.use("/admin", adminsMiddleware, adminsRouter);
server.use(errorsMiddleware);

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
