require("dotenv").config();
const express = require("express");
const connectDb = require("./db/dbConection");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
