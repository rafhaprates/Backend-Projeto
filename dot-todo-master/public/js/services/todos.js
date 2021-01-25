// js/services/todos.js
angular.module('todoService', []) 
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });

angular.module('todoService', [])
    .factory('TodoLists', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos/list');
            },
            create : function(todoData) {
                return $http.post('/api/todos/list', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/list/' + id);
            }
        }
    });

angular.module('todoController', [])

    .controller('mainController', function($scope, $http) {
        $scope.formData = {};
        $http.get('/api/todos')
                .success(function(data) {
                        $scope.todos = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        $http.get('/api/todos/list')
                .success(function(data) {
                        $scope.todolist = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
        $scope.createTodo = function() {
                $http.post('/api/todos', $scope.formData)
                        .success(function(data) {
                                $scope.formData = {};
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.createTodoToList = function(listdata) {
                $http.post('/api/todos', listdata)
                        .success(function(data) {
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        $scope.createList = function() {
                $http.post('/api/todos/list', $scope.listData)
                        .success(function(data) {
                                $scope.listData = {};
                        $scope.todolist = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.deleteList = function(id) {
                $http.delete('/api/todos/list/' + id)
                        .success(function(data) {
                                $scope.todolist = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.deleteTodo = function(id) {
                $http.delete('/api/todos/' + id)
                        .success(function(data) {
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };
        $scope.dateNow = new Date();
        $scope.getdates = function(id){
                $scope.date = new Date();
                $scope.date.setDate($scope.date.getDate() + id-2);
        };
   
    });

