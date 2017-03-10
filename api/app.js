const express = require('express')
const app = express()

const { getTodos, getTodo, addTodo, deleteTodo, updateTodo } = require('./dal.js')
const { split } = require('ramda')

const bodyParser = require('body-parser')

const HTTPError = require('node-http-error')
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors({
  credentials: true
}))

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('Welcome to the Todos API!')
})


app.get('/todos', function (req, res, next) {
  getTodos(function (err, todos) {
    if (err) next(new HTTPError(err.status, err.message, err))
    res.status(200).send(todos)
  })
})

app.get('/todos/:id', function (req, res, next) {
  getTodo(req.params.id, function(err, todos) {
    if (err) next(new HTTPError(err.status, err.message, err))
    res.status(200).send(todos)
  })
})

app.delete('/todos/:id', function (req, res, next) {
  deleteTodo(req.params.id, function(err, todo) {
    if (err) next(new HTTPError(err.status, err.message, err))
    res.send(todo)
  })
})

app.post('/todos', function (req, res, next) {
  addTodo(req.body, function(err, todo) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(201).send(todo)
  })
})

app.put('/todos/:id', function (req, res, next) {
  updateTodo(req.body, function (err, todo) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(todo)
  })
})



app.use(function(err, req, res, next) {
    console.log(req.method, " ", req.path, "error:  ", err)
    res.status(err.status || 500)
    res.send(err)
})

app.listen(port, function() {
    console.log("API is up and running on port ", port)
})
