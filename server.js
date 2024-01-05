require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConection");
const errorsMiddleware = require("./errors/errorsMiddleware");
const authMiddleware = require("./middlewares/auth");
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/user");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.use(express.json());
server.use("/auth", authRouter);
// routes that needs user to be authenticated
server.use("/", authMiddleware, usersRouter);
server.use(errorsMiddleware);

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
