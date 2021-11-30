const mongoose = require("mongoose");

const task = new mongoose.Schema({
  name: { type: String },
  isCompleted: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Task", task);
