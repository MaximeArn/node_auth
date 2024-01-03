require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConection");
const authRouter = require("./routers/auth");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.use(express.json());
server.use("/auth", authRouter);

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
