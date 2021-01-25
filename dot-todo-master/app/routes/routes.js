// app/routes/routes.js
// carregar o modelo de tarefas
var Todo = require('mongoose').model('Todo');
// expor as rotas para nosso aplicativo com module.exports
module.exports = function(app) {
    // api ---------------------------------------------------------------------
    // GET  todos tOdOs
    app.get('/api/todos', function(req, res) {
        // usa mongoose para obter todas as tarefas no banco de dados
        Todo.find(function(err, todos) {
         // se houver um erro na recuperação, envie o erro. nada após res.send (err) será executado
            if (err)
                res.send(err)
            res.json(todos); // Retornar todos os TODO no formato json
        });
    });
    // criar tarefas e enviar de volta todas as tarefas após a criação
    app.post('/api/todos', function(req, res) {
    // criar um todo, as informações vêm de uma solicitação AJAX do Angular
        Todo.create({
            text: req.body.text,
            username: req.body.username,
            userdata: req.body.userdata,
        }, function(err, todo) {
            if (err)
                res.send(err);
            // obter e retornar todos os todos depois de criar outro
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });
    // deletar a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);
            // obter e retornar todos os todos depois de criar outro
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });


};
