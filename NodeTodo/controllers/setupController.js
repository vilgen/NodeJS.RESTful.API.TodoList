var Todos = require('../models/todoModel');
var User = require('../models/userModel');
var Task = require('../models/taskModel');

module.exports = function(app){
    
    app.get('/api/setupTodos', function(req, res){

        //seed database
        var starterTodos = [
            {
            username: 'test',
            todo: 'Buy milk',
            isDone: false,
            hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
    ];
    Todos.create(starterTodos, function(err, results){
        if(err) throw err;
        res.send(results);
    });
    });

    app.get('/api/setupUser', function(req, res){

        //seed user
        var starterUser = [
            {
                username: 'test',
                firstname: 'Test',
                lastname: 'Test',
                isActive: true
            },
            {
                username: 'node',
                firstname: 'Node',
                lastname: 'Node',
                isActive: true
            },
            {
                username: 'evilemi',
                firstname: 'Emin',
                lastname: 'Vilgenoğlu',
                isActive: true
            }
        ];
        User.create(starterUser, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.get('/api/setupTask', function(req, res){

        //seed task
        var starterTask = [
            {
                taskname: 'Buy milk',
                tasktype: 'shopping',
                isActive: 'true'
            },
            {
                taskname: 'Buy steak',
                tasktype: 'shopping',
                isActive: 'true'
            },
            {
                taskname: 'Buy potato',
                tasktype: 'shopping',
                isActive: 'true'
            },
            {
                taskname: 'Learn Node',
                tasktype: 'training',
                isActive: 'true'
            }
        ];
        Task.create(starterTask, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
}