const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
  // tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("User", user);
