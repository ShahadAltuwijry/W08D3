const express = require("express");
require("dotenv").config();
const db = require("./db/index");
const cors = require("cors");
const roleRouter = require("./routers/route/role");
const userRouter = require("./routers/route/user");
const tasksRouter = require("./routers/route/task");

const app = express();
app.use(cors());
app.use(express.json());
app.use(roleRouter);
app.use(userRouter);
app.use(tasksRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
