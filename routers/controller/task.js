const taskModel = require("./../../db/module/task");
const userModel = require("./../../db/module/user");

//posting a new task
const createTask = (req, res) => {
  try {
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
        // console.log(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    // console.log(error.message);
    res.status(404).json(error.message);
  }
};

//getting all tasks even if its deleted or completed
const allTasksByUserId = (req, res) => {
  taskModel
    .find({ userId: req.addedToken.id, isDeleted: false })
    .then((result) => {
      res.status(200).json(result);
      // console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//setting a task as completed. ps: its permenant
const check = (req, res) => {
  const { id } = req.params; //this is the task id
  console.log(req.addedToken, "complete");

  taskModel
    .findById({ _id: id })
    .then((result) => {
      if (result.isCompleted != false) {
        taskModel
          .findByIdAndUpdate(
            { _id: id },
            { $set: { isCompleted: false } },
            { new: true }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(400).json(err.message);
          });
      } else {
        taskModel
          .findByIdAndUpdate(
            { _id: id },
            { $set: { isCompleted: true } },
            { new: true }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(400).json(err.message);
          });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//setting a task as deleted. ps: its permenant
const softDel = (req, res) => {
  const { id } = req.params; //this is the task id
  console.log(req.addedToken, "deltask");
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
  // console.log(req);
  taskModel
    .find({ userId: req.addedToken.id, isCompleted: false, isDeleted: false })
    .then((result) => {
      res.status(200).json(result);
      // console.log(result);
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
      // console.log(result);
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
      // console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//Admins controllers ---------------------------

const getUserTasks = (req, res) => {
  const { id } = req.params;

  try {
    taskModel.find({ isDeleted: false }).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAll = (req, res) => {
  //getting all users
  try {
    userModel
      .find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteAnyTask = (req, res) => {
  // const { userId } = req.params;
  const { id } = req.params; //this is the task id

  taskModel
    .findOneAndUpdate({ _id: id }, { $set: { isDeleted: true } }, { new: true })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createTask,
  allTasksByUserId,
  check,
  softDel,
  tasksByUserId,
  getCompTasks,
  getDelTasks,
  //admin's
  getAll,
  deleteAnyTask,
  getUserTasks,
};
