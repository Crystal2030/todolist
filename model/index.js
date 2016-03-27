/**
 * Created by crystal on 2016/3/27.
 */
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/todolist');

module.exports = mongoose.model('todo', mongoose.Schema({
    text: String
}));