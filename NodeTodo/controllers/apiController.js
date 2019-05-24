var Todos = require('../models/todoModel');
var Users = require('../models/userModel');
var Tasks = require('../models/taskModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/todos', function(req, res){
        Todos.find(function(err, todos){
                if(err) throw err;
                res.send(todos);
            });
    });

    app.get('/api/todos/:uname', function(req, res){
        Todos.find({username: req.params.uname},
            function(err, todos){
                if(err) throw err;

                res.send(todos);
            });
    });

    app.get('/api/todo/:id', function(req, res){
        Todos.findById({_id: req.params.id}, function(err, todo){
            if(err) throw err;

            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res){
        
        //update record if exists already
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment}, function(err){
                    if(err) throw err;
                    res.send('Success');
                });
        }
        else{
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(req, res){
        Todos.findByIdAndRemove(req.body._id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });

    /*User schema crud operations*/
    app.get('/api/users', function(req, res){
        Users.find(function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.get('/api/users/:uname', function(req, res){
        Users.find({username: req.params.uname},function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.post('/api/user', function(req, res){

        if(req.body.id){
            Users.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                isActive: req.body.isActive
            }, function(err){
                if(err) throw err;
                res.send('User updated!');
            });
        }

        else{
            var newUser = new Users({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                isActive: req.body.isActive
            });

            newUser.save(function(err){
                if(err) throw err;
                res.send('User Created!');
            });
        }
    });

    app.delete('/api/user', function(req, res){
        Users.findByIdAndRemove(req.body._id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });

    app.get('/api/tasks', function(req, res){
        Tasks.find(function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.get('/api/tasks/:id', function(req, res){
        Tasks.find({_id: req.params.id}, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.post('/api/task', function(req, res){
        if(req.body.id){
            Tasks.findByIdAndUpdate(req.body.id, {
                taskname: req.body.taskname,
                tasktype: req.body.tasktype,
                isActive: req.body.isActive
            }, function(err){
                if(err) throw err;
                res.send('Task updated!');
            });
        }

        else{
            var newTask = Tasks({
                taskname: req.body.taskname,
                tasktype: req.body.tasktype,
                isActive: req.body.isActive
            });

            newTask.save(function(err){
                if(err) throw err;
                res.send('Task created');
            });
        }
    });

    app.delete('/api/task', function(req, res){
        Tasks.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Deleted');
        });
    });
}