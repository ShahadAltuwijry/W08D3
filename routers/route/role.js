const express = require("express");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");
const roleRouter = express.Router();

const { create, getRoles } = require("./../controller/role");

roleRouter.post("/create", authentication, authorization, create);
roleRouter.get("/roles", authentication, authorization, getRoles);

module.exports = roleRouter;
