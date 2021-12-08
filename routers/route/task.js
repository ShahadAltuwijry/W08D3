const express = require("express");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");
const tasksRouter = express.Router();
const {
  createTask,
  check,
  softDel,
  tasksByUserId,
  allTasksByUserId,
  getDelTasks,
  getCompTasks,
  //admin's
  getAll,
  deleteAnyTask,
  getUserTasks,
} = require("./../controller/task");

//user routes
tasksRouter.post("/task/:id", createTask); //posting
tasksRouter.get("/allTasks", authentication, allTasksByUserId); //get user existing uncompleted tasks
tasksRouter.put("/check/:id", check); //marking as complete
tasksRouter.delete("/delete/:id", softDel); //soft deleting
tasksRouter.get("/Tasks", authentication, tasksByUserId); //get uncomp undel user tasks
tasksRouter.get("/completed", authentication, getCompTasks); //get all completed tasks
tasksRouter.get("/delTasks", authentication, getDelTasks); //get user deleted tasks

//admin routes
tasksRouter.get("/adAll", authentication, authorization, getAll);
tasksRouter.delete(
  "/adDel/:id",
  authentication,
  authorization,
  deleteAnyTask
);
tasksRouter.get("/adGet", authentication, authorization, getUserTasks);

module.exports = tasksRouter;
