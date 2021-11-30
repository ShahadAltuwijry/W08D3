const express = require("express");
const authentication = require("./../middlewares/authentication");
const tasksRouter = express.Router();
const {
  createTask,
  completed,
  softDel,
  tasksByUserId,
  allTasksByUserId,
  getDelTasks,
  getCompTasks,
} = require("./../controller/task");

tasksRouter.post("/task/:", authentication, createTask); //posting
tasksRouter.put("/completed/:d", authentication, completed); //marking as complete
tasksRouter.put("/delete/:id", authentication, softDel); //soft deleting
tasksRouter.get("/Tasks", authentication, tasksByUserId); //get uncomp undel user tasks
tasksRouter.get("/allTasks", authentication, allTasksByUserId); //get user existing uncompleted tasks
tasksRouter.get("/delTasks", authentication, getDelTasks); //get user deleted tasks
tasksRouter.get("/compTasks", authentication, getCompTasks); //get all completed tasks

module.exports = tasksRouter;
