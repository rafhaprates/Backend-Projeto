var Todolist = require('mongoose').model('TodoList');

module.exports = function(app) {
    app.get('/api/todos/list', function(req, res) {
        Todolist.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos); 
        });
    });
    app.post('/api/todos/list', function(req, res) {
        Todolist.create({
            text: req.body.text,
            listname: req.body.listname,
            userdata: req.body.userdata,
            color: req.body.color,
            usercheck: req.body.usercheck,
        }, function(err, todo) {
            if (err)
                res.send(err);
            Todolist.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });
    app.delete('/api/todos/list/:todo_id', function(req, res) {
        Todolist.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);
            Todolist.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });


};
