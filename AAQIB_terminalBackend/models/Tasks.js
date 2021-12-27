const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const taskSchema = mongoose.Schema({
  task: String,
  isComplete: Boolean,
  dueDate: { type: Date, default: Date.now() },
  addDate: { type:Date, default:new Date("Nov 7, 2003") },
  
});

function validateTask(data){
  const schema = Joi.object({
    task: Joi.string().min(3).max(100).required(),
    isComplete: Joi.boolean().required(),
  });
  return schema.validate(data, { abortEarly: false });
}

const Task = mongoose.model("Task", taskSchema);
module.exports.Task = Task;
module.exports.validate = validateTask;