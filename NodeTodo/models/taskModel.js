var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var taskSchema = new Schema({
    taskname: String,
    tasktype: String, 
    isActive: Boolean
});

var Task = mongoose.model('task', taskSchema);

module.exports = Task;