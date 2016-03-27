var express = require('express');
var todoModel = require('../model');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//给路由先指定路径，在指定方法，还可以链式调用
router.route('/todos').get(function(req, res, next) {
  todoModel.find({}, function(err, todos){
    if(err){
      res.send({code:0, msg:'查询错误'});l
    }else{
      res.send(todos);
    }
  });
}).post(function(req, res) {
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
//删除操作
router.route('/todos/:_id').delete(function(req, res){
  todoModel.remove({_id: req.params._id}, function(err, result){
    if(err){
      res.send({code:0, msg:'删除失败'});
    }else{
      res.send({code:1, msg:'删除成功'});
    }
  })
})

module.exports = router;
