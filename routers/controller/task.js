const taskModel = require("./../../db/module/task");
const userModel = require("./../../db/module/user");

//posting a new task
const createTask = (req, res) => {
  const { id } = req.params;
  const { name } = req.body,
    newTask = new taskModel({
      name,
      userId: id,
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
  const { id } = req.params;

  taskModel
    .find({ userId: id })
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
  const { id } = req.body;

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
  const { id } = req.body;

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
  const { id } = req.params;

  taskModel
    .find({ userId: id, isCompleted: false, isDeleted: false })
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
  const { id } = req.params;

  taskModel
    .find({ userId: id, isCompleted: true })
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
  const { id } = req.params;

  taskModel
    .find({ userId: id, isDeleted: true })
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
