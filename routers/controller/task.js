const taskModel = require("./../../db/module/task");
const userModel = require("./../../db/module/user");

//posting a new task
const createTask = (req, res) => {
  const { name } = req.body,
    newTask = new taskModel({
      name,
      userId: req.addedToken.id,
    });

  newTask
    .save()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//getting all tasks even if its deleted or completed
const allTasksByUserId = (req, res) => {
  taskModel
    .find({ userId: req.addedToken.id })
    .then((result) => {
      res.status(200).json(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//setting a task as completed. ps: its permenant
const completed = (req, res) => {
  const { id } = req.params;

  taskModel
    .findOneAndUpdate(
      { _id: id },
      { $set: { isCompleted: true } },
      { new: true }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//setting a task as deleted. ps: its permenant
const softDel = (req, res) => {
  const { id } = req.params;

  taskModel
    .findOneAndUpdate({ _id: id }, { $set: { isDeleted: true } }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//getting only existing and uncompleted tasks
const tasksByUserId = (req, res) => {
  taskModel
    .find({ userId: req.addedToken.id, isCompleted: false, isDeleted: false })
    .then((result) => {
      res.status(200).json(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//getting only completed tasks
const getCompTasks = (req, res) => {
  taskModel
    .find({ userId: req.addedToken.id, isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//getting deleted tasks
const getDelTasks = (req, res) => {
  taskModel
    .find({ userId: req.addedToken.id, isDeleted: true })
    .then((result) => {
      res.status(200).json(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createTask,
  allTasksByUserId,
  completed,
  softDel,
  tasksByUserId,
  getCompTasks,
  getDelTasks,
};
