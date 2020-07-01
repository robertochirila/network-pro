const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", tasksSchema);
module.exports = Tasks;
