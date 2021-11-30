const express = require("express");
// const authentication = require("./../middlewares/authentication");
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

tasksRouter.post("/task/:id", createTask); //posting
tasksRouter.put("/completed", completed); //marking as complete
tasksRouter.put("/delete", softDel); //soft deleting
tasksRouter.get("/Tasks/:id", tasksByUserId); //get uncomp undel user tasks
tasksRouter.get("/allTasks/:id", allTasksByUserId); //get user existing uncompleted tasks
tasksRouter.get("/delTasks/:id", getDelTasks); //get user deleted tasks
tasksRouter.get("/compTasks/:id", getCompTasks); //get all completed tasks

module.exports = tasksRouter;
