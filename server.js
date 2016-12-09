var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var _ = require('lodash');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(urlencodedParser)
var todos = [
    { id: 1, description: 'Meet super man', completed: true },
    { id: 2, description: 'Meet super batman', completed: false },
    { id: 3, description: 'Meet super man', completed: true }
];

var nextTodoId = 4;

// GET /todos
app.get('/todos', function (req, res) {
    res.status(200).json(todos);
})


// GET /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    console.log('search todo', todoId);
    var todo = _.find(todos, function (t) {
        return t.id === todoId;
    });
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).send();
    }
})


// POST /todos
app.post('/todos',function (req, res) {
    if(!req.body){
        res.status(400).send();
    }
    description = req.body.description;
    completed = req.completed;

    res.status(200).json(req.body);
})

app.get('/', function (req, res) {
    res.send('Todo API root documentation');

})

http.listen(PORT, function () {
    console.log('Server started!');
})