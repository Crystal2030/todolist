var express = require('express');
var todoModel = require('../model');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', function(req, res, next) {
  todoModel.find({}, function(err, todos){
    if(err){
      res.send({code:0, msg:'查询错误'});l
    }else{
      res.send(todos);
    }
  });
});

router.post('/todos', function(req, res) {
  var todo = req.body;
  todoModel.create(todo, function(err, todo){
    if(err){
      res.send({code:0, msg:'保存错误'});l
    }else{
      //把保存到数据库中之后的对象发送到客户端
      res.send(todo);
    }
  });
});

module.exports = router;
