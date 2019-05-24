var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    firstname: String, 
    lastname: String,
    isActive: Boolean
});

var User = mongoose.model('user', userSchema);

module.exports = User;