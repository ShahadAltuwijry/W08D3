const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "61a60b7752ebd90581f0ff06",
  },
  // tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("User", user);
