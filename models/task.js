const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  });

const Task = mongoose.model('Task',taskSchema);

exports.taskSchema = taskSchema;
exports.Task = Task;