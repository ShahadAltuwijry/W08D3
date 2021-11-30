const express = require("express");
const userRouter = express.Router();
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");
const { registration, login } = require("./../controller/user");

userRouter.post("/regster", registration);
userRouter.post("/login", login);

module.exports = userRouter;
