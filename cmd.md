#项目命令
##安装express生成器
> npm install express-generator -g

##生成项目
> express -e todolist

##安装bower命令行工具
> npm install -g bower

##初始化bower配置文件
> bower init

##在项目下添加配置文件 .bowerrrc

  {"directory":"./public/lib"}
  >如果没有此配置项，则安装到bower_components目录下


##安装前端框架

> bower install angular --save
> bower install jquery --save
> bower install bootstrap --save

# 初始化项目
```git init```

#在github上创建一个空项目
```不要选最下面的两个选项框```

# 添加并提交代码，推送到远程仓库
> git add .
> git commit -m "init"
> git remote add origin git@github.com:Crystal2030/todolist.git
> git push -u origin master
